import { useState } from "react";
import Mode from "../Mode/Mode";

export default function Main() {
    const [mode, setMode] = useState('');

    const handleModeChange = (mode) => {
        setMode(() => mode);
    }
    return (
        <div className="main">
            <h1 className="header center">Secret Hitler voting</h1>
            {mode
                ? <h1>Voting</h1>
                : <Mode onModeChange={handleModeChange} />
            }
        </div>
    )
}