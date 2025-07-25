import style from './styles.module.css';

function Timer() {
    return (
        <div className="timer">
            <span className={style.timer}>00:00</span>
        </div>
    )
}

export default Timer;