import React from 'react'
import style from './style.module.css'
import SmartFinderLogo from '../../asstes/logos/SmartFinder.png'
import ZoomerrLogo from '../../asstes/logos/Zoomerr.png'
import ShellsLogo from '../../asstes/logos/Shells.png'
import WavesLogo from '../../asstes/logos/Waves.png'
import ArtVenueLogo from '../../asstes/logos/ArtVenue.png'

function Companies() {
    return (
        <div className={style.main_container} >
            <div className={style.content} >
                <div className={style.text_container} >Trusted by teams from leading companies</div>
                <div className={style.logos}>
                    <span className={style.companies_logos} ><span><img src={SmartFinderLogo} alt='SmartFinderLogo' /></span><span><p>SmartFinder</p></span></span>
                    <span className={style.companies_logos} ><span><img src={ZoomerrLogo} alt='Zoomerr' /></span><span><p>Zoomerr</p></span></span>
                    <span className={style.companies_logos} ><span><img src={ShellsLogo} alt='SmartFinderLogo' /></span><span><p>Shells</p></span></span>
                    <span className={style.companies_logos} ><span><img src={WavesLogo} alt='SmartFinderLogo' /></span><span><p>Waves</p></span></span>
                    <span className={style.companies_logos} ><span><img src={ArtVenueLogo} alt='SmartFinderLogo' /></span><span><p>ArtVenue</p></span></span>
                </div>
            </div>
        </div>
    )
}

export default Companies