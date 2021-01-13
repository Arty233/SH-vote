import { useState } from "react";
import Voting from "../Voting/Voting";

import './Vote.css'

export default function Vote() {
    const [numOfPlayers, setNumOfPlayers] = useState(null);
    const [isPlayersSet, setIsPlayersSet] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setNumOfPlayers(Number(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (numOfPlayers < 2 || numOfPlayers > 20) {
            setErrorMessage('Wrong number of players!');
            return;
        }
        setIsPlayersSet(true);
        setErrorMessage('');
    }

    const handleDropVoting = () => {
        setIsPlayersSet(false);
    }

    return (
        <div className="vote">
            {isPlayersSet
                ? <Voting players={numOfPlayers} onDrop={handleDropVoting} />
                :
                <div className="row center">
                    <div className="row center">
                        <h2 className="header col s12 light">How many players are alive?</h2>
                    </div>
                    <div className="row center">
                        <p>{errorMessage}</p>
                    </div>
                    <div className="row center">
                        <form onSubmit={handleSubmit}>
                            <input type="number" className="vote__input" name="players" onChange={handleChange} />
                            <br />
                            <button className="btn cst-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}