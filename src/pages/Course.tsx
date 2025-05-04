import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CourseDetails from "@/components/CourseDetails.tsx";
import {CourseSessionInfo} from "@/types";
import { useNavigate } from 'react-router-dom';

const Course: FC = () => {
  const {courseId} = useParams<{ courseId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessions, setSessions] = useState<CourseSessionInfo[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      if (!courseId) {
        setError('No course ID provided');
        setIsLoading(false);
        return;
      }

      try {
        const [courseResponse, savedStatusResponse] = await Promise.all([
          fetch(`/api/courses/${courseId}/schedule`),
          fetch(`/api/profile/saved/courses/${courseId}/status`)
        ]);

        if (!courseResponse.ok) {
          throw new Error('Failed to fetch course details');
        }

        if (!savedStatusResponse.ok) {
          throw new Error('Failed to fetch saved status');
        }

        const courseData = await courseResponse.json();
        const { isSaved: savedStatus } = await savedStatusResponse.json();

        setSessions(courseData);
        setIsSaved(savedStatus);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, [courseId]);

  const handleToggleSave = async () => {
    try {
      const response = await fetch(`/api/profile/saved/courses/${courseId}`, {
        method: isSaved ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to save/unsave course');
      }

      setIsSaved(!isSaved);
    } catch (error) {
      console.error('Error toggling course save:', error);
    } finally {
      setIsLoading(false);
    }
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center mt-8">
      <CourseDetails
        sessions={sessions}
        onSave={handleToggleSave}
        isSaved={isSaved}
        onEnroll={() => navigate(`/course/${courseId}/enroll/`)
      } />
    </div>
  );
};

export default Course;