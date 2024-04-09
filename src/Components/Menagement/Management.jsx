import React from 'react'
import style from './style.module.css'
import vector from '../../asstes/Vector.svg'
import CustomButton from '../../elements/Button'
import img from '../../asstes/3girls.jpg'

function Management() {
    return (
        <div className={style.main_container} >
            <div className={style.content_container} >
                <div className={style.first_container} >
                    <div className={style.title_container} >
                        <span>Team management.</span>
                        <span>Effortless syncronization.</span>
                    </div>
                    <div className={style.text_container} >
                        <p>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    </div>
                    <ul className={style.list_container} >
                        <li><img src={vector} alt="" />Interdum volutpat turpis malesuada ac turpis.</li>
                        <li><img src={vector} alt="" />Tortor ipsum pretium quis nunc.</li>
                        <li><img src={vector} alt="" />Vitae odio a id purus in.</li>
                    </ul>
                    <CustomButton backgroundColor="#4F46E5" textColor="white" border='#6366F1' maxWidth='186px' children='Start for free' />
                </div>
                <div className={style.second_container}><img src={img} alt='img' /></div>
            </div>
        </div>
    )
}

export default Management