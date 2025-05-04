import { Routes, Route, Navigate } from 'react-router-dom';
import Course from "@/pages/Course.tsx";
import CourseEnroll from "@/pages/CourseEnroll.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/course/100" replace />} />

        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/course/:courseId/enroll" element={<CourseEnroll />} />
      </Routes>
    </>
  )
}

export default App
