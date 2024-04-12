import React from 'react'
import style from './style.module.css'
import img1 from '../../asstes/teamImg/TeamImg1.jpg'
import img2 from '../../asstes/teamImg/TeamImg2.jpg'
import img3 from '../../asstes/teamImg/TeamImg3.jpg'
import img4 from '../../asstes/teamImg/TeamImg4.jpg'

function TeamBanner() {
    return (
        <div className={style.main_container} >
            <div className={style.content_container} >
                <div className={style.text_container} >
                    <div className={style.title_container} >
                        <span>Bigger team.</span>
                        <span>More time.</span>
                    </div>
                    <div>
                        <p>
                            Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam ipsum nam leo fringilla eget lorem. Sit vestibulum phasellus integer et et diam malesuada. Sed tortor orci mauris proin ac. Venenatis euismod mauris quis sit purus nisi. Sed quis eget augue ut aliquam sed.
                        </p>
                    </div>
                </div>
                <div className={style.images_container} >
                    <div className={style.top_container} >
                        <span className={style.image_span} ><img src={img1} alt='img' /></span>
                        <span className={style.image_span} ><img src={img2} alt='img' /></span>
                    </div>
                    <div className={style.bottom_container} >
                        <span className={style.image_span} ><img src={img3} alt='img' /></span>
                        <span className={style.image_span} ><img src={img4} alt='img' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamBanner