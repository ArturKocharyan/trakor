import React from 'react'
import style from './style.module.css'
import img from '../../asstes/Shapes.png'

function TeamProgress() {
    return (
        <div className={style.main_container} >
            <div className={style.contant} >
                <span className={style.title} >Team Progress Tracking Tool</span>
                <span className={style.heading}>Track your team progress</span>
                <div className={style.description_container} >
                    <span className={style.description} >
                        <p>Ut posuere felis arcu tellus tempus in in ultricies.</p> <p>Gravida id nibh ornare viverra.</p>
                        <p>Ultrices faucibus neque velit risus ac id lorem.</p>
                    </span>
                </div>
                <div className={style.buttons_container} >
                    <button className={style.start_btn} >Start for free</button>
                    <button className={style.more_info} >Request more info</button>
                </div>
                <div className={style.image_container} >
                    <img src={img} alt='shape' ></img>
                </div>
            </div>
        </div>
    )
}

export default TeamProgress