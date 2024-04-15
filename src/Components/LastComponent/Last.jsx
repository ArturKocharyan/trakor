import React from 'react'
import style from './style.module.css'
import CustomButton from '../../elements/Button'

function Last() {
    return (
        <div className={style.main_container} >
            <div className={style.content_container} >
                <div className={style.title}>
                    <div>Your team. Your projects.</div>
                    <div>Always together.</div>
                </div>
                <div className={style.text} >Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</div>
                <div className={style.button_container}>
                    <CustomButton
                     backgroundColor="#4F46E5" 
                     textColor="white" 
                     border='#6366F1' 
                     maxWidth='256px' 
                     children='Start for free' 
                     responsiveStyles={{
                        '@media (max-width: 768px)': {
                          height: '48px',
                        },
                      }}
                     />
                    <CustomButton backgroundColor="#334155" textColor="white" border='#475569' maxWidth='256px' children='Request more info' />
                </div>
            </div>
        </div>
    )
}

export default Last