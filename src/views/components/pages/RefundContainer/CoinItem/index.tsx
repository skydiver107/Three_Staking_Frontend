import React, { MouseEvent, useEffect } from "react";
require('@solana/wallet-adapter-react-ui/styles.css'); // Default styles that can be overridden by your app
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from '@mui/material/styles';

import NftCheckBox from 'src/views/components/base/NftCheckBox';
import ImageWrapper from 'src/views/components/base/ImageWrapper';
import CONFIG from 'src/configs'

interface Props {
  children?: React.ReactNode,
  sx?: SxProps<Theme>,
  isChecked?: boolean,
  nftItem: any,
  index: any,
  nftImg: string,
  nftName: string,
  nftList: any[],
  setNftLists: any,
  stakedLists: any[],
  setStakedLists: any,
  selectedNftCount: number,
  setSelectedNftCount: any,
  setMintArray: any,
  yourWallet: any,
  rewardCount: any,
  claimLeftDays: any,
  claimLeftHours: any,
  claimStatus: number,
  coin: number,
  setCoinStakeBtn: any,
  setGetCoin: any,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const CoinItem = (props: Props) => {

  const { COIN_PERIOD } = CONFIG

  const handleChecked = () => {
    if (props.yourWallet) {
      const result = props.nftList.map((item: any, idx: any) => {

        return props.index === idx ? {
          ...item, selected: !item?.selected
        } : item
      }
      )
      props.setNftLists([...result])

      if (result[props.index]?.selected) {
        props.setSelectedNftCount(props.selectedNftCount + 1);

      } else {
        props.setSelectedNftCount(props.selectedNftCount - 1);

      }

      const res = result.filter((item) => {
        return item?.selected === true
      })
      props.setMintArray([...res])

    } else {

      const result = props.stakedLists.map((item: any, idx: any) => {

        return props.index === idx ? {
          ...item, selected: !item?.selected
        } : item
      }
      )
      props.setStakedLists([...result])

      if (result[props.index]?.selected) {
        props.setSelectedNftCount(props.selectedNftCount + 1);

      } else {
        props.setSelectedNftCount(props.selectedNftCount - 1);

      }

      const res = result.filter((item) => {
        return item?.selected === true
      })

      console.log('res', res)
      props.setMintArray([...res])

      let coinSum = 0
      for (let i = 0; i < res.length; i++) {
        if (res[i].claimPassedDays >= COIN_PERIOD.midClaim) {
          props.setCoinStakeBtn(`CLAIM & UNSTAKE`)
        }
        coinSum = coinSum + res[i].coin

      }
      props.setGetCoin(coinSum)
    }
  }

  useEffect(() => {
  }, [])
  return (
    <Box
      component={`div`}
      sx={{
        border: props.nftItem?.selected ? theme => `solid 8px ${theme.palette.neutral.contrast}` : theme => `solid 8px ${theme.palette.common.white}`,
        borderRadius: `10px`,
        width: '100%',
      }}
      onClick={() => {
        handleChecked()
        // setChecked(!checked)
      }}
    >
      <Box
        component={`div`}
        sx={{
          background: theme => theme.palette.background.default,
          position: `relative`,
          border: theme => `solid 8px ${theme.palette.common.white}`,
          width: '100%',
          height: `100%`,
          paddingBottom: `calc(100% - 16px - 16px)`
        }}
      >
        <Box
          sx={{
            width: `100%`,
            height: `100%`,
            position: `absolute`,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <ImageWrapper
            src={props.nftImg} height={`calc(100% - 8px - 8px)`}
          />
        </Box>

        <Box
          sx={{
            position: `absolute`,
            background: `white`,
            borderTopRightRadius: `10px`,
            width: `48%`,
            bottom: 0,
            left: 0,
            px: 0
          }}
        >
          <Typography
            variant={`subtitle2`}
            sx={{
              fontFamily: `Red Hat Display`,
              mx: `auto`,
              textAlign: `center`,
              py: 0.75,
              display: props.yourWallet ? `auto` : `flex`,
              alignItems: `center`
            }}
          >
            #{props?.nftName?.split('#')[1]}
            {!props.yourWallet &&
              <Box sx={{
                display: props.claimLeftDays <= 0 || !props.claimLeftDays ? `none` : `flex`,
                alignItems: `center`,
                ml: 1
              }} >
                <Box sx={{
                  color: `#EC0000`,
                  fontFamily: 'Red Hat Display',
                  fontSize: `14px`
                }} >{
                    props.claimLeftDays !== 1 ? `${props.claimLeftDays} D`
                      : `${props.claimLeftHours} H`
                  }</Box>
                <Box
                  component={`img`}
                  src='/images/icons/time.png'
                  sx={{ marginLeft: `4px` }}
                />
              </Box>

            }

          </Typography>
        </Box>

        <NftCheckBox
          sx={{
            position: `absolute`,
            top: 1,
            right: 1,
            mx: `auto`,
            textAlign: `center`
          }}
          isChecked={props.nftItem?.selected}
        />
      </Box>

      {
        !props.yourWallet && <Box sx={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-around`,
          padding: `16px`,
          background: `white`
        }} >
          <Box sx={{
            fontFamily: `Gotham`,
            fontSize: `16px`
          }} >REWARDS:</Box>
          <Box sx={{
            textAlign: `right`,
            border: `1px solid #000000`,
            borderRadius: `10px`,
            padding: `8px 16px;`,
            ml: {
              sm: 2,
              ss: 0
            },
            width: `300px`,
            display: `flex`,
            justifyContent: `right`,
          }} >
            <Box sx={{
              fontFamily: 'Gilroy',
              fontSize: `13px`,
              fontWeight: 300
            }}>{props.rewardCount || 0}</Box>
            <Box sx={{
              fontFamily: 'Gilroy',
              fontSize: `13px`,
              fontWeight: 700,
              ml: 1
            }} >$DOT</Box>
          </Box>
        </Box>

      }

    </Box>
  );
};

export default CoinItem;
