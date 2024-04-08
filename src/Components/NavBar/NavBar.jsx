import React from 'react'
import style from './style.module.css'

function NavBar() {
    return (
        <div className={style.main}>
        <nav className={style.main_container} >
            <div><p>trakor</p></div>
            <div className={style.link_container}>
                    <div className={style.href_items} ><a href='/' >Product</a></div>
                    <div className={style.href_items} ><a href='/' >Solutions</a></div>
                    <div className={style.href_items} ><a href='/' >Documentation</a></div>
                    <div className={style.href_items} ><a href='/' >Pricing</a></div>
            </div>
            <div className={style.buttons_container} >
                <button className={style.login_BTN} >Log In</button>
                <button className={style.more_info} >Request more info</button>
            </div>
        </nav>
        </div>
    )
}

export default NavBar