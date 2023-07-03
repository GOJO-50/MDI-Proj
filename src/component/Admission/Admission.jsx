import css from '../Admission/Admission.module.scss'
import content from '../../../db.json'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Admission = () => {

  return (
    <div className={css.container}>
      <motion.h1 className={css.header}
        initial={{ opacity: 0, y: '-100vh' }}
        animate={{ opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.4}}
      >
        ADMISSION      
      </motion.h1>

      <motion.div className={css.content}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 1, delay: 1}}
      >
        {
          content['ADMISSION'].map(content=> {
            return(
            <div key={content.id}>
              <h2 className={css.heading}>{content.heading[0]}</h2>
              <h3 className={css.heading}>{content.heading[1]}</h3>
              <p className={css.paragraph}><b className={css.bold}>{content.paragraph}</b></p>
              <ul className={css.list}>
                <li>{content.list}</li>
                <li>{content.list1}</li>
              </ul>
              <h2 className={css.heading}>{content.heading[2]}</h2>
              <h3 className={css.heading}>{content.heading[3]}</h3>
              <ul className={css.list}>
                <li>{content.list2}</li>
              </ul>
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
  )
}

export default Admission