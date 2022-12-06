import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from 'next/link';
require('@solana/wallet-adapter-react-ui/styles.css'); // Default styles that can be overridden by your app

import Box from "@mui/material/Box";
import StakingIcon from "src/views/components/base/SvgIcon/StakingIcon";
import RaffleIcon from "src/views/components/base/SvgIcon/RaffleIcon";
import DaoIcon from "src/views/components/base/SvgIcon/DaoIcon";
import NftItemIcon from "src/views/components/base/SvgIcon/NftItemIcon";


const Home = () => {

  return (
    <>
      <Box
        component={`section`}
        sx={{
          paddingTop: {
            sm: `158px`,
            ss: `0px`
          },
          position: `relative`,
          marginLeft: {
            sm: `353px`,
            ss: 0
          }
        }}
      >
        <Box sx={{
          margin: {
            sm: `0 64px`,
            ss: '0 auto'
          },
          marginLeft: "64px",
          width: {
            sm: `auto`,
            ss: `90%`
          }
        }} >

          <Box

          >
            <Box sx={{
              fontFamily: 'Eloquia Extra',
              fontWeight: `800`,
              fontSize: {
                sm: `76px`,
                ss: `34px`
              }
            }} >
              THRE3 STUDIO:
            </Box>
            <Box sx={{
              fontFamily: `Eloquia Display`,
              fontWeight: `300`,
              fontSize: {
                sm: `76px`,
                ss: `27px`,
              }
            }} >
              Your Utility Home
            </Box>
          </Box>

          <Box sx={{
            marginTop: {
              sm: `100px`,
              ss: `50px`
            }
          }} >
            <Box
              sx={{
                display: `flex`,
                alignItems: `center`,

              }}
            ><Box sx={{
              fontFamily: 'Gilroy',
              fontWeight: 800,
              fontSize: {
                sm: `32px`,
                ss: `24px`
              },
              borderBottom: `1px solid black`,
              paddingRight: `30px`
            }} > STATISTICS</Box> <Box sx={{ ml: 4 }} component={`img`} src={`/images/icons/chart.png`} />
            </Box>

            <Box sx={{
              display: `flex`,
              justifyContent: `space-between`,
              flexWrap: `wrap`,
              width: {
                sm: `650px`,
                ss: `100%`
              },
              marginTop: `28px`,
              rowGap: `24px`
            }} >

              <Box sx={{
                width: {
                  sm: `48%`,
                  ss: `100%`
                },
                border: `2px solid #000000`,
                background: `#F8D8B0`,
                borderRadius: `11px`,
                position: `relative`,
                padding: `34px 24px`,
                display: `flex`,
                justifyContent: `space-between`
              }} >
                <Box>
                  <Box sx={{
                    textDecoration: `underline`,
                    color: `#0D0D0D`,
                    fontWeight: `300`,
                    fontSize: `18px`
                  }} >FLOOR:
                  </Box>
                  <Box sx={{
                    fontFamily: `Red Hat Extra`,
                    fontSize: {
                      sm: `28px`,
                      ss: `20px`
                    },
                    color: `#0D0D0D`,
                    display: `flex`,
                    alignItems: `center`,
                    fontWeight: 800
                  }} >-<Box sx={{ ml: 0.5 }} component={`img`} src='images/icons/sol.png' />
                  </Box>
                </Box>
                <Box sx={{
                  // transform: `rotateX(-180deg)  translateY(10px)`
                }} >
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translate(55px, -7px)`
                  }} />
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translateY(20px)`
                  }} />
                </Box>
              </Box>

              <Box sx={{
                width: {
                  sm: `48%`,
                  ss: `100%`
                },
                border: `2px solid #000000`,
                background: `#F8D8B0`,
                borderRadius: `11px`,
                position: `relative`,
                padding: `34px 24px`,
                display: `flex`,
                justifyContent: `space-between`
              }} >
                <Box>
                  <Box sx={{
                    textDecoration: `underline`,
                    color: `#0D0D0D`,
                    fontWeight: `300`,
                    fontSize: `18px`
                  }} >TOTAL VOLUME:
                  </Box>
                  <Box sx={{
                    fontFamily: `Red Hat Extra`,
                    fontSize: {
                      sm: `28px`,
                      ss: `20px`
                    },
                    color: `#0D0D0D`,
                    display: `flex`,
                    alignItems: `center`,
                    fontWeight: 800

                  }} >- <Box sx={{ ml: 0.5 }} component={`img`} src='images/icons/sol.png' />
                  </Box>
                </Box>
                <Box>
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translate(55px, -7px)`
                  }} />
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translateY(20px)`
                  }} />
                </Box>
              </Box>

              <Box sx={{
                width: {
                  sm: `48%`,
                  ss: `100%`
                },
                border: `2px solid #000000`,
                background: `#F8D8B0`,
                borderRadius: `11px`,
                position: `relative`,
                padding: `34px 24px`,
                display: `flex`,
                justifyContent: `space-between`
              }} >
                <Box>
                  <Box sx={{
                    textDecoration: `underline`,
                    color: `#0D0D0D`,
                    fontWeight: `300`,
                    fontSize: `18px`
                  }} >TOTAL SUPPLY:
                  </Box>
                  <Box sx={{
                    fontFamily: `Red Hat Extra`,
                    fontSize: {
                      sm: `28px`,
                      ss: `20px`
                    },
                    color: `#0D0D0D`,
                    display: `flex`,
                    alignItems: `center`,
                    fontWeight: 800

                  }} >6666<Box sx={{ ml: 0.5 }} component={`img`} src='images/icons/sol.png' />
                  </Box>
                </Box>
                {/* <Box>
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translate(55px, -7px)`
                  }} />
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translateY(20px)`
                  }} />
                </Box> */}
              </Box>

              <Box sx={{
                width: {
                  sm: `48%`,
                  ss: `100%`
                },
                border: `2px solid #000000`,
                background: `#F8D8B0`,
                borderRadius: `11px`,
                position: `relative`,
                padding: `34px 24px`,
                display: `flex`,
                justifyContent: `space-between`
              }} >
                <Box>
                  <Box sx={{
                    textDecoration: `underline`,
                    color: `#0D0D0D`,
                    fontSize: `18px`,
                    // fontWeight: 800

                  }} >OWNERS:
                  </Box>
                  <Box sx={{
                    fontFamily: `Red Hat Extra`,
                    fontSize: {
                      sm: `28px`,
                      ss: `20px`
                    },
                    color: `#0D0D0D`,
                    display: `flex`,
                    alignItems: `center`,
                    fontWeight: 800
                  }} >-<Box sx={{ ml: 0.5 }} component={`img`} src='images/icons/sol.png' />
                  </Box>
                </Box>
                <Box>
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translate(55px, -7px)`
                  }} />
                  <Box component={`img`} src='/images/icons/polygon.png' sx={{
                    transform: `translateY(20px)`
                  }} />
                </Box>
              </Box>
            </Box>


            <Box
              sx={{
                display: `flex`,
                alignItems: `center`,
                marginTop: `66px`
              }}
            ><Box sx={{
              fontFamily: 'Gilroy',
              fontWeight: 700,
              fontSize: {
                sm: `32px`,
                ss: `24px`
              },
              borderBottom: `1px solid black`,
              paddingRight: `30px`
            }} > TOOLS</Box> <Box sx={{ ml: 4 }} component={`img`} src={`/images/icons/tools.png`} />
            </Box>

            <Box sx={{
              display: `flex`,
              flexWrap: `wrap`,
              gap: `25px`,
              marginTop: `48px`
            }} >
              <Link href="/staking" >
                <Box sx={{
                  background: `#FFFFFF`,
                  border: `3px solid #0D0D0D`,
                  borderRadius: `8px`,
                  padding: `24px`,
                  width: {
                    sm: `48%`,
                    ss: `100%`
                  },
                  cursor: `pointer`
                }} >
                  <Box sx={{
                    display: `flex`,
                    alignItems: `center`,
                    width: `26px`,
                  }} >
                    {/* <Box component={`img`} src={'/images/icons/staking.png'} sx={{ width: `36px` }} /> */}
                    <StakingIcon />
                    <Box sx={{
                      ml: 4,
                      fontSize: {
                        sm: `28px`,
                        ss: `20px`
                      },
                      fontWeight: `700`,
                      fontFamily: 'Gilroy',
                      color: `#0D0D0D`
                    }} >Staking</Box>
                  </Box>
                  <Box sx={{
                    fontFamily: 'Eloquia Display',
                    color: `#0D0D0D`,
                    fontSize: `14px`,
                    marginTop: `24px`
                  }} >
                    You’re free to choose your journey and destination with us. Opt in for either of our staking trails and conclude your fate. Heedless of what category you fit in, the vision of the Thre3 connects you all.
                  </Box>
                </Box>
              </Link>
              <Box sx={{
                background: `#FFFFFF`,
                border: `3px solid #0D0D0D`,
                borderRadius: `8px`,
                padding: `24px`,
                width: {
                  sm: `48%`,
                  ss: `100%`
                }
              }} >
                <Box sx={{
                  display: `flex`,
                  alignItems: `center`,
                }} >
                  <Box sx={{ width: `40px` }} ><RaffleIcon /></Box>
                  <Box sx={{
                    ml: 4,
                    fontSize: `28px`,
                    fontWeight: `700`,
                    fontFamily: 'Gilroy',
                    color: `#0D0D0D`
                  }} >Raffles <p style={{ margin: `0`, fontSize: `14px` }} >Coming Soon</p> </Box>
                </Box>
                <Box sx={{
                  fontFamily: 'Eloquia Display',
                  color: `#0D0D0D`,
                  fontSize: `14px`,
                  marginTop: `24px`
                }} >
                  The world runs on luck, why not try yours? Grab some $DOT and get yourself an entry into the raffles hosted on our custom-made raffle site. The prizes? Time will tell.
                </Box>
              </Box>
              <Box sx={{
                background: `#FFFFFF`,
                border: `3px solid #0D0D0D`,
                borderRadius: `8px`,
                padding: `24px`,
                width: {
                  sm: `48%`,
                  ss: `100%`
                }
              }} >
                <Box sx={{
                  display: `flex`,
                  alignItems: `center`
                }} >
                  <Box style={{ width: `34px` }} ><DaoIcon /></Box>
                  <Box sx={{
                    ml: 4,
                    fontSize: `28px`,
                    fontWeight: `700`,
                    fontFamily: 'Gilroy',
                    color: `#0D0D0D`
                  }} >3DAO <p style={{ margin: `0`, fontSize: `14px` }}>Coming Soon</p> </Box>
                </Box>
                <Box sx={{
                  fontFamily: 'Eloquia Display',
                  color: `#0D0D0D`,
                  fontSize: `14px`,
                  marginTop: `24px`
                }} >
                  Participate in the decision-making affairs of the Beach. Voice your opinion for what would be the best direction for the Thre3 by using $DOT to cast your vote.
                </Box>
              </Box>
              <Box sx={{
                background: `#FFFFFF`,
                border: `3px solid #0D0D0D`,
                borderRadius: `8px`,
                padding: `24px`,
                width: {
                  sm: `48%`,
                  ss: `100%`
                }
              }} >
                <Box sx={{
                  display: `flex`,
                  alignItems: `center`
                }} >
                  <Box style={{ width: `34px` }} ><NftItemIcon /></Box>
                  <Box sx={{
                    ml: 4,
                    fontSize: `28px`,
                    fontWeight: `700`,
                    fontFamily: 'Gilroy',
                    color: `#0D0D0D`
                  }} >Gre3n Room <p style={{ margin: `0`, fontSize: `14px` }}>Coming Soon</p> </Box>
                </Box>
                <Box sx={{
                  fontFamily: 'Eloquia Display',
                  color: `#0D0D0D`,
                  fontSize: `14px`,
                  marginTop: `24px`
                }} >
                  Enhance your Thre3, enhance your vibe. Use your $DOT to give your NFT a new guise with the advent of every fresh season.
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        <Box sx={{
          display: `flex`, alignItems: `center`, justifyContent: `center`, textAlign: `center`,
          marginTop: `200px`,
          mb: 4
        }} >
          <Box component={`img`} src={'/images/icons/footer_icon.png'} />
          <Box sx={{
            fontFamily: `#000000`,
            fontSize: `18px`,
            ml: 1
          }} >2022 Thre3. All Rights Reserved.</Box>
        </Box>

      </Box>
    </>
  );
}

export default Home;