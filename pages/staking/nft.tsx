import React, { useEffect, useState } from "react";
import * as anchor from '@project-serum/anchor';

import CloseIcon from '@mui/icons-material/Close';
import {
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";
import { Connection, Transaction } from "@solana/web3.js";
import {
  useConnection,
  useAnchorWallet,
  useWallet
} from '@solana/wallet-adapter-react';

require('@solana/wallet-adapter-react-ui/styles.css'); // Default styles that can be overridden by your app

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import MagicEdenWhiteIcon from 'src/views/components/base/SvgIcon/MagicEdenWhiteIcon';
import { getNftMetadata } from 'src/helpers/getNftMetadata'
import { getProvider } from "src/helpers/getProvider";
import { getDaysPassed, getHoursPassed } from 'src/helpers/getDaysPassed'
import { signAndSendTransactions } from "src/helpers/connection";
import { getCurrentChainTime } from "src/helpers/getCurrentChainTime";
import NoNfts from 'src/views/components/pages/RefundContainer/NoNfts';

import NftItem from "src/views/components/pages/RefundContainer/NftItem";
import NftsStatisticBar from 'src/views/components/pages/RefundContainer/NftsStatisticBar';
import axios from "axios";
import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import WalletIcon from 'src/views/components/base/SvgIcon/WalletIcon';

import CONFIG from "src/configs";
import { NftIDL } from 'src/constants/IDL/staking_nft_reward'

import { STATISTICS } from "src/configs/config_dev";

const { PublicKey } = anchor.web3;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Nft = () => {
  const {
    MAKE_STAKINGWITHNFT,
    CREATOR_ADDRESS,
    POOL,
    POOL_DATA,
    PROGRAM_ID_NFT,
    TOTAL_STAKED,
    Nft_PERIOD,
    REWARD_DAY,
    REWARD_HOURS,
    NFT_ENDTIME
  } = CONFIG

  const wallet = useWallet();
  const anchorWallet = useAnchorWallet();

  const [successAlert, setSuccessAlert] = useState({
    open: false,
    content: ``,
  })

  const [errorAlert, setErrorAlert] = useState({
    open: false,
    content: ``,
  })

  const [infoAlert, setInfoAlert] = useState({
    open: false,
    content: ``
  })

  const [isSelect, setSelect] = useState({
    yourWallet: true,
    staked: false
  })

  const { connection } = useConnection();

  const [isShowModal, setIsShowModal] = React.useState(false);

  const [showLoading, setShowLoading] = React.useState<boolean>(false);
  // For alert message

  const [nftLists, setNftLists] = useState<any[]>([])
  const [stakedLists, setStakedLists] = useState<any[]>([])
  const [selectedNftCount, setSelectedNftCount] = useState(0)
  const [mintArray, setMintArray] = useState<any[]>([])
  const [txId, setTxID] = useState('')
  const [transactionId, setTransactionId] = useState('')

  const [nftListCount, setNftListCount] = useState(0)
  const [stakedCount, setStakedCount] = useState(0)

  const [currentStakedCount, setCurrentStakedCount] = useState(0)
  const [coinStakeBtn, setCoinStakeBtn] = useState('UNSTAKE')
  const [nftStakeBtn, setNftStakeBtn] = useState('UNSTAKE')

  const [getCoin, setGetCoin] = useState(0)
  const [isCoin, setCoin] = useState(true)

  const hideModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    const newRes = stakedLists.map((item: any, idx: any) => {
      return { ...item, selected: false }
    })
    setStakedLists([...newRes])
  }, [isSelect.staked])


  useEffect(() => {
    const newRes = nftLists.map((item: any, idx: any) => {
      return { ...item, selected: false }
    })
    setNftLists([...newRes])
  }, [isSelect.yourWallet])

  useEffect(() => {
    const nft_count = nftLists.filter((item: any, idx: any) => item?.selected === true)
    setNftListCount(nft_count.length)

    const stake_count = stakedLists.filter((item: any, idx: any) => item?.selected === true)
    setStakedCount(stake_count.length)
  }, [nftLists, stakedLists])

  const handleNftStaking = async () => {
    if (isSelect.yourWallet) {

      if (Date.now() > NFT_ENDTIME * 1000) {
        setErrorAlert({
          ...errorAlert,
          open: true,
          content: `The Staking season has ended. You may try to stake your NFT after the new season starts. You can still claim your rewards of already staked NFT.`,

        })
        return
      }
      const newArr = mintArray.filter((item: any, idx: any) => item?.selected)
      const mintAddress: any[] = newArr.map((item: any) => item.mint)

      try {
        setShowLoading(true)
        const txs: any = await axios.post(`${MAKE_STAKINGWITHNFT}/stake-txs`, {
          user: wallet.publicKey.toBase58(),
          nfts: mintAddress
        })
        console.log('txs', txs)
        console.log('txs data', txs?.data.txs.map((tx: any) => Transaction.from(tx?.data)));

        const result: any = await signAndSendTransactions(connection, wallet!, txs?.data.txs.map((tx: any) => Transaction.from(tx?.data)));
        console.log('result', result)

        if (result.length !== 0) {
          setTxID(result[0]?.txid.substr(0, 4) + '...' + result[0]?.txid.substr(result[0]?.txid.length - 4, 4))
          setTransactionId(result[0]?.txid)
          let newNftList = nftLists.filter((item: any) => item?.selected == false)
          let newStakedList = nftLists.filter((item: any) => item.selected === true)

          let send_nft: any[] = [];
          let remain_nft: any[] = [];

          for (let i = 0; i < result.length; i++) {
            if (result[i].slot !== 0) {
              send_nft.push({
                ...newStakedList[i],
                claimLeftDays: Nft_PERIOD,
                claimPassedDays: 0
              })
            } else {
              remain_nft.push(newStakedList[i])
            }
          }

          if (send_nft.length !== 0) {
            setCurrentStakedCount(currentStakedCount + newStakedList.length)
          }
          setNftLists([...newNftList, ...remain_nft])
          setStakedLists([...stakedLists, ...send_nft])
          setSelectedNftCount(0)

          if (send_nft.length === newArr.length) {
            setSuccessAlert({
              ...successAlert,
              open: true,
              content: `${send_nft.length} ${send_nft.length === 1 ? `NFT` : `NFTs`} Successfully Staked.`
            })
          } else {
            setErrorAlert({
              ...errorAlert,
              open: true,
              content: `Error Staking ${newArr.length} ${newArr.length === 1 ? `NFT` : `NFTs`}. Please try again or raise a ticket on our discord.`
            })
          }

          setShowLoading(false)
        } else {

          setErrorAlert({
            ...errorAlert,
            open: true,
            content: `Error Staking ${newArr.length} ${newArr.length === 1 ? `NFT` : `NFTs`}. Please try again or raise a ticket on our discord.`
          })
          setShowLoading(false)
        }
        setShowLoading(false)

      } catch (error) {

        console.log('error', error)
        setErrorAlert({
          ...errorAlert,
          open: true,
          content: `Error Staking ${newArr.length} ${newArr.length === 1 ? `NFT` : `NFTs`}. Please try again or raise a ticket on our discord.`
        })
        setShowLoading(false)
      }

    } else {

      setShowLoading(true)
      const newArr = stakedLists.filter((item: any, idx: any) => item?.selected)
      console.log('newArr2', newArr)
      const mintAddress: any[] = newArr.map((item: any) => item?.mint)
      try {
        const txs: any = await axios.post(`${MAKE_STAKINGWITHNFT}/claim-txs`, {
          user: wallet.publicKey.toBase58(),
          nfts: mintAddress
        })
        console.log('txs', txs)
        console.log('txs data', txs?.data.txs.map((tx: any) => Transaction.from(tx?.data)));
        const result: any = await signAndSendTransactions(connection, wallet!, txs?.data.txs.map((tx: any) => Transaction.from(tx?.data)));
        console.log('result', result)

        if (result.length !== 0) {
          let result_nft_send: any[] = [];
          let result_nft_remain: any[] = [];


          setTxID(result[0]?.txid.substr(0, 4) + '...' + result[0]?.txid.substr(result[0]?.txid.length - 4, 4))
          setTransactionId(result[0]?.txid)
          let newNftList = stakedLists.filter((item: any) => item?.selected == false)

          let newStakedList = stakedLists.filter((item: any) => item.selected === true)
          console.log('newNftList', newNftList)


          let signatures = result.map((item: any) => item?.txid)

          await axios.post(`${MAKE_STAKINGWITHNFT}/claim`, {
            signatures: signatures,
            nfts: txs?.data.rewardNfts
          })

          for (let i = 0; i < result.length; i++) {
            if (result[i].slot === 0) {
              result_nft_remain.push({
                ...newArr[i],
                selected: false
              })
            } else {
              result_nft_send.push(newArr[i])
            }
          }

          let remainNftList = [...result_nft_remain, ...newNftList]
          console.log('result_nft_send', result_nft_send)
          console.log('remainNftList', remainNftList)
          setStakedLists([...remainNftList])
          setNftLists([...nftLists, ...result_nft_send])
          setSelectedNftCount(0)
          setNftStakeBtn('UNSTAKE')
          if (result_nft_send.length === newArr.length) {
            setCurrentStakedCount(currentStakedCount - result_nft_send.length)
            setSuccessAlert({
              ...successAlert,
              open: true,
              content: `${result_nft_send.length} ${result_nft_send.length === 1 ? `NFT` : `NFTs`} Successfully Claimed.`
            })
          }

          else if (result_nft_send.length !== 0) {
            setCurrentStakedCount(currentStakedCount - result_nft_send.length)
            setErrorAlert({
              ...errorAlert,
              open: true,
              content: `Error Claiming ${result_nft_remain.length} ${result_nft_remain.length === 1 ? `NFT` : `NFTs`}. Please try again or raise a ticket on our discord`
            })
          } else {
            setErrorAlert({
              ...errorAlert,
              open: true,
              content: `Error Claiming  ${newArr.length} ${newArr.length === 1 ? `NFT` : `NFTs`}. Please try again or raise a ticket on our discord`
            })
          }

          setShowLoading(false)

        } else {
          await axios.post(`${MAKE_STAKINGWITHNFT}/claim`, {
            signatures: [],
            nfts: txs?.data.rewardNfts
          })
          setErrorAlert({
            ...errorAlert,
            open: true,
            content: `Error Claiming  ${newArr.length} ${newArr.length === 1 ? `NFT` : `NFTs`}. Please try again or raise a ticket on our discord`
            // content: `${newArr.length}${newArr.length === 1 ? `Nft` : `Nfts`} failure in claiming`
          })
          setShowLoading(false)
        }

      } catch (error) {
        // await axios.post(`${MAKE_STAKINGWITHNFT}/claim`, {
        //   signatures: [],
        //   nfts: txs?.data.rewardNfts
        // })
        console.log('error', error)
        setShowLoading(false)
        setErrorAlert({
          ...errorAlert,
          open: true,
          content: `Error Claiming  ${newArr.length} ${newArr.length === 1 ? `NFT` : `NFTs`}. Please try again or raise a ticket on our discord`
          // content: `${newArr.length}${newArr.length === 1 ? `Nft` : `Nfts`} failure in claiming`
        })
      }

    }

  }

  const getCollectionControl = async () => {
    try {
      if (!anchorWallet) {
        setShowLoading(false)
        return
      }
      setShowLoading(true)

      //-----------------Get Your Wallet Nft

      let rpcHost: any = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST;
      let connection = new Connection(rpcHost);
      const nftArray = await Promise.all([

        getParsedNftAccountsByOwner({
          publicAddress: wallet.publicKey.toString(),
          connection,
        })
      ]
      )

      /* Get hashList from creatorAdddress */

      // const getCollection = await getMintAddresses(new PublicKey(CREATOR_ADDRESS), connection)
      // console.log('getCollection', getCollection)

      //----------------------------------

      const newArr = nftArray[0].filter((item: any, idx: any) => {
        return item?.data?.creators && item?.data?.creators[0]?.address === CREATOR_ADDRESS
      })

      console.log('newArr Nft', newArr)

      const mintAddr = newArr.map((item: any) => item.mint)
      // console.log('mintAddr', mintAddr)
      let values = await Promise.all(newArr.map((item: any) => {
        let meta: any = getNftMetadata(item.data.uri);
        return meta
      }))

      const newRes = newArr.map((item: any, idx: any) => {
        return { ...item, metadata: values[idx], selected: false }
      })

      setMintArray([...newRes])
      setNftLists([...newRes])

      let poolMintArray: any[] = [];
      let poolNftArray: any[] = [];

      let isMint: any;

      const provider = getProvider(connection, wallet!);
      const programNft = new anchor.Program(NftIDL, new PublicKey(PROGRAM_ID_NFT), provider);
      console.log('programNft', programNft)

      const [pool] = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(POOL), wallet!.publicKey!.toBuffer()],
        new PublicKey(PROGRAM_ID_NFT)
      )
      const wallets: any = pool.toString()
      const stakedArray = await Promise.all([
        getParsedNftAccountsByOwner({
          publicAddress: wallets,
          connection
        })
      ])

      const newStakedArray = stakedArray[0].filter((item: any, idx: any) => {
        return item?.data?.creators[0].address === CREATOR_ADDRESS
      })

      let stakedValues = await Promise.all(newStakedArray.map((item: any) => {
        let meta: any = getNftMetadata(item.data.uri);
        return meta
      }))

      const metaStakedArray = newStakedArray.map((item: any, idx: any) => {
        return { ...item, metadata: stakedValues[idx], selected: false }
      })

      for (let i = 0; i < metaStakedArray.length; i++) {
        try {
          let [poolDataNft]: any = await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from(POOL_DATA), wallet!.publicKey!.toBuffer(), new PublicKey(metaStakedArray[i]?.mint).toBuffer()],
            new PublicKey(PROGRAM_ID_NFT)
          );
          const poolDataInfoNft = await connection.getAccountInfo(poolDataNft);
          if (poolDataInfoNft) {
            isMint = newArr[i]?.mint;
            poolMintArray.push(isMint);
            const getPoolDataNft = await programNft.account.poolData.fetch(poolDataNft)
            poolNftArray.push(getPoolDataNft)
          }

        } catch (error) {
          console.log('error', error)
        }

      }

      let claimPassedDays: any, claimPassedHours: any;
      let claimLeftDays: any, claimLeftHours: any;
      const currentTime = await getCurrentChainTime(connection);

      for (let i = 0; i < poolNftArray.length; i++) {

        claimPassedDays = await getDaysPassed(currentTime, poolNftArray[i].startTime);

        claimPassedHours = await getHoursPassed(currentTime, poolNftArray[i].startTime);

        if (Nft_PERIOD - claimPassedDays === 1) {
          claimLeftHours = Nft_PERIOD * (REWARD_DAY / REWARD_HOURS) - claimPassedHours
        } else {
          claimLeftDays = Nft_PERIOD - claimPassedDays
        }

        poolNftArray[i].claimPassedDays = claimPassedDays
        poolNftArray[i].claimLeftDays = claimLeftDays
        poolNftArray[i].claimLeftHours = claimLeftHours
      }

      let newStakedList: any[] = []
      metaStakedArray.map((item: any) => {
        poolNftArray.map((pool: any) => {
          if (item.mint === pool.mint.toString()) {
            const result: any = {
              ...item,
              claimLeftDays: pool?.claimLeftDays,
              claimLeftHours: pool?.claimLeftHours,
              claimStatus: pool?.claimedCount,
              claimPassedDays: pool?.claimPassedDays,
            }
            newStakedList.push(result)
          }
        })
      })

      setStakedLists(newStakedList)

      let [statisticPool]: any = await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from(STATISTICS)],
        new PublicKey(PROGRAM_ID_NFT)
      );

      const statisticData = await programNft.account.statistic.fetch(statisticPool)

      setCurrentStakedCount(statisticData?.stakedCount)
      setShowLoading(false)

    } catch (error) {
      console.log("Error thrown, while fetching NFTs", error.message);
      setShowLoading(false)
    }
  }

  useEffect(() => {
    if (mintArray.length === 0) {
      setNftStakeBtn('UNSTAKE')
    }
    const res = mintArray.filter((item: any) => { return item.claimPassedDays < 30 });

    for (let i = 0; i < mintArray.length; i++) {
      if (res.length === mintArray.length) {
        setNftStakeBtn('UNSTAKE')
      }
    }

  }, [mintArray])

  useEffect(() => {
    (async () => {
      await getCollectionControl()
    })()
  }, [wallet]);

  return (

    <Box sx={{
      paddingTop: `48px`,
      marginLeft: {
        tg: `353px`,
        sm: `22%`,
        ss: `0px`
      },
    }} >
      <Box sx={{
        width: `90%`,
        margin: `0 auto`
      }} >

        <Box sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }} >
          <Box sx={{
            display: `flex`,
            alignItems: `center`,
            borderBottom: `1px solid black`,
            pb: `4px`,
            pr: `20px`
          }} >
            <Box
              component={`img`}
              src='/images/icons/staking.png'
            />
            <Box sx={{
              fontFamily: 'Gilroy Extra',
              fontWeight: 800,
              color: `#0D0D0D`,
              fontSize: `18px`,
              ml: 1
            }} >
              STAKING (Way to BUDDI3S)
            </Box>
          </Box>
          <WalletMultiButton
            startIcon={
              <WalletIcon sx={{ width: 24, height: 24 }} />
            }
            className={`mobile-wallet-button  desktop-wallet-button`}
          />
        </Box>

        <Box sx={{
          display: `flex`,
          flexDirection: {
            sm: `row`,
            ss: `column`
          },
          justifyContent: `space-between`,
          alignItems: `center`,
          borderBottom: `4px solid #0D0D0D`,
          mt: 6,
          padding: `0 24px`
        }} >

          <Box sx={{
            display: `flex`,
            order: {
              sm: `unset`,
              ss: 1
            },
            mt: {
              sm: 0,
              ss: 2
            }
          }} >
            <Box
              sx={{
                background: isSelect.yourWallet ? `black` : `transparent`,
                color: isSelect.yourWallet ? `#F8D8B0` : `#0F0F0F`,
                '&:hover': {
                  cursor: `pointer`
                },
                padding: `7px 10px`,
                fontFamily: 'Gilmer',
                fontWeight: isSelect.yourWallet ? 700 : 300,
                fontSize: `14px`
              }}
              onClick={() => {
                setSelect({ ...isSelect, yourWallet: true, staked: false })
              }}  >YOUR WALLET
            </Box>
            <Box
              onClick={() => {
                setSelect({ ...isSelect, yourWallet: false, staked: true })
              }}
              sx={{
                background: isSelect.staked ? `black` : `transparent`,
                color: isSelect.staked ? `#F8D8B0` : `#0F0F0F`,
                '&:hover': {
                  cursor: `pointer`
                },
                padding: `7px 10px`,
                ml: 4,
                fontFamily: 'Gilmer',
                fontWeight: isSelect.staked ? 700 : 300,
                fontSize: `14px`
              }} >STAKED
            </Box>
          </Box>

          <Box sx={{
            display: `flex`,
            alignItems: `center`,
            ml: 1
          }} >
            <Box sx={{
              display: `flex`,
              alignItems: `center`
            }} >
              <span style={{
                fontFamily: 'Gilroy Extra',
                fontWeight: 700,
                fontSize: `14px`,

              }} >Total Staked: </span>
              <span style={{
                fontFamily: 'Gilmer',
                fontWeight: 300,
                fontSize: `13px`,
                marginLeft: `8px`
              }} >

                {currentStakedCount}/{TOTAL_STAKED}
              </span>
            </Box>
            <a href="https://thre3.gitbook.io/whitepap3r/thre3-studio/staking" target="_blank" >
              <Box sx={{ display: `flex`, alignItems: `center`, ml: 2 }} >
                <Box
                  component={`img`}
                  src={`/images/icons/info.png`}
                  sx={{
                    mr: 0.5,

                  }}
                />
                <span style={{
                  fontFamily: 'Red Hat Display',
                  fontSize: `13px`,
                  fontWeight: 300,
                  marginLeft: `4px`
                }} >

                  How it Works?
                </span>
              </Box>
            </a>
          </Box>
        </Box>

        {
          !anchorWallet && <Box sx={{ textAlign: `center` }} >
            <Box sx={{
              fontFamily: 'Eloquia Display',
              fontSize: `40px `,
              fontWeight: `200`,
              marginTop: `80px`
            }} >Please connect your wallet to continue</Box>
            <WalletMultiButton

              className={`staking-wallet-button`}
            />
            <NftsStatisticBar
              sx={{
                position: `fixed`,
                background: `black`,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1,
                paddingTop: `13px`,
                paddingBottom: `21px`,
                marginLeft: {
                  tg: `353px`,
                  sm: `22%`,
                  ss: `0px`
                },
              }}
              onClick={handleNftStaking}
              selected={selectedNftCount}
              solPrice={selectedNftCount}
              yourWallet={isSelect.yourWallet}
              staked={isSelect.staked}
              stakedCount={stakedCount}
              nftListCount={nftListCount}
              nftStakeBtn={nftStakeBtn}
              coinStakeBtn={coinStakeBtn}
              getCoin={getCoin}
            // isCoin={isCoin}
            >

            </NftsStatisticBar>
          </Box>
        }
        {
          anchorWallet &&
          <Box>
            <Grid
              container
              direction={`row`}
              alignItems={`center`}
              spacing={{
                ss: 3,
                sm: 4,
                md: 6,
                xl: 4
              }}
              sx={{
                mt: `0 !important`,
                pb: {
                  ss: 20,
                  sm: 18
                }
              }}
            >
              {
                isSelect.yourWallet && nftLists.map((nft: any, index: number) => {
                  return (
                    <Grid
                      item
                      ss={12}
                      xs={6}
                      sm={6}
                      md={4}
                      xl={3}
                      sl={3}
                      key={index}
                      sx={{
                        mt: 6,
                        pt: `0px !important`,
                        pb: `26px !important`,
                        transition: `all 0.3s`,
                        '&:hover': {
                          cursor: `pointer`,
                          transform: `scale(1.03)`
                        }
                      }}
                    >
                      <NftItem
                        isChecked={false}
                        nftItem={nft}
                        index={index}
                        nftImg={nft?.metadata?.image}
                        nftName={nft?.metadata?.name}
                        nftList={nftLists}
                        setNftLists={setNftLists}
                        stakedLists={stakedLists}
                        setStakedLists={setStakedLists}
                        selectedNftCount={selectedNftCount}
                        setSelectedNftCount={setSelectedNftCount}
                        setMintArray={setMintArray}
                        yourWallet={isSelect.yourWallet}
                        claimLeftDays={nft?.claimLeftDays}
                        claimLeftHours={nft?.claimLeftHours}
                        claimStatus={nft?.claimStatus}
                        setNftStakeBtn={setNftStakeBtn}
                      />

                    </Grid>
                  )
                })
              }

              {
                isSelect.staked && stakedLists.map((nft: any, index: number) => {
                  return (
                    <Grid
                      item
                      ss={12}
                      xs={6}
                      sm={6}
                      md={4}
                      xl={3}
                      sl={3}
                      key={index}
                      sx={{
                        mt: 6,
                        pt: `0px !important`,
                        pb: `26px !important`,
                        transition: `all 0.3s`,
                        '&:hover': {
                          cursor: `pointer`,
                          transform: `scale(1.03)`
                        }
                      }}
                    >
                      <NftItem
                        isChecked={false}
                        nftItem={nft}
                        index={index}
                        nftImg={nft?.metadata?.image}
                        nftName={nft?.metadata?.name}
                        nftList={nftLists}
                        setNftLists={setNftLists}
                        stakedLists={stakedLists}
                        setStakedLists={setStakedLists}
                        selectedNftCount={selectedNftCount}
                        setSelectedNftCount={setSelectedNftCount}
                        setMintArray={setMintArray}
                        yourWallet={isSelect.yourWallet}
                        claimLeftDays={nft?.claimLeftDays}
                        claimLeftHours={nft?.claimLeftHours}
                        claimStatus={nft?.claimStatus}
                        setNftStakeBtn={setNftStakeBtn}
                      />
                    </Grid>
                  )
                })
              }

            </Grid>

            {isSelect.yourWallet && nftLists.length == 0 &&
              < NoNfts context='No NFTs in your wallet :(' />}
            {isSelect.staked && stakedLists.length == 0 &&
              < NoNfts context='No NFTs are staked from your wallet :(' />}

            <NftsStatisticBar
              sx={{
                position: `fixed`,
                background: `black`,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1,
                paddingTop: `13px`,
                paddingBottom: `21px`,
                marginLeft: {
                  tg: `353px`,
                  sm: `22%`,
                  ss: `0px`
                },
              }}
              onClick={handleNftStaking}
              selected={selectedNftCount}
              solPrice={selectedNftCount}
              yourWallet={isSelect.yourWallet}
              staked={isSelect.staked}
              stakedCount={stakedCount}
              nftListCount={nftListCount}
              nftStakeBtn={nftStakeBtn}
              coinStakeBtn={coinStakeBtn}
              getCoin={getCoin}
            // isCoin={isCoin}
            >

            </NftsStatisticBar>

            <Dialog
              open={isShowModal}
              onClose={hideModal}
              sx={{
                '& .MuiPaper-root': {
                  background: theme => `none`,
                  borderRadius: 8,
                  width: 516,
                  maxHeight: `84vh`
                }
              }}
            >
              <Stack
                direction={`column`}
                alignItems={`center`}
                justifyContent={`space-between`}
                sx={{
                  position: `relative`,
                  px: {
                    ss: 2,
                    sm: 4
                  },
                  background: `#F2ECDF`,
                  borderRadius: 8,
                  overflow: `unset !important`
                }}
              >
                <CloseIcon
                  sx={{
                    position: `absolute`,
                    right: `16px`,
                    top: `16px`,
                    cursor: `pointer`
                  }}
                  onClick={hideModal}
                />

                <Box sx={{
                  width: `216px`,
                  height: `216px`
                }} >
                  <Box
                    component={`img`}
                    src={`/images/assets/rain.gif`}
                    sx={{
                      width: `100%`,
                      mx: `auto`
                    }}
                  />
                  {/* <img src="/images/assets/rain.gif" /> */}
                </Box>

                <Box
                  sx={{
                    color: theme => theme.palette.common.black,
                    fontFamily: `Gotham`,
                    textAlign: `center`
                  }}
                >
                  You’ll be missed
                </Box>

                <Box
                  sx={{
                    color: theme => theme.palette.common.black,
                    fontFamily: `Gotham`,
                    mt: 2,
                    textAlign: `center`
                  }}
                >
                  It’s quite unfortunate to see you leaving us!
                </Box>

                <Box
                  sx={{
                    color: theme => theme.palette.common.black,
                    fontFamily: `Gotham`,
                    textAlign: `center`
                  }}
                >
                  You can track your staking transaction at:
                </Box>

                <Box
                  sx={{
                    color: theme => theme.palette.common.black,
                    fontFamily: `Gotham`,
                    fontWeight: `bold`,
                    mt: 3,
                    textAlign: `center`
                  }}
                >
                  TRANSACTION ID
                </Box>
                <a
                  href={`https://solscan.io/tx/${transactionId}?cluster=${process.env.NEXT_PUBLIC_SOLANA_NETWORK}`}
                  target="blank"
                >
                  <Box
                    sx={{
                      fontFamily: `Gotham`,
                      mt: 2,
                      color: `#59A7E1`,
                      textDecoration: `underline`,
                      textAlign: `center`
                    }}
                  >
                    {txId}
                  </Box>
                </a>
                <Box
                  sx={{
                    color: theme => theme.palette.common.black,
                    fontFamily: `Gotham`,
                    mt: 2,
                    textAlign: `center`
                  }}
                >
                  In case you change your mind, feel free to
                  come back
                </Box>
                <Box
                  component={`a`}
                  href={`https://magiceden.io/marketplace/flippinrabbits`}
                  target="_blanks"
                >
                  <Button
                    sx={{
                      display: `flex`,
                      alignItems: `center`,
                      height: {
                        ss: 36,
                        sm: 48
                      },
                      background: `#F8D8B0`,
                      boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
                      borderRadius: `16px`,
                      py: 0,
                      px: 4,
                      mt: 3,
                      mb: 4,
                      border: `3px solid black`,
                      color: 'black',
                      '&:disabled': {
                        background: theme => theme.palette.neutral.grey
                      },
                      '&:hover': {
                        background: `#f5b463`
                      }
                    }}
                  >
                    <Box
                      sx={{
                        fontFamily: `Gilmer`,
                        fontWeight: `bold`,
                        textAlign: `center`
                      }}
                    >
                      BUY NOW FROM&nbsp;
                    </Box>
                    <MagicEdenWhiteIcon
                      sx={{
                        width: 38,
                        height: 38,
                        mt: 0.5
                      }}
                    />
                  </Button>
                </Box>

              </Stack>
            </Dialog>
          </Box>
        }
      </Box>
      <Backdrop
        sx={{ color: '#00e7ffb8', zIndex: 9999 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" sx={{ width: '70px', height: '70px' }} />
      </Backdrop>

      <Stack sx={{ width: '100%' }} >
        <Snackbar open={successAlert.open} autoHideDuration={6500} onClose={() => setSuccessAlert({ ...successAlert, open: false })}>
          <Alert color="success" elevation={6} sx={{ fontSize: `14px  !important`, alignItems: `center` }} >
            {successAlert.content}
          </Alert>
        </Snackbar>
      </Stack>

      <Stack sx={{ width: '100%' }} >
        <Snackbar open={errorAlert.open} autoHideDuration={6500} onClose={() => setErrorAlert({ ...errorAlert, open: false })}>
          <Alert severity="error" elevation={6} sx={{ fontSize: `14px  !important`, alignItems: `center` }} >
            {errorAlert.content}
          </Alert>
        </Snackbar>
      </Stack>


      <Stack sx={{ width: '100%' }} >
        <Snackbar open={infoAlert.open} autoHideDuration={6000} onClose={() => setInfoAlert({ ...infoAlert, open: false })}>
          <Alert onClose={() => setInfoAlert({ ...infoAlert, open: false })} severity="info" elevation={6} sx={{ fontSize: `14px  !important`, alignItems: `center` }} >
            {infoAlert.content}
          </Alert>
        </Snackbar>
      </Stack>

    </Box>
  )
}
export default Nft