import React from 'react'
import style from './style.module.css'
import team3 from '../../asstes/teamImg/team3.jpg'
import team2 from '../../asstes/teamImg/team2.jpg'
import vector from '../../asstes/Vector.svg'
import CustomButton from '../../elements/Button'


function Tools() {
    return (
        <div className={style.main_container} >
            <div className={style.banner_container} >
                <div className={style.img_container} >
                    <div className={style.first_image} ><img src={team3} alt='team' /></div>
                    <div className={style.bottom_image_container} >
                        <span className={style.bottom_image} ><img src={team2} className={style.img_style} alt='team' /></span>
                        <span className={style.bottom_image} ><img src={team2} className={style.img_style} alt='team' /></span>
                    </div>
                </div>
                <div className={style.second_container} >
                    <div className={style.title_container} >
                        <span className={style.first_title} >Powerful tools.</span>
                        <span className={style.second_title} >More control.</span>
                    </div>
                    <div className={style.text_container} >
                        <p>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                    </div>
                    <ul className={style.list_container} >
                        <li><img src={vector} alt="" />Interdum volutpat turpis malesuada ac turpis.</li>
                        <li><img src={vector} alt="" />Tortor ipsum pretium quis nunc.</li>
                        <li><img src={vector} alt="" />Vitae odio a id purus in.</li>
                    </ul>
                    <CustomButton  backgroundColor="#4F46E5" textColor="white" border='#6366F1' maxWidth='186px' children='Start for free' />
                </div>
            </div>
        </div>
    )
}

export default Tools