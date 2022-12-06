import * as anchor from '@project-serum/anchor'
import { AccountLayout, Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';

export const getCurrentChainTime = async (connection: anchor.web3.Connection) => {
  const slot = await connection.getSlot('confirmed');
  const curChainTime = await connection.getBlockTime(slot);
  return curChainTime;
}
