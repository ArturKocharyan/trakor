import React from 'react'
import style from './style.module.css'
import img1 from '../../asstes/teamImg/Picture.png'
import img2 from '../../asstes/teamImg/Picture1.png'
import img3 from '../../asstes/teamImg/Picture2.png'
import img4 from '../../asstes/teamImg/Picture3.png'

function TeamBanner() {
    return (
        <div className={style.main_container} >
            <div className={style.banner_container} >
                <div className={style.text_container} >
                    <div className={style.title_container} >
                        <span className={style.first_title} >Bigger team.</span>
                        <span className={style.second_title} >More time.</span>
                    </div>
                    <span className={style.text} >Quam quis orci turpis vulputate platea.
                        Urna ipsum suscipit nullam ipsum nam leo fringilla eget lorem.
                        Sit vestibulum phasellus integer et et diam malesuada.
                        Sed tortor orci mauris proin ac.
                        Venenatis euismod mauris quis sit purus nisi. Sed quis eget augue ut aliquam sed</span>
                </div>
                <div className={style.image_container} >
                    <div className={style.first_img_conatiner} >
                        <span className={style.image_span} ><img src={img1} alt='team' /></span>
                        <span className={style.image_span} ><img src={img2} alt='team' /></span>
                    </div>
                    <div className={style.second_img_conatiner} >
                        <span><img src={img3} alt='team' /></span>
                        <span><img src={img4} alt='team' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamBanner