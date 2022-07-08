import React, {useEffect, useRef, useState} from 'react';
import s from "./CountDown.module.css";
import {AiOutlineClockCircle} from "react-icons/all";

const CountDown = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
      const countDownDate = new Date('July 30, 2022 10:30:00').getTime();

      interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = countDownDate - now;

          const days = Math.floor(distance/ (1000 * 60 * 60 * 24));
          const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
          const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
          const seconds = Math.floor(distance % (1000 * 60) / 1000);

          if (distance < 0) {
              //stop our timer
              clearInterval(interval.current);
          } else {
              //update timer
              setTimerDays(days);
              setTimerHours(hours);
              setTimerMinutes(minutes);
              setTimerSeconds(seconds);
          }

      },1000);
    };
    //componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <section className={s.timerContainer}>
                <section className={s.timer}>
                    <div>
                        <span className={s.timerIcon}>
                            <h3><AiOutlineClockCircle/></h3>
                        </span>
                        <h2>
                           Event
                             <strong> Starts </strong>
                           In Next
                        </h2>
                        {/*<p>Countdown to a really special date. One you could or would never imagine!</p>*/}
                    </div>
                    <div >
                        <section>
                            <section className={s.countDown}>{timerDays}</section>
                            <p>Days</p>
                        </section>
                        <span>:</span>
                        <section>
                            <section className={s.countDown}>{timerHours}</section>
                            <p>Hours</p>
                        </section>
                        <span>:</span>
                        <section>
                            <section className={s.countDown}>{timerMinutes}</section>
                            <p>Minutes</p>
                        </section>
                        <span>:</span>
                        <section>
                            <section className={s.countDown}>{timerSeconds}</section>
                            <p>Second</p>
                        </section>
                    </div>
                </section>
        </section>
    );
};

export default CountDown;















// import React from "react";
//
//
// const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
//     const [paused, setPaused] = React.useState(false);
//     const [over, setOver] = React.useState(false);
//     const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
//
//     const tick = () => {
//         if (paused || over) return;
//
//         if (h === 0 && m === 0 && s === 0) {
//             setOver(true);
//         } else if (m === 0 && s === 0) {
//             setTime([h - 1, 59, 59]);
//         } else if (s == 0) {
//             setTime([h, m - 1, 59]);
//         } else {
//             setTime([h, m, s - 1]);
//         }
//     };
//
//     const reset = () => {
//         setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
//         setPaused(false);
//         setOver(false);
//     };
//
//     React.useEffect(() => {
//         const timerID = setInterval(() => tick(), 1000);
//         return () => clearInterval(timerID);
//     });
//
//     return (
//         <div>
//             <p>{`${h.toString().padStart(2, '0')}:${m
//                 .toString()
//                 .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
//             <div>{over ? "Time's up!" : ''}</div>
//             <button onClick={() => setPaused(!paused)}>
//                 {paused ? 'Resume' : 'Pause'}
//             </button>
//             <button onClick={() => reset()}>Restart</button>
//         </div>
//     );
// };
//
//
// export default CountDown;