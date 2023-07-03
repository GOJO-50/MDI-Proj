import React from 'react'
import css from '../About/About.module.scss'
import about from '../../../db.json'
import {easeOut, motion} from 'framer-motion'

const About = () => {

return (
  <div className={css.wrapper}>
    <div className={css.container}>

      <motion.h1 className={css.header}
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: 0}}
      transition={{duration: 1, delay: 0.5, ease: "easeOut"}}
      >
          ABOUT US
      </motion.h1>

      <motion.div className={css.grid}>
        {
          about['ABOUT'].map(about=>{
          return(
            <motion.div className={css.section} key={about.id}
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 0.95 }}
            transition={{
              duration: 1.5,
              delay: 1,
              // ease: 'easeOut',
              type: 'spring',
              stiffness: 300}}
            whileHover= {{
              scale: 1,
              boxShadow: '#F5C32C -3px 11px 20px 5px'}}
             >

            <h1 className={css.heading}>
                {about.header}
            </h1>
            <p className={css.content}>{about.paragraph}</p>
            <p className={css.content}>{about.paragraph1}</p>
            <p className={css.content}>{about.paragraph2}</p>
            <p className={css.content}>{about.paragraph3}</p>
                
            </motion.div>
          )})
        }
      </motion.div>

    </div>
  </div> 
)
}

export default About