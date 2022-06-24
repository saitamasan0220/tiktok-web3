import React from 'react'
import {useRef, useState} from 'react'
import styles from '../styles/Video.module.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Comments from './Comments'

const Video = ({
    address,
    url,
    channel,
    description,
    index,
    likes,
    shares,
    likeVideo,
    likesAddress,
    createComment,
    getComments,
    commentCount
}) => {

    const [playing, setPlaying] = useState(false)
    const [showCommentsModal, setShowCommentsModal] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    const hideComments = () => {
        setShowCommentsModal(false)
    }
    const showComments = () => {
        setShowCommentsModal(true)
    }
  return (
    <div className={styles.wrapper}>
        <video
            className={styles.videoPlayer}
            loop
            onClick = {onVideoPress}
            ref = {videoRef}
            src = {url}
            style = {{objectFit: 'cover'}}
        />

        <Footer channel={channel}
            description = {description} 
            song = {index}
        />

        <Sidebar 
            address = {address}
            likes = {likes}
            shares = {shares}
            onShowComments={showComments}
            likeVideo={likeVideo}
            index={index}
            likesAddress={likesAddress}
            messages={commentCount}
        />

        {showCommentsModal && (
            <Comments />
        )}
    </div>
  )
}

export default Video