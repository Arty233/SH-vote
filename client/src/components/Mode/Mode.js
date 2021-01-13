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
                    className="btn-large cst-btn"
                    name="simple"
                    onClick={handleClick}
                >Simple mode</a>
            </div>
            <div className="row center">
                <a
                    className="btn-large cst-btn-disabled"
                    name="pro"
                    onClick={(e) => {e.preventDefault()}}
                ><i className="material-icons left">lightbulb_outline</i>Pro mode (under construction)
                </a>
            </div>
        </div>
    )
}