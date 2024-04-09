import React from 'react'
import style from './style.module.css'

function Text() {
  return (
    <div className={style.main_container} >
        <div content={style.content_container} >
            <div className={style.first_line} ><span>Your team. </span><span>Your projects.</span></div>
            <div className={style.second_line}>Always together.</div>
            <div className={style.last_line} >Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</div>
        </div>
    </div>
  )
}

export default Text