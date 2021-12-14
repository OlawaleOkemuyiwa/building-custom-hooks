import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = props => {

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTaskObj = (taskText, taskData) => {
    const generatedId = taskData.name;      //firebase-specific => "name" contains generated id of the posted item/element
    const createdTask = { id: generatedId, text: taskText };

    props.retrieveCreatedTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    const config = {
      url: 'https://new-react-http-bdae2-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      },
    }
    
    sendTaskRequest(config, createTaskObj.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm retrieveTaskText={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

