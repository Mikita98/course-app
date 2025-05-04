import {CourseSessionInfo} from "@/types";
import {FC, useState} from "react";
import Button from "@/components/Button.tsx";
import CourseSession from "@/components/CourseSession";
import {BookmarkIcon} from "@/components/BookmarkIcon.tsx";


const CourseDetails: FC<{ sessions: CourseSessionInfo[], isSaved: boolean, onSave: () => void, onEnroll: () => void }> = ({sessions, isSaved, onSave, onEnroll}) => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="gap-6 rounded-4 bg-neutral-100 px-8 py-6 flex flex-col w-full w-[536px] max-w-[536px]">

      <h4 className="text-title-large">Course Dates</h4>
      {sessions.map((session) => (
        <CourseSession
          id={session.id}
          key={session.id}
          dates={session.dates}
          instructors={session.instructors}
          location={session.location}
          pricing={session.pricing}
          onSelect={setSelected}
          selected={selected}
        />
      ))}

      <Button.Root onClick={onEnroll} variant="primary">
        <Button.Text>
          Enroll in Course
        </Button.Text>
      </Button.Root>


      <div className="justify-center flex">
        <Button.Root onClick={onSave} className="w-[150px]" variant="secondary">
          <Button.Icon>
            <BookmarkIcon filled={isSaved}/>
          </Button.Icon>
          <Button.Text>Save Course</Button.Text>
        </Button.Root>
      </div>

    </div>
  )
}

export default CourseDetails