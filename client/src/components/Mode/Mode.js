import './Mode.css';

export default function Mode(props) {

    const handleClick = (e) => {
        props.onModeChange(e.target.name);
    }
    return (
        <div className="mode">
            <h1 className="header center">Choose voting mode</h1>
            <div className="row center">
                <a className="waves-effect waves-light btn-large" name="simple" onClick={handleClick}><i className="material-icons left">cloud</i>Simple mode</a>
            </div>
            <div className="row center">
                <a className="waves-effect waves-light btn-large" name="pro" onClick={handleClick} disabled><i className="material-icons left">cloud</i>Pro mode</a>
            </div>
        </div>
    )
}