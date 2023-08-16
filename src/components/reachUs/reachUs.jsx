import styles from './reachUs.module.css'
import { IconMail, IconPhoneCall, IconLocation } from '@tabler/icons-react';

const ReachUs = () => {
  return (
    <div className={styles.container}>

        <a href={`tel:${'+1012 3456 789'}`} className={styles.textItem}>
          <IconPhoneCall size={18} stroke="1.3" className={styles.icon}/>
          +1012 3456 789
        </a>

        <a href={`mailto:${'demo@gmail.com'}`} className={styles.textItem}>
          <IconMail size={18} stroke="1.3" className={styles.icon}/>
          demo@gmail.com
        </a>

        <a href={'https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+USA/@42.3467604,-71.0786931,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r?entry=ttu'} 
          className={styles.textItem}
        > 
          <IconLocation size={18} stroke="1.3"className={styles.icon}/>
          132 Dartmouth Street Boston, Massachusetts 02156 United States
        </a>
    </div>
  )
}

export default ReachUs;
