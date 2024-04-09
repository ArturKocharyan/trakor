import React from 'react'
import style from './style.module.css'
import CustomButton from '../../elements/Button'
import graph from '../../asstes/graph-style.png'

function Graphic() {
  return (
    <div className={style.main_container} >
        <div className={style.content_container} >
            <div className={style.content} >
                <div>
                    <h2>Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.</h2>
                    <p>Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque.</p>
                    <CustomButton backgroundColor="#334155"  maxWidth="237px" textColor="white" border="#475569" children="Request more info" />
                </div>
            </div>
            <div className={style.graphic} ><img src={graph} alt='graph' /></div>

        </div>
    </div>
  )
}

export default Graphic