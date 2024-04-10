import React from 'react'
import style from './style.module.css'
import YouTube from '../../asstes/icons/Youtube'
import Twitter from '../../asstes/icons/Twitter'
import FaceBook from '../../asstes/icons/FaceBook'
import Linkdin from '../../asstes/icons/Linkdin'
import { Instagram } from '@mui/icons-material'
import AppStore from '../../asstes/AppStore'
import GooglePlay from '../../asstes/AppStore'
function Footer() {
    return (
        <div className={style.main_container}>
            <div className={style.content_container}>
                <div className={style.list_container}>
                    <ul>
                        <li>Categories</li>
                        <li>User Interface</li>
                        <li>User Experience</li>
                        <li>Digital Media</li>
                        <li>Lifestyle</li>
                    </ul>
                    <ul>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Overview</li>
                        <li>Browse</li>
                        <li>Accessibility</li>
                    </ul>
                    <ul>
                        <li>Solutions</li>
                        <li>Brainstorming</li>
                        <li>Ideation</li>
                        <li>Wireframing</li>
                        <li>Research</li>
                    </ul>
                    <ul>
                        <li>Resources</li>
                        <li>Help Center</li>
                        <li>Blog</li>
                        <li>Tutorials</li>
                        <li>FAQs</li>
                    </ul>
                    <ul>
                        <li>Support</li>
                        <li>Contact Us</li>
                        <li>Developers</li>
                        <li>Documentation</li>
                        <li>Integrations</li>
                    </ul>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Press</li>
                        <li>Events</li>
                        <li>Request Demo</li>
                    </ul>
                </div>
                <div className={style.bottom_container} >
                    <div><p>Trakor @ 2023</p></div>
                    <div className={style.second_span} >
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Manage Cookies</p>
                    </div>
                    <div className={style.logo_span} >
                        <span className={style.logo} ><YouTube/></span>
                        <span className={style.logo}><FaceBook /></span>
                        <span className={style.logo}><Twitter /></span>
                        <span className={style.logo}><Instagram /></span>
                        <span className={style.logo}><Linkdin /></span>
                    </div>
                    <div className={style.store_container} >
                        <span><AppStore /></span>
                        <span><GooglePlay /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer