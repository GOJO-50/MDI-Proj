import {Link} from 'react-router-dom'
import css from '../Registry/Registry.module.scss'
import content from '../../../db.json'
import {motion} from 'framer-motion'



const Registry = () => {

  return (
    <div className={css.container}>
      <div className={css.wrapper}>

        <motion.h1 className={css.header}
          initial={{ opacity: 0, y: '-100vh' }}
          animate={{ opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.4}}
        >
         REGISTRY
        </motion.h1>

        <motion.div className={css.content}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 1, delay: 1}}
        >
          {
            content['REGISTRY'].map(content=>{
              return(
                <div key={content.id}>
                  <div className={css.paragraph}>
                  <p>{content.paragraph}</p>
                  <p>{content.paragraph1}</p>
                  <p>{content.paragraph2}</p>
                  <p>{content.paragraph3}</p>
                  </div>

                <div className={css.list}>
                  <ul>
                    <li>{content.list}</li>
                    <li>{content.list1}</li>
                    <li>{content.list2}</li>
                    <li>{content.list3}</li>
                    <li>{content.list4}</li>
                    <li>{content.list5}</li>
                    <li>{content.list6}</li>
                    <li>{content.list7}</li>
                    <li>{content.list8}</li>
                    <li>{content.list9}</li>
                    <li>{content.list10}</li>
                    <li>{content.list11}</li>
                    <li>{content.list12}</li>
                    <li>{content.list13}</li>
                  </ul>
                </div>

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

export default Registry