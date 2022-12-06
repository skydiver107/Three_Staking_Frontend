import React, { Fragment } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MagicEdenWhiteIcon from 'src/views/components/base/SvgIcon/MagicEdenWhiteIcon';

import handleImageError from 'src/@utils/handleImageError';

interface Props {
  children?: React.ReactNode,
  context: any
}

const NoNfts = (props: Props) => {
  const linkRouter = useRouter();
  const isActive = (url: string) => {
    return linkRouter.asPath.includes(url);
  };

  React.useEffect(() => {
    (async () => {

    })()
  }, []);

  return (
    <Stack
      direction={`column`}
      alignItems={`center`}
      justifyContent={`space-between`}
      sx={{
        pb: {
          ss: 28,
          sm: 22
        }
      }}
    >
      <Typography
        variant={`h4`}
        sx={{
          fontFamily: `Gotham`,
          color: theme => theme.palette.common.black,
          textAlign: `center`
        }}
      >
        {props.context}
      </Typography>

      <Box
        component={`img`}
        src={`/images/assets/sunset.gif`}
        sx={{
          mx: `auto`,
          width: {
            ss: `100%`,
            sm: `360px`,
            tg: `444px`
          }
        }}
      />

    </Stack>
  );
};

export default NoNfts;
