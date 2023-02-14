import pratos from '../../Assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


const Header = props =>{
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Jacquin's gourmet buffet
                </h1>
                
                <HeaderCartButton/>
                
            </header>
            <div className={classes['main-image']}>
                    <img src={pratos} alt="imagens dos pratos"></img>
            </div>
        </>
    )
}

export default Header;