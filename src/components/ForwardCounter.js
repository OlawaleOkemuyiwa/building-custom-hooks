import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(latestCounter => latestCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
