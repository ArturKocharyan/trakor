import React, { useState, useRef } from 'react'
import style from './style.module.css'
import SmartFinderLogo from '../../asstes/logos/SmartFinder.png'
import ShellsLogo from '../../asstes/logos/Shells.png'
import ArtVenueLogo from '../../asstes/logos/ArtVenue.png'
import ZoomerrLogo from '../../asstes/logos/Zoomerr.png'
import WavesLogo from '../../asstes/logos/Waves.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import account1 from '../../asstes/accounts/account1.jpg'
import account2 from '../../asstes/accounts/account2.jpg'
import account3 from '../../asstes/accounts/account3.jpg'



function Slider() {

  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollPref = () => {
    const newPosition = scrollPosition - 80;
    setScrollPosition(newPosition < 0 ? 0 : newPosition);
    if (containerRef.current) {
      containerRef.current.scrollLeft = newPosition;
    }
  };

  const scrollNext = () => {
    const newPosition = scrollPosition + 80;
    if (containerRef.current) {
      containerRef.current.scrollLeft = newPosition;
    }
    setScrollPosition(newPosition);
  };


  return (
    <div>
      <div className={style.cards_container} ref={containerRef} >
        <div className={style.items} >
          <div className={style.title} >
            <span className={style.companies_logos} ><span><img src={SmartFinderLogo} alt='SmartFinderLogo' /></span><span><p>SmartFinder</p></span></span>
          </div>
          <div className={style.text} >
            Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium semper rhoncus, tellus semper.
          </div>
          <div className={style.account_container} >
            <div className={style.account_img}>
              <img src={account1} alt='account' />
            </div>
            <div className={style.account_name} >
              <span>Hellena John</span>
              <span>Co-founder</span>
            </div>
          </div>
        </div>
        <div className={style.items} >
          <div className={style.title} >
            <span className={style.companies_logos} ><span><img src={ZoomerrLogo} alt='Zoomerr' /></span><span><p>Zoomerr</p></span></span>
          </div>
          <div className={style.text} >
            Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
          </div>
          <div className={style.account_container} >
            <div className={style.account_img}>
              <img src={account2} alt='account' />
            </div>
            <div className={style.account_name} >
              <span>Hellen Jummy</span>
              <span>Team Lead</span>
            </div>
          </div>
        </div>
        <div className={style.items} >
          <div className={style.title} >
            <span className={style.companies_logos} ><span><img src={ShellsLogo} alt='SmartFinderLogo' /></span><span><p>Shells</p></span></span>
          </div>
          <div className={style.text} >
            Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet a vitae.
          </div>
          <div className={style.account_container} >
            <div className={style.account_img}>
              <img src={account1} alt='account' />
            </div>
            <div className={style.account_name} >
              <span>Hellena John</span>
              <span>Co-founder</span>
            </div>
          </div>
        </div>
        <div className={style.items} >
          <div className={style.title} >
            <span className={style.companies_logos} ><span><img src={ArtVenueLogo} alt='SmartFinderLogo' /></span><span><p>ArtVenue</p></span></span>
          </div>
          <div className={style.text} >
            A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed lorem cursus.
          </div>
          <div className={style.account_container} >
            <div className={style.account_img}>
              <img src={account3} alt='account' />
            </div>
            <div className={style.account_name} >
              <span>David Oshodi</span>
              <span>Manager</span>
            </div>
          </div>
        </div>
        <div className={style.items} >
          <div className={style.title} >
            <span className={style.companies_logos} ><span><img src={WavesLogo} alt='SmartFinderLogo' /></span><span><p>Waves</p></span></span>
          </div>
          <div className={style.text} >
            Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.
          </div>
          <div className={style.account_container} >
            <div className={style.account_img}>
              <img src={account1} alt='account' />
            </div>
            <div className={style.account_name} >
              <span>Hellena John</span>
              <span>Co-founder</span>
            </div>
          </div>
        </div>

      </div>
      <div className={style.buttons_container} >
        <button onClick={scrollPref}>
          <ArrowBackIcon className={style.icon} />
          Pref
        </button>
        <button onClick={scrollNext}>
          Next
          <ArrowForwardIcon className={style.icon} />
        </button>
      </div>
    </div>
  )
}

export default Slider