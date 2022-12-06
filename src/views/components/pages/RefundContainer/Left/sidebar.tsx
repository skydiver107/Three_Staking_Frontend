
import { useEffect, useState } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import HomeIcon from 'src/views/components/base/SvgIcon/HomeIcon';
import StakingIcon from 'src/views/components/base/SvgIcon/StakingIcon';
import RaffleIcon from 'src/views/components/base/SvgIcon/RaffleIcon';
import DaoIcon from 'src/views/components/base/SvgIcon/DaoIcon';
import NftItemIcon from 'src/views/components/base/SvgIcon/NftItemIcon';
import WalletIcon from 'src/views/components/base/SvgIcon/WalletIcon';

const SideBar = (props: any) => {

  const [menuLists, setMenuLists] = useState([
    {
      img: <HomeIcon />, href: '/home', title: `Home`
    },
    { img: <StakingIcon />, href: '/staking', title: `Staking` },
    {
      img: <RaffleIcon />, href: '/raffles', title: `Raffles`, coming: `Coming Soon`
    },
    {
      img: <DaoIcon />, href: '/dao', title: `3 DAO`, coming: `Coming Soon`
    },
    { img: <NftItemIcon />, href: '/room', title: `Gre3n Room`, coming: `Coming Soon` },
  ])

  const [isActive, setActive] = useState(0)
  const linkRouter = useRouter();
  const path = linkRouter.asPath;

  useEffect(() => {
    console.log('path', path)
    const findId = menuLists.findIndex((item: any) => item.href === path)
    setActive(findId)

    if (path == '/staking/nft' || path == '/staking/coin') {
      setActive(1)
    }

  }, [path])

  return (
    <Menu {...props}>

      <Box
        sx={{
          width: `353px`,
          background: `#F8D8B0`,
          padding: {
            sm: `43px 0px`,
            ss: `24px 0px`
          },
          minHeight: `100vh`,
          position: `fixed`,
          zIndex: 10,
          display: {
            ss: `none`,
            sm: `block`
          }
        }}
      >
        <Box sx={{
          padding: `0px 88px`,
          textAlign: `center`
        }} >
          <Link href="/home" ><Box
            component={`img`}
            src={`/images/logo.svg`}
            sx={{
              '&:hover': {
                cursor: `pointer`
              }
            }}
          /></Link>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `center`,
              gap: `32px`,
              marginTop: `44px`
            }}
          >
            <a href='https://discord.gg/XhvmdVeqys' target={`_blank`}  >
              <Box component={`img`}
                src="/images/icons/discord.png"
                sx={{
                  '&:hover': {
                    cursor: `pointer`
                  }
                }}
              />
            </a>
            <a href='https://twitter.com/Thre3Art' target={`_blank`} >
              <Box component={`img`}
                src="/images/icons/twitter.png"
                sx={{
                  '&:hover': {
                    cursor: `pointer`
                  }
                }}
              />
            </a>
            <a href='https://magiceden.io/marketplace/thre3' target={`_blank`} >
              <Box component={`img`}
                src="/images/icons/magiceden.png"
                sx={{
                  '&:hover': {
                    cursor: `pointer`
                  }
                }}
              />
            </a>

          </Box>
        </Box>

        <Box sx={{
          marginTop: {
            sm: `60px`,
            ss: `16px`
          }
        }} >

          {
            menuLists.map((menu: any, idx: any) => {
              return (
                <Link href={menu.href}  >
                  <Box
                    // component={`a`}
                    // href={menu.href}
                    sx={{
                      display: `flex`,
                      alignItems: `center`,
                      padding: {
                        sm: `13px 66px`,
                        ss: `13px 33px`
                      },
                      marginLeft: idx === isActive ? `-4px` : `auto`,
                      // background:`#e5ba84`
                      background: idx === isActive ? `#e5c8a4` : `transparent`,
                      '&:hover': {
                        cursor: `pointer`
                      }
                    }}

                    onClick={() => {
                      setActive(idx)
                    }}
                  >

                    <Box sx={{
                      width: idx === isActive ? `26px` : `20px`,
                      // marginLeft: idx === 2 ? `0px` : `8px`,
                      display: `flex`,
                      alignItems: `center`
                    }} >
                      {menu.img}
                    </Box>
                    <Box sx={{
                      marginLeft: `18px`,
                      fontFamily: 'Gilroy',
                      fontWeight: idx === isActive ? `800` : `300`,
                      fontSize: `18px`
                    }} >
                      {menu.title}
                      <p style={{
                        fontSize: `9px`,
                        fontFamily: `Gilroy`,
                        color: `#0D0D0D`,
                        margin: `0`
                      }} >{menu.coming}</p>
                    </Box>
                  </Box>
                </Link>

              )
            })
          }


        </Box>

        <WalletMultiButton
          startIcon={
            <WalletIcon sx={{ width: 24, height: 24 }} />
          }
          className={`mobile-wallet-button sideBar-wallet-button`}
        />
      </Box>
    </Menu>
  )
}
export default SideBar