import React from 'react'
import style from './style.module.css'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import CustomButton from '../../elements/Button'

function NavBar() {
    return (
        <div className={style.main}>
            <nav className={style.main_container} >
                <div><h1>trakor</h1></div>
                <div className={style.second_part} >
                    <div className={style.link_container}>
                        <div className={style.href_items} ><a href='/' >Product</a></div>
                        <div className={style.href_items} ><a href='/' >Solutions</a></div>
                        <div className={style.href_items} ><a href='/' >Documentation</a></div>
                        <div className={style.href_items} ><a href='/' >Pricing</a></div>
                    </div>
                    <div className={style.buttons_container} >
                        <button className={style.login_BTN} >Log In</button>
                        <CustomButton  backgroundColor="#334155" textColor="white" border='#475569' maxWidth='256px' children='Request more info' />
                    </div>
                </div>
                <div className={style.menu_button} ><BurgerMenu /></div>
            </nav>
        </div>
    )
}

export default NavBar