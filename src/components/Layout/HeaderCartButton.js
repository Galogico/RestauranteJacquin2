import CartIcon from "../Cart/cartIcon"

const headerCartButton = props =>{
    import classes from './HeaderCartButton.module.css'
    return(
        <>
            <button>
                <span><CartIcon/></span>
                <span>carrinho</span>
                <span>16</span>
            </button>
        </>

    )
}