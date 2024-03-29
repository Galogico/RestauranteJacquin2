import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react';


const MealItemForm = props =>{
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount;

        if(enteredAmount.trim().lenght === 0 || enteredAmountNumber < 1|| enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;   
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return(<form className={classes.form} onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}
        label ='Quantidade'
        input={{
            id:"amount",
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue: '1'
        }}
        />
        <button>+ add</button>
        {!amountIsValid && <p>Por favor, só são válidos números de 1 a 5</p>}
    </form>
    )
}

export default MealItemForm