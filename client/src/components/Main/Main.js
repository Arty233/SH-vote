import { useState } from "react";
import Mode from "../Mode/Mode";
import Vote from "../Vote/Vote";

export default function Main() {
    const [mode, setMode] = useState('');

    const handleModeChange = (mode) => {
        setMode(() => mode);
    }
    return (
        <div className="main">
            <h1 className="header center">Secret Hitler voting</h1>
            {mode
                ? <Vote />
                : <Mode onModeChange={handleModeChange} />
            }
        </div>
    )
}