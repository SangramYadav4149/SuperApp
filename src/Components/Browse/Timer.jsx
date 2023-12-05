import up from "../../Assets/up.png";
import down from "../../Assets/down.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import beepSound from "../../Assets/beep-04.wav";
import { useState } from "react";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [user, setUser] = useState(false);
  const [playing, setPlaying] = useState(false);

  const palyStop = () => {
    setUser(true);
    setPlaying(!playing);
  };
  if (!playing && user) {
    new Audio(beepSound).play();
  }

  const increaseSecond = () => {
    if (seconds == 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes == 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds == 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes == 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours == 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (seconds === 0 && hours === 0 && minutes == 0) {
      setUser(false);
      if (playing) {
        setPlaying(!playing);
      }
      if (user && playing) {
        new Audio(beepSound).play();
      }
    }

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div
      style={{
        minWidth: "63vw",
        maxWidth: "63vw",
        height: "35vh",
        background: "#1E2343",
        // position: "absolute",
        borderRadius: "12px",
        marginTop: "6px",

        display: "flex",
        boxSizing: "border-box",
        padding: "12px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
        >
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "1.5rem" }}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div
        style={{ maxWidthwidth: "38vw", height: "14rem", textAlign: "center" }}
      >
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "1rem",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p>Hours</p>
            <img
              style={{ width: "20px", height: "20px" }}
              onClick={increaseHour}
              src={up}
            />
            <p>{hours}</p>
            <img
              style={{ width: "20px", height: "20px" }}
              onClick={decreaseHour}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p>Minutes</p>
            <img
              style={{ width: "20px", height: "20px" }}
              onClick={increaseMinute}
              src={up}
            />
            <p>{minutes}</p>
            <img
              style={{ width: "20px", height: "20px" }}
              onClick={decreaseMinute}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p>Seconds</p>
            <img
              style={{ width: "20px", height: "20px" }}
              onClick={increaseSecond}
              src={up}
            />
            <p>{seconds}</p>
            <img
              style={{ width: "20px", height: "20px" }}
              onClick={decreaseSecond}
              src={down}
            />
          </div>
        </div>
        <button
          onClick={() => palyStop()}
          style={{
            background: "#FF6A6A",
            borderRadius: "20px",
            padding: "10px",
            border: "none",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          {playing ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};
export default Timer;
