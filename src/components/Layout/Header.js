import pratos from '../../Assets/meals.jpg'
import classes from './Header.module.css'


const Header = props =>{
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Jacquin's gourmet buffet
                </h1>
                <button>
                    carro
                </button>
            </header>
            <div className={classes['main-image']}>
                    <img src={pratos} alt="imagens dos pratos"></img>
            </div>
        </>
    )
}

export default Header;