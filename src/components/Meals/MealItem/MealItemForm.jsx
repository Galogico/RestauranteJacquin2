import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props =>{
    return<form className={classes.form}>
        <Input
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
    </form>
}

export default MealItemForm