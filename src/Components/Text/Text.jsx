import React from 'react'
import style from './style.module.css'

function Text() {
  return (
    <div className={style.main_container} >
        <div content={style.content_container} >
            <div className={style.first_line} >Your team. Your projects.</div>
        </div>
    </div>
  )
}

export default Text