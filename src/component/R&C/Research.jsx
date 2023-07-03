import css from '../R&C/Research.module.scss'
import content from '../../../db.json'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


const Research = () => {

  return (
    <div className={css.container}>
    <div className={css.wrapper}>

    <motion.h1 className={css.header}
       initial={{ opacity: 0, y: '-100vh' }}
       animate={{ opacity: 1, y: 0}}
       transition={{duration: 1, delay: 0.4}}
    >
      RESEARCH AND CONSULTANCY
    </motion.h1>

    <motion.div className={css.content}
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{duration: 1, delay: 1}}
    >
      {
        content['RESEARCH AND CONSULTANCY'].map(cont=>{
          return(
            <div key={cont.id}>
              <p className={css.paragraph}>{cont.paragraph}</p>
              <h3 className={css.heading}>{cont.heading}</h3>
              <p className={css.paragraph}>{cont.paragraph1}</p>
              <p className={css.paragraph}>{cont.paragraph2}</p>
              <p className={css.paragraph}>{cont.paragraph3}</p>
              <p className={css.paragraph}>{cont.paragraph4}</p>
              <h3 className={css.heading}>{cont.heading1}</h3>
              <p className={css.paragraph}>{cont.paragraph5}</p>
              <p className={css.paragraph}>{cont.paragraph6}</p>
              <p className={css.paragraph}>{cont.paragraph7}</p>
              <p className={css.paragraph}>{cont.paragraph8}</p>
              <p className={css.paragraph}>{cont.paragraph9}</p>

              <div className={css.link}>
                <Link to="/admin">
               BACK TO ADMIN
                 </Link>
             </div>
            </div>
            
          )
        })
      }

    </motion.div>
    
    </div>
  </div>
  )
}

export default Research