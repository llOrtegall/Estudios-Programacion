import { useState } from "react";
import { Id, Task } from "../types/types";
import TrashIcon from "./icons/TrashIcons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props): JSX.Element {
  const [mouseIsOver, setMouseIsOver] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = 
    useSortable({ id: task.id, data: { type: "Task", task }, disabled: editMode })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  const toggleEditMode = () => {
    setEditMode(prev => !prev)
    setMouseIsOver(false)
  }

  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style}
        className="gap-4 p-2 bg-slate-800 my-2 rounded-md h-[100px] min-h-[100px] items-center flex text-left border-2 cursor-grab relative opacity-30" />
    )
  }

  if (editMode) {
    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}
        className="gap-4 p-2 bg-slate-800 my-2 rounded-md h-[100px] min-h-[100px] items-center flex text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative">
        <textarea className="h-[90%] w-full resize-none border-none rounded-md bg-transparent focus:outline-none"
          value={task.content} autoFocus placeholder="Task content here" onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) { toggleEditMode() }
          }}
          onChange={e => updateTask(task.id, e.target.value)}
        >

        </textarea>
      </div>
    )
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}
      className="gap-4 p-2 bg-slate-800 my-2 rounded-md h-[100px] min-h-[100px] items-center flex text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
      onMouseEnter={() => { setMouseIsOver(true) }}
      onMouseLeave={() => { setMouseIsOver(false) }}
      onClick={toggleEditMode}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>
      {
        mouseIsOver && (
          <button className="stroke-white absolute right-4 top-1/2-traslate-y-1/2 bg-slate-700 p-2 rounded hover:bg-rose-500 opacity-60 hover:opacity-100"
            onClick={() => deleteTask(task.id)}>
            <TrashIcon />
          </button>
        )
      }
    </div>
  )
}

export default TaskCard;