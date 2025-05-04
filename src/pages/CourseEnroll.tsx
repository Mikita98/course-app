import {FC} from "react";
import {useParams} from "react-router-dom";

const CourseEnroll: FC = () => {
  const {courseId} = useParams<{ courseId: string }>();

  return(
    <div className="flex justify-center">
      <p className="text-neutral-100">
        Course {courseId} - Enrollment coming soon!
      </p>
    </div>
  )
}

export default CourseEnroll