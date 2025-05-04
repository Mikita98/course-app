import {FC} from "react";
import {useParams} from "react-router-dom";

const CourseEnroll: FC = () => {
  const {courseId} = useParams<{ courseId: string }>();

  return(
    <div className="flex justify-center pt-6">
      <p className="text-neutral-100 text-title-large">
        Course {courseId} - Enrollment coming soon!
      </p>
    </div>
  )
}

export default CourseEnroll