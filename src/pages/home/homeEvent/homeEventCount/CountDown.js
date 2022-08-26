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
