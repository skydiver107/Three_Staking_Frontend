import React, { Fragment } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import handleImageError from "src/@utils/handleImageError";

import Header from "./Header";
import Footer from "./Footer";
import Left from "./Left"
import ScrollTop from 'src/views/components/pages/RefundContainer/ScrollTop';
interface ContainerProps {
  children: React.ReactNode
}

const RefundContainer = (props: ContainerProps) => {
  const linkRouter = useRouter();

  const isActive = (url: string) => {
    return linkRouter.asPath.includes(url);
  };

  React.useEffect(() => {
    (async () => {

    })()
  }, []);

  return (

    <Box>
      <Left />
      <Box
        component={`main`}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RefundContainer;
