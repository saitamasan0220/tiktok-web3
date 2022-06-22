import React from 'react'
import styles from '../styles/Signup.module.css'
import {useState} from 'react'

const Signup = ({signup}) => {

    console.log(signup)
  return (
    <div className={styles.authContainer}>
        <h1 className={styles.title}>Sign up to use Tiktok</h1>
        <div className={styles.signupForm}>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>
                    Username
                </div>
                <div className={styles.inputContainer}>
                    <input 
                    // onChange={} 
                    type="text" className={styles.input} />
                </div>
            </div>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>
                    Profile Image:
                </div>
                <div className={styles.inputContainer}>
                    <input type="text" className={styles.input} />
                </div>
            </div>
        </div>

        <div className={styles.loginButton}>Sign up</div>
    </div>
  )
}

export default Signup