import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  children?: React.ReactNode,
  sx?: SxProps<Theme>,
  selected?: number,
  solPrice: number,
  yourWallet: boolean,
  staked: boolean,
  stakedCount: any,
  nftListCount: any,
  coinStakeBtn: any,
  nftStakeBtn: any,
  getCoin: any,
  isCoin: any,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const NftsStatisticBar = (props: Props) => {


  return (
    <Stack
      direction={`row`}
      alignItems={`center`}
      justifyContent={`center`}
      sx={{
        ...props?.sx
      }}
      spacing={
        {
          ss: 1,
          sm: 4
        }
      }
    >
      <Box
        sx={{
          width: `84px`,
          border: theme => `solid 3px #F8D8B0`,
          borderRadius: 2,
          textAlign: `center`,
          background: props.yourWallet && props?.nftListCount === 0 || props.staked && props.stakedCount === 0 ? `repeating-linear-gradient(-45deg, #F8D8B0,#F8D8B0 4px, transparent 4px, transparent 8px)` : `none`,
          p: 0,
        }}
      >
        <Typography
          variant={`subtitle1`}
          sx={{
            fontFamily: `Red Hat Display`,
            mx: `auto`,
            textAlign: `center`,
            lineHeight: 1.25,
            color: `#F8D8B0`
          }}
        >
          {/* {props?.selected || 0} */}
          {
            props.yourWallet ? props.nftListCount : props.stakedCount
          }
        </Typography>

      </Box>

      <Typography
        variant={`subtitle1`}
        sx={{
          color: `#F8D8B0`,
          fontFamily: `Gilmer`,
        }}
      >
        NFTs SELECTED :  {!props.yourWallet && props.isCoin && `${props.getCoin} $DOT`}
      </Typography>

      <Button

        sx={{
          background: `#F8D8B0`,
          boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
          borderRadius: `32px`,
          height: {
            ss: 36,
            sm: 48
          },
          py: 0,
          px: 4,
          color: `black`,
          '&:disabled': {
            background: `#6B6B6B`,
            color: `#A9A9A9`
          },
          '&:hover': {
            background: `#e9b778`
          }
        }}
        disabled={props.yourWallet && props?.nftListCount === 0 || props.staked && props.stakedCount === 0}
        onClick={() => {
          props.onClick()
        }}
      >
        <Typography
          variant={`subtitle2`}
          sx={{
            fontFamily: `Gilmer`,
            fontWeight: `bold`
          }}
        >
          {!props.isCoin ? (props.yourWallet ? `STAKE` : props.nftStakeBtn)
            : (props.yourWallet ? `STAKE` : props.coinStakeBtn)
          }
        </Typography>
      </Button>
    </Stack>
  );
};

export default NftsStatisticBar;
