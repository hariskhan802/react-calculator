
import Button from '../Button/Button';
import './Body.css'
function Body(props) {
    return (
        <div className="body-wrap">
            <div className='row'>
                <Button text="+" class="operator-button" />
                <Button text="-" class="operator-button" />
                <Button text="X" class="operator-button" />
                <Button text="/" class="operator-button" />
                <Button text="0" class="operator-button" />

            </div>
            <div className='row'>
                <Button text="1" class="number-button" />
                <Button text="2" class="number-button" />
                <Button text="3" class="number-button" />
            </div>
            <div className='row'>
                <Button text="7" class="number-button" />
                <Button text="8" class="number-button" />
                <Button text="9" class="number-button" />
            </div>
            <div className='row'>
                <Button text="4" class="number-button" />
                <Button text="5" class="number-button" />
                <Button text="6" class="number-button" />
            </div>
            <div className='row'>
                <Button text="1" class="number-button" />
                <Button text="2" class="number-button" />
                <Button text="3" class="number-button" />
                
            </div>
        </div>
    )
}
export default Body;