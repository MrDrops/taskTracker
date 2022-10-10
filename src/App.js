import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor appointment',
            day: '12/10/22',
            reminder: true,
        },
        {
            id: 2,
            text: 'Work Meeting',
            day: '13/10/22',
            reminder: true,
        },
        {
            id: 3,
            text: 'Shopping',
            day: '14/10/22',
            reminder: false,
        }
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    console.log('hi');
    setTasks(tasks.filter(task => {
      return task.id !== id
    }));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? 
        { ...task, reminder: !task.reminder } : task
      )
    )
  };

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(show => !show)}
        showAdd={showAddTask}  
      />
      {
        showAddTask &&
        <AddTask onAdd={addTask}/>
      }
      {
        tasks.length > 0 ?
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
        :
        'No Tasks to show'
      }
    </div>
  );
}

export default App;
