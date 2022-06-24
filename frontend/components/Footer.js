import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = ({channel, description, song}) => {
    return (
      <div className={styles.footer}>
        <div className={styles.footerText}>
          <h3>@{channel}</h3>
          <p>{description}</p>
          <div className={styles.footerTicker}>
            <MusicNoteIcon className={styles.footerIcon} />
            <p>&nbsp; &nbsp; &nbsp; {song}</p>
          </div>
        </div>
        <div className={styles.footerRecord}>
          <Image
            src={'https://static.thenounproject.com/png/934821-200.png'}
          />
        </div>
      </div>
    )
}

export default Footer