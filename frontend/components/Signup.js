import React from 'react'
import styles from '../styles/Signup.module.css'
import {useState} from 'react'

const Signup = ({signup}) => {

    const [username, setUsername] = useState()
    const [profile, setProfile] = useState()

    const signUpClicked = () => {
        console.log("Signing Up!")
        signup(username, profile)
    }

    // console.log(username, profile)
    // https://avatars.dicebear.com/api/adventurer/tiktok-clone.svg


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
                    onChange={e => setUsername(e.target.value)} 
                    type="text" className={styles.input} />
                </div>
            </div>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>
                    Profile Image:
                </div>
                <div className={styles.inputContainer}>
                    <input 
                    onChange = {e => setProfile(e.target.value)}
                    type="text" className={styles.input} />
                </div>
            </div>
        </div>

        <div 
        onClick = {signUpClicked}
        className={styles.loginButton}>Sign up</div>
    </div>
  )
}

export default Signup