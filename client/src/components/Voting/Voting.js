import { useEffect, useState } from "react";
import sound from '../../assets/sounds/alert.mp3';

import './Voting.css';

const audio = new Audio();
audio.src = sound;
audio.preload = 'auto';

export default function Voting(props) {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState({
        yes: 0,
        no: 0
    })
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState('');
    const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);

    useEffect(() => {
        if (count === props.players) {
            setIsFinished(true);
            if (score.yes > score.no) {
                setResult('The vote succeed!');
            } else {
                setResult('The vote failed!');
            }
        }
    }, [count])

    const toggleButtons = (val) => {
        setIsButtonsDisabled(val);
        
    }

    const handleVoteClick = (e) => {
        e.preventDefault();
        toggleButtons(true);
        const timeout = setTimeout(() => toggleButtons(false), 1000);
        try {
            if (!audio.ended) {
                audio.pause();
                audio.currentTime = 0.0;
            }
            audio.play().catch(e => console.error(e));
        } catch (e) {
            console.error(e);
            clearTimeout(timeout);
            toggleButtons(false);
        }
        const field = e.target.name;
        const newScore = { ...score };
        newScore[field]++;
        setScore(newScore);
        setCount(prev => ++prev);
    }

    const handleDropClick = () => {
        if (!isFinished) {
            const shouldDrop = confirm('This action will drop current vote! Continue?');
            if (!shouldDrop) {
                return;
            }
        }
        props.onDrop();
    }
    return (
        <div className="voting">
            {isFinished
                ? <p className="voting__result">{result}</p>
                :
                <div>
                    <div className="row center">
                        <a className="btn-large" name="yes" onClick={handleVoteClick} disabled={isButtonsDisabled}>Ja!</a>
                    </div>
                    <div className="row center">
                        <a className="btn-large red" name="no" onClick={handleVoteClick} disabled={isButtonsDisabled}>Nein!</a>
                    </div>
                    <div className="row center">
                        <p>
                            {count} of {props.players} voted
                        </p>
                    </div>
                </div>
            }
            <div className="row center">
                <a className="btn cst-btn" name="drop" onClick={handleDropClick}>Drop the vote</a>
            </div>
        </div>
    )
}