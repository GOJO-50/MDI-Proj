import css from '../Administration/Administration.module.scss'
import administration from '../../../db.json'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom' 

const Administration = () => {

return (
  <div className={css.wrapper}>
  <div className={css.container}>

    <motion.h1 className={css.header}
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: 0}}
      transition={{duration: 1.5, delay: 1}}
    >
        ADMINISTRATION
    </motion.h1>

    <motion.div  className={css.grid}>
      {
        administration['ADMINISTRATION'].map((admin, n)=>{
        return(
            <motion.div  
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 1, delay: 1.5, ease: 'easeOut'}}
            className={css.section} key={admin.id}>

              <h1 className={css.heading}>
                  {admin.heading}
              </h1>
              <p className={css.content}>
                  {admin.paragraph}
              </p>
              
                  
              <Link to={`/admin/${n.toString()}`}>
              <motion.button
              className={css.button}
              whileHover={{
                scale: 1.1,
                boxShadow: '#fad66b -2px 8px 12px 3px',
                transition: { duration: 1, yoyo: Infinity }
              }}>
                VIEW MORE
              </motion.button>
              </Link>
                
            </motion.div>
        )
            })
          }
    </motion.div>
  </div>
</div> 
)
}

export default Administration