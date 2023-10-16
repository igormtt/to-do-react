import { useState } from 'react';
import './Task.css'

import { BsTrash3 } from "react-icons/bs";

interface UITask {
  name: string;
  handleDelete: () => number;
}

export function Task({ name, handleDelete,  }: UITask) {

  const [ inputChecked, setinputChecked ] = useState<boolean>(false);

  const handleCheck = () => {
    setinputChecked(!inputChecked)
  }

  return (
    <div className="task">
      <div className="task_name_container">
        <input type="checkbox" onChange={handleCheck} className="checkbox" /> 
        <p className={inputChecked ? "checked" : "unchecked"}>{name}</p>
      </div>

      <BsTrash3 onClick={handleDelete} className="trash_icon" color="white" size={19} />
    </div>
  );
}
