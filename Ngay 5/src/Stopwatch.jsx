import React, { useEffect, useRef, useState } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if(isRunning){
        intervalIdRef.current=setInterval(() =>{
            setElapsedTime(Date.now() - startTimeRef.current);
        })
    }
    return () => {
        clearInterval(intervalIdRef.current);
    }
  }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function padZero(value) {
    return value < 10 ? `0${value}` : String(value);
  }

  function formatTime() {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
    }

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-display">{formatTime()}</h1>
      <div className="stopwatch-buttons">
        <button className="stopwatch-btn stopwatch-btn-start" onClick={start}>Start</button>
        <button className="stopwatch-btn stopwatch-btn-stop" onClick={stop}>Stop</button>
        <button className="stopwatch-btn stopwatch-btn-reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
