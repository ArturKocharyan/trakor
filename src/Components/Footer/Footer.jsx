import React from 'react'
import style from './style.module.css'

function Footer() {
    return (
        <div className={style.main_container}>
            <div className={style.content_container}>
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
        </div>
    )
}

export default Footer