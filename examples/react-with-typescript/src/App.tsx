import { useEffect, useState } from "react";
import { countdown } from './utils/countdown';
import { TimeSplit } from "./utils/types/globals";

function App() {
  return <Countdown targetDate='2030-12-31' />;
}

// Countdown component
type Props ={ 
  targetDate: string;
  // outras props
}

function Countdown(props: Props)
{
  const [ timeRemaining, setTimeRemaining ] = useState<TimeSplit>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    hasFinished: false
  });

  useEffect(() => {
    if(timeRemaining.hasFinished) return;

    countdown(props.targetDate, setTimeRemaining);
  }, [timeRemaining]);

  return (
    <div>
      <p>{timeRemaining.days}</p>
      <p>{timeRemaining.hours}</p>
      <p>{timeRemaining.minutes}</p>
      <p>{timeRemaining.seconds}</p>
    </div>
  )
}
export default App;
