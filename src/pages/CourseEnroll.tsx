import {FC} from "react";
import {useParams} from "react-router-dom";

const CourseEnroll: FC = () => {
  const {courseId} = useParams<{ courseId: string }>();

  return(
    <h1 className="text-neutral-100">
      Course {courseId} enrolling under construction!
    </h1>
  )
}

export default CourseEnroll