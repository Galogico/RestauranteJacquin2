import Header from "./components/Layout/Header"
import Meals from "./components/Meals/meals"
import Cart from "./components/Cart/cart"

export const App = ()=>{
    return(
        <>
        <Cart></Cart>
        <Header></Header>
        <Meals/>
        </>

    )

}