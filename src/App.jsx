import Header from "./components/Layout/Header"
import Meals from "./components/Meals/meals"
import Cart from "./components/Cart/cart"
import { useState } from "react"
import CartProvider from "./store/CartProvider"

export const App = ()=>{
    const [cartIsShown,setCartIsShown] = useState(false);

    const showCartHandler = ()=>{
        setCartIsShown(true);
    }

    
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    }
    return(
        <CartProvider>
        { cartIsShown  && <Cart onClose={hideCartHandler}/>}
        <Header
            onShowCart={showCartHandler}
            
        />
        <Meals/>
        </CartProvider>

    )

}