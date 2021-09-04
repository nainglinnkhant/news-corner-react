import styles from './Spinner.module.css'

const Spinner = () => {
     return (
          <div className={styles.spinner}>
               <div className={styles['lds-roller']}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
               </div>
          </div>
     )
}

export default Spinner