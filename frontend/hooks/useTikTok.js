import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import {useWallet} from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { SOLANA_HOST } from "../utils/const";
import { getProgramInstance } from "../utils/utils";
const anchor = require('@project-serum/anchor')
const utf8 = anchor.utils.bytes.utf8
const {BN, web3} = anchor 
const {SystemProgram} = web3

const defaultAccounts = {
    tokenProgram: TOKEN_PROGRAM_ID,
    clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
    systemProgram: SystemProgram.programId,
}

const useTiktok = (
    setTikToks,
    userDetail,
    videoUrl,
    description,
    setDescription,
    setVideoUrl,
    setNewVideoShow,
) => {
    const wallet = useWallet()
    const connection = new anchor.web3.Connection(SOLANA_HOST)
    const program = getProgramInstance(connection, wallet)
    const getTiktoks = async() => {
        console.log('fetching')

        const videos = await program.account.videoAccount.all()
        console.log(videos)
        // Save all videos in state for frontend
        setTikToks(videos)
    }

    // Function to call likeVideo from smartContract
    const likeVideo = async address => {

    }

    // Function to call createComment from smartContract
    const createComment = async(address, count, comment) => {

    }

    // Function to call createvideo from smartContract
    const newVideo = async () => {
        const randomKey = anchor.web3.Keypair.generate().publicKey;

        let [video_pda] = await anchor.web3.PublicKey.findProgramAddress(
            [utf8.encode('video'), randomKey.toBuffer()],
            program.programId,
        )

        const tx = await program.rpc.createVideo(
            description,
            videoUrl,
            userDetail.userName,
            userDetail.userProfileImageUrl,
            {
                accounts: {
                    video: video_pda,
                    randomkey: randomKey,
                    authority: wallet.publicKey,
                    ...defaultAccounts
                }
            }
        )

        console.log(tx)
        setDescription('')
        setVideoUrl('')
        setNewVideoShow(false)
    }
    // Function to fetch comments from the commentAccount on the smartContract
    const getComments = async (address, count) => {

    }
    return { getTiktoks, likeVideo, createComment, newVideo, getComments}
}

export default useTiktok