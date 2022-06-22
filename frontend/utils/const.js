import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from './tiktok_clone.json'

export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey(
    "Deg4tbbcH1oU6Zark48d8gwuA4S9GqLcA4xhEG3B2WtL"
)

export const TIKTOK_IDL = tiktok