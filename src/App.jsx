import Header from "./components/Layout/Header"
import Meals from "./components/Meals/meals"
import Cart from "./components/Cart/cart"
import { useState } from "react"

export const App = ()=>{
    const [cartIsShown,setCartIsShown] = useState(false);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    }

    
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    }
    return(
        <>
        { cartIsShown  && <Cart onClose={hideCartHandler}/>}
        <Header
            onShowCart={showCartHandler}
            
        />
        <Meals/>
        </>

    )

}