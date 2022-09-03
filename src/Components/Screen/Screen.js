
import './Screen.css'
function Screen(props) {
    return (
        <div className="screen-wrap">
            <div className="equation">
                <code>{props.equation}</code>
            </div>
            <div className="result">
                <code>{props.result}</code>
            </div>
        </div>
    )
}
export default Screen;