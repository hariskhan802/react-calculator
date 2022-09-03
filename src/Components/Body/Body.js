
import Button from '../Button/Button';
import './Body.css'
function Body(props) {
    return (
        <div className="body-wrap">
            <div className='row'>
                <Button onButtonClick={props.onButtonClick} text="+" class="operator-button" />
                <Button onButtonClick={props.onButtonClick} text="-" class="operator-button" />
                <Button onButtonClick={props.onButtonClick} text="*" class="operator-button" />
                <Button onButtonClick={props.onButtonClick} text="/" class="operator-button" />
                <Button onButtonClick={props.onButtonClick} text="=" class="operator-button" />
                <Button onButtonClick={props.onButtonClick} text="0" class="operator-button" />

            </div>
            
            <div className='row'>
                <Button onButtonClick={props.onButtonClick} text="7" class="number-button" />
                <Button onButtonClick={props.onButtonClick} text="8" class="number-button" />
                <Button onButtonClick={props.onButtonClick} text="9" class="number-button" />
            </div>
            <div className='row'>
                <Button onButtonClick={props.onButtonClick} text="4" class="number-button" />
                <Button onButtonClick={props.onButtonClick} text="5" class="number-button" />
                <Button onButtonClick={props.onButtonClick} text="6" class="number-button" />
            </div>
            <div className='row'>
                <Button onButtonClick={props.onButtonClick} text="1" class="number-button" />
                <Button onButtonClick={props.onButtonClick} text="2" class="number-button" />
                <Button onButtonClick={props.onButtonClick} text="3" class="number-button" />
                
            </div>
        </div>
    )
}
export default Body;