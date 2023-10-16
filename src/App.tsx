import { useState } from 'react';
import './app.css'
import { FaRegBell } from 'react-icons/fa'
import { BiTask } from 'react-icons/bi'
import { BsCheck2Square, BsGithub, BsLinkedin } from 'react-icons/bs'
import { Task } from './components/Task';

export function App() {

  const [ task, setTask ] = useState<string[]>([]);
  const [ taskName, setTaskName ] = useState<string>('');

  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!taskName) return

    e.preventDefault();
    setTask([...task, taskName]);
    setTaskName('');

  }

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleDelete = (name: string) => {
    const index = task.indexOf(name);
    if (index !== -1) {
      const newArr = [...task];
      newArr.splice(index, 1);
      setTask(newArr);
    }
  }

  return(
    <div className="container">

      <div className="top-content">

        <div className='social-midias'>
          <a href="https://github.com/igormtt" target='_blank'> <BsGithub color="FFF" size={20}/> </a>
          <a href="https://www.linkedin.com/in/igor-motta-9588b4215/" target='_blank'> <BsLinkedin color="FFF" size={20} /> </a>
        </div> 

        <div className="top-content-title">
          <h1><FaRegBell color='orange' size={27} />Todo <span>List</span></h1>
        </div>

        <div className="input-container">
          <input type="text" placeholder='Type your task' value={taskName} onChange={handleTaskNameChange} />
          <button id='create-btn' onClick={newTask}> Create Task <BsCheck2Square size={15}  /> </button>
        </div>

      </div>

      <div className="tasks-area">

        <div className="tasks-infos">
          {task.length > 0 ? <h2>Created Tasks <span className='taskQtd'>{task ? task.length : 0}</span></h2> : ( '' )}
        </div>


        <div className="tasks">
          
          {task.length > 0 ? (
                task.map((task, index) => (
                  <Task key={index} name={task}  handleDelete={()=> {handleDelete(task); return 0;}}/>
                ))
              ): (
              <div className="no-tasks">
                <BiTask size={60} color="626262"/>
                <p className='noTask one'>You haven't registered a task yet.</p>
                <p className='noTask'>Create an task!</p>
              </div>
            )}
          
        </div>

        

      </div>

    </div>
  );
}
