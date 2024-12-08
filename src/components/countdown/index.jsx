import React , { useState , useEffect } from 'react';

function Countdown(props) {

    const [countdownDate] = useState(new Date('01/10/2025').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    },);

    const setNewTime = () => {
        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };
    return (
        <div className="countdown__timer">
            <div className="countdown__item">
                {state.days || '0'}
            </div>
            <div className="countdown__item countdownhours">
            {state.hours || '00'}
            </div>
            <div className="countdown__item countdownminutes">
            {state.minutes || '00'}
            </div>
            <div className="countdown__item countdownseconds">
            {state.seconds || '00'}
            </div>
        </div>
    );
}

export default Countdown;