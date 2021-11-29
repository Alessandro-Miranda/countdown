import React, { useEffect, useState } from "react";
import { countdown } from './utils/countdown';

function App() {
  
  return <Countdown targetDate='2022-12-31' />
}

function Countdown(props)
{
  const [ timeRemaining, setTimeRemaining ] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    hasFinished: false,
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
  );
}

export default App;
