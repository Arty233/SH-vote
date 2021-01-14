import { useEffect, useState } from "react";
import playSound from "../../utils/alert";

import './Voting.css';

export default function Voting(props) {
    const [count, setCount] = useState(0);
    const [score, setScore] = useState({
        yes: 0,
        no: 0
    })
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        console.log(typeof props.players)
        if (count === props.players) {
            setIsFinished(true);
            if (score.yes > score.no) {
                setResult('The vote succeed!');
            } else {
                setResult('The vote failed!');
            }
        }
    }, [count])

    const handleVoteClick = (e) => {
        try {
            window.navigator.vibrate(300);
            playSound();
        } catch (e) {
            console.error(e);
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
                        <a className="btn-large" name="yes" onClick={handleVoteClick}>Ja!</a>
                    </div>
                    <div className="row center">
                        <a className="btn-large red" name="no" onClick={handleVoteClick}>Nein!</a>
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