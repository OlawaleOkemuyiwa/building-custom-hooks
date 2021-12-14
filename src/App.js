import React, { useState, useEffect } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {    
    const config = { 
      url: 'https://new-react-http-bdae2-default-rtdb.firebaseio.com/tasks.json'
    };
  
    const transformTasks = tasksObj => {
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
      setTasks(loadedTasks);
    }
    
    fetchTasks(config, transformTasks);       //CCC2: the state managed in the custom hook is implicitly attached to the state of the components inwhich the hook is used, so a change in state in such custom hook triggers the re-execution of the component function in wich it is used.
  }, [fetchTasks]);

  const taskAddHandler = task => {
    setTasks(latestTasks => latestTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask retrieveCreatedTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}  
      /> {/*Shouldn't the arguments of the fetcTasks func binded so they could be used as we click the btn???*/}
    </React.Fragment>
  );
}

export default App;
