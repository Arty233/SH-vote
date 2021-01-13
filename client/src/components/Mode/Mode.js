import './Mode.css';

export default function Mode(props) {

    const handleClick = (e) => {
        props.onModeChange(e.target.name);
    }
    return (
        <div className="mode">
            <div className="row center">
                <h2 className="header col s12 light">Choose voting mode</h2>
            </div>
            <div className="row center">
                <a
                    className="waves-effect waves-light btn-large"
                    name="simple"
                    onClick={handleClick}
                >Simple mode</a>
            </div>
            <div className="row center">
                <a
                    className="waves-effect waves-light btn-large"
                    name="pro"
                    onClick={handleClick}
                    disabled
                ><i className="material-icons left">lightbulb_outline</i>Pro mode (under construction)
                </a>
            </div>
        </div>
    )
}