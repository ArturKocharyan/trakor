import React from 'react'
import style from './style.module.css'
import img from '../../asstes/Shapes.png'
import CustomButton from '../../elements/Button'

function TeamProgress() {
    return (
        <div className={style.main_container} >
            <div className={style.contant} >
                <span className={style.title} >Team Progress Tracking Tool</span>
                <span className={style.heading}>Track your team progress</span>
                <div className={style.description_container} >
                    <span className={style.description} >
                        <p>Ut posuere felis arcu tellus tempus in in ultricies.Gravida id nibh ornare viverra.
                            Ultrices faucibus neque velit risus ac id lorem.</p>
                    </span>
                </div>
                <div className={style.buttons_container} >
                    <CustomButton backgroundColor="#4F46E5" textColor="white" border='#6366F1' maxWidth='256px' children='Start for free' />
                    <CustomButton backgroundColor="#334155" textColor="white" border='#475569' maxWidth='256px' children='Request more info' />
                </div>
                <div className={style.image_container} >
                    <span><img src={img} alt='shape' ></img></span>
                </div>
            </div>
        </div>
    )
}

export default TeamProgress