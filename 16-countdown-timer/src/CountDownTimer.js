import React from "react";

const CountDownTimer = ({ initialtime, ontimeFinish }) => {
  const [time, setTime] = useState(initialtime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalReference = useRef();

  useEffect(() => {
    if (isRunning) {
      //internal
      intervalReference.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalReference.current);
            setIsRunning(false);

            if (ontimeFinish) {
              ontimeFinish();
            }

            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalReference.current);
    }
  }, [isRunning, ontimeFinish]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="timer">
      <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default CountDownTimer;
