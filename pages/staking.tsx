import React, { useEffect } from "react";
import Link from 'next/link';

require('@solana/wallet-adapter-react-ui/styles.css'); // Default styles that can be overridden by your app

import Box from "@mui/material/Box";


const Stake = () => {

  return (
    <>
      <Box
        component={`section`}
        sx={{
          width: `100%`,
          position: `relative`,
          display: {
            sm: `flex`,
            ss: `block`
          }
        }}
      >

        <Box sx={{
          display: {
            sm: `flex`,
            ss: `block`
          },
          position: `relative`,
          marginLeft: {
            tg: `353px`,
            sm: `24%`,
            ss: `0px`
          },
          width: `100%`
        }} >
          <Box
            sx={{
              width: {
                ss: `100%`,
                sm: `50%`
              },
              background: `url('/images/PillsBG.png')`,
              minHeight: `100vh`,
              borderRight: {
                sm: `2px solid black`,
                ss: `none`
              },
              borderBottom: {
                sm: `none`,
                ss: `2px solid black`,
              },
              backgroundSize: `cover`,
              backgroundPosition: `bottom`,
              py: {
                sm: 0,
                ss: `24px`
              }
            }}
          >
            <Box
            >
              <Box sx={{
                padding: `0px 5%`
              }} >

                <Box sx={{
                  marginTop: {
                    sm: `196px`,
                    ss: `0`
                  },
                  padding: {
                    sm: `0 12px`,
                    ss: `0`
                  }
                }} >

                  <Box sx={{
                    background: `#FFFFFF`,
                    padding: `16px 4%`,
                    border: `none`,
                    top: `20px`,
                    textAlign: `center`,
                    display: {
                      sm: `none`,
                      ss: `block`
                    },
                    // mt: 4.5
                  }} >
                    <Box
                      sx={{
                        fontFamily: 'Gilroy Extra',
                        fontSize: {
                          xs: `32px`,
                          ss: `20px`
                        },
                        fontWeight: `700`
                      }}
                    >
                      SELECT YOUR STAKING WAY
                    </Box>
                    <Box
                      sx={{
                        fontFamily: 'Gotham',
                        fontSize: {
                          xs: `30px`,
                          ss: `18px`
                        },
                        textTransform: `uppercase`
                      }}
                    >
                      Choose your reward!
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      fontWeight: `700 !important`,
                      fontFamily: 'Gilroy Extra',
                      fontSize: {
                        tg: `45px`,
                        ss: `30px`,
                      },
                      paddingTop: {
                        sm: 0,
                        ss: `32px`
                      },
                      textAlign: {
                        sm: `unset`,
                        ss: `center`
                      }
                    }}
                  >
                    WAY TO BUDDI3S
                  </Box>
                  <Box sx={{
                    display: `flex`,
                    alignItems: `center`,
                    ml: 1,
                    mt: {
                      sm: 0,
                      ss: 3
                    }
                    // justifyContent: {
                    //   sm: `unset`,
                    //   ss: `center`
                    // }
                  }} >
                    <Box sx={{
                      width: `4px`,
                      height: `4px`,
                      borderRadius: `50%`,
                      background: `black`
                    }} />
                    <Box
                      sx={{
                        color: `#0D0D0D`,
                        fontFamily: `Eloquia Display`,
                        fontSize: `14px`,
                        ml: 2,
                        textAlign: {
                          sm: `unset`,
                          ss: `center`
                        }
                      }}
                    >30 days non-custodial lock-in.</Box>
                  </Box>
                  <Box sx={{
                    display: `flex`,
                    alignItems: `center`,
                    ml: 1,
                    // justifyContent: {
                    //   sm: `unset`,
                    //   ss: `center`
                    // }
                  }} >
                    <Box sx={{
                      width: `4px`,
                      height: `4px`,
                      borderRadius: `50%`,
                      background: `black`
                    }} />
                    <Box
                      sx={{
                        color: `#0D0D0D`,
                        fontFamily: `Eloquia Display`,
                        fontSize: `14px`,
                        ml: 2,
                        textAlign: {
                          sm: `unset`,
                          ss: `center`
                        }
                      }}
                    >Get your thre3 character a Buddi3.</Box>
                  </Box>
                </Box>


              </Box>

              <Box sx={{
                marginTop: {
                  sm: `98px`,
                  ss: `75px`
                },
                padding: `0 48px`,
                textAlign: `center`,
                display: `flex`,
                flexDirection: `column`,
                gap: `20px`
              }} >

                <Box sx={{
                  background: `#F8D8B0`,
                  padding: `24px 36px`,
                }} >
                  <Box
                    sx={{
                      fontFamily: 'Gilroy Extra ',
                      fontWeight: `800 !important`,
                      color: `#121212`,
                      fontSize: `20px`,

                    }}
                  >1. CONNECT WALLET</Box>
                  <Box sx={{
                    // fontFamily: 'Gilroy',
                    fontWeight: `300`,
                    color: `#121212`,
                    fontSize: `12px`,

                  }}>Select the wallet where your thre3 resides.</Box>
                </Box>

                <Box sx={{
                  background: `#F8D8B0`,
                  padding: `24px 36px`,
                }} >
                  <Box
                    sx={{
                      fontFamily: 'Gilroy Extra ',
                      fontWeight: `800 !important`,
                      color: `#121212`,
                      fontSize: `20px`,

                    }}
                  > 2. STAKE YOUR NFT</Box>
                  <Box sx={{
                    // fontFamily: 'Gilroy',
                    fontWeight: `300 !important`,
                    color: `#121212`,
                    fontSize: `12px`,

                  }}>30-days lock-in period. Don’t move/list your NFT.
                  </Box>
                </Box>

                <Box sx={{
                  background: `#F8D8B0`,
                  padding: `24px 36px`,
                }} >
                  <Box
                    sx={{
                      fontFamily: 'Gilroy Extra ',
                      fontWeight: `800 !important`,
                      color: `#121212`,
                      fontSize: `20px`,

                    }}
                  > 3. CLAIM YOUR REWARDS</Box>
                  <Box sx={{
                    // fontFamily: 'Gilroy',
                    fontWeight: `300 !important`,
                    color: `#121212`,
                    fontSize: `12px`,

                  }}>Come back to pickup your <span style={{
                    fontFamily: `Gilroy`,
                    fontWeight: 700
                  }} >BUDDI3</span>.
                  </Box>
                </Box>


              </Box>
              <Link href="/staking/nft" >
                <Box sx={{
                  fontFamily: 'Gilroy Extra',
                  background: `#F8D8B0`,
                  textAlign: `center`,
                  fontSize: {
                    tg: `30px`,
                    sm: `24px`
                  },
                  fontWeight: `700`,
                  margin: {
                    sm: `168px 24px`,
                    ss: `88px 24px`
                  },
                  padding: `24px 36px`,
                  borderRadius: `25px`,
                  border: `5px solid black`,
                  '&:hover': {
                    cursor: `pointer`
                  }
                }} >
                  CHOOSE THIS WAY
                </Box>
              </Link>
            </Box>

          </Box>

          <Box
            sx={{
              width: {
                ss: `100%`,
                sm: `50%`
              },
              background: `url('/images/DotBG.png')`,
              minHeight: `100vh`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              backgroundPosition: `bottom`,
              paddingBottom: {
                sm: 0,
                ss: `24px`
              }
            }}
          >
            <Box sx={{
              // marginLeft: {
              //   sm: `353px`,
              //   ss: `0px`
              // },
            }} >
              <Box sx={{

                padding: `0px 5%`
              }} >

                <Box sx={{
                  marginTop: {
                    sm: `196px`,
                    ss: `0px`
                  },
                  padding: {
                    sm: `0 4%`,
                    ss: `0 12px`
                  }
                }} >
                  <Box
                    sx={{
                      fontWeight: `700 !important`,
                      fontFamily: 'Gilroy Extra ',
                      fontSize: {
                        tg: `45px`,
                        sm: `32px`,
                        ss: `30px`
                      },
                      paddingTop: {
                        sm: 0,
                        ss: `56px`
                      },
                      textAlign: {
                        sm: `unset`,
                        ss: `center`
                      }
                    }}
                  >
                    WAY TO $DOT
                  </Box>
                  <Box sx={{
                    display: `flex`,
                    alignItems: `center`,
                    ml: 1,
                    // justifyContent: {
                    //   sm: `unset`,
                    //   ss: `center`
                    // }
                  }} >
                    <Box sx={{
                      width: `4px`,
                      height: `4px`,
                      borderRadius: `50%`,
                      background: `black`
                    }} />
                    <Box
                      sx={{
                        color: `#0D0D0D`,
                        fontFamily: `Eloquia Display`,
                        fontSize: `14px`,
                        ml: 2,
                        mt: {
                          sm: 0,
                          ss: `24px`
                        }
                      }}
                    >30 days non-custodial Staking Period</Box>
                  </Box>
                  <Box sx={{
                    display: `flex`,
                    alignItems: `center`,
                    ml: 1,
                    // justifyContent: {
                    //   sm: `unset`,
                    //   ss: `center`
                    // }
                  }} >
                    <Box sx={{
                      width: `4px`,
                      height: `4px`,
                      borderRadius: `50%`,
                      background: `black`
                    }} />
                    <Box
                      sx={{
                        color: `#0D0D0D`,
                        fontFamily: `Eloquia Display`,
                        fontSize: `14px`,
                        ml: 2
                      }}
                    >Daily yield of 3 $DOT Claimable in</Box>
                  </Box>
                  <Box sx={{
                    display: `flex`,
                    alignItems: `center`,
                    ml: 1,
                    // justifyContent: {
                    //   sm: `unset`,
                    //   ss: `center`
                    // }
                  }} >
                    <Box sx={{
                      width: `4px`,
                      height: `4px`,
                      borderRadius: `50%`,
                      background: `black`
                    }} />
                    <Box
                      sx={{
                        color: `#0D0D0D`,
                        fontFamily: `Eloquia Display`,
                        fontSize: `14px`,
                        ml: 2
                      }}
                    >Claimable in two stages of 15 days each.</Box>
                  </Box>
                </Box>


              </Box>

              <Box sx={{
                marginTop: `73px`,
                padding: `0 48px`,
                textAlign: `center`,
                display: `flex`,
                flexDirection: `column`,
                gap: `20px`
              }} >

                <Box sx={{
                  background: `#F8D8B0`,
                  padding: `24px 36px`,
                }} >
                  <Box
                    sx={{
                      fontFamily: 'Gilroy Extra ',
                      fontWeight: `800 !important`,
                      color: `#121212`,
                      fontSize: `20px`,

                    }}
                  >1. CONNECT WALLET</Box>
                  <Box sx={{
                    // fontFamily: 'Gilroy',
                    fontWeight: `300 !important`,
                    color: `#121212`,
                    fontSize: `12px`,

                  }}>Select the wallet where your thre3 resides.</Box>
                </Box>

                <Box sx={{
                  background: `#F8D8B0`,
                  padding: `24px 36px`,
                }} >
                  <Box
                    sx={{
                      fontFamily: 'Gilroy Extra ',
                      fontWeight: `800 !important`,
                      color: `#121212`,
                      fontSize: `20px`,

                    }}
                  > 2. STAKE YOUR NFT</Box>
                  <Box sx={{
                    // fontFamily: 'Gilroy',
                    fontWeight: `300 !important`,
                    color: `#121212`,
                    fontSize: `12px`,

                  }}>15-days lock-in period. Don’t move/list your NFT.
                  </Box>
                </Box>

                <Box sx={{
                  background: `#F8D8B0`,
                  padding: `24px 36px`,
                }} >
                  <Box
                    sx={{
                      fontFamily: 'Gilroy Extra ',
                      fontWeight: `800 !important`,
                      color: `#121212`,
                      fontSize: `20px`,

                    }}
                  > 3. CLAIM YOUR REWARDS</Box>
                  <Box sx={{
                    // fontFamily: 'Gilroy',
                    fontWeight: `300 !important`,
                    color: `#121212`,
                    fontSize: `12px`,

                  }}>Come back to pickup your <span style={{
                    fontFamily: `Gilroy`,
                    fontWeight: 700
                  }} >$DOT.</span>.
                  </Box>
                </Box>


              </Box>
              <Link href="/staking/coin" >
                <Box sx={{
                  fontFamily: 'Gilroy Extra',
                  background: `#F8D8B0`,
                  textAlign: `center`,
                  fontSize: {
                    tg: `30px`,
                    sm: `24px`
                  },
                  fontWeight: `700`,
                  margin: {
                    sm: `168px 24px`,
                    ss: `88px 24px`
                  },
                  padding: `24px 36px`,
                  borderRadius: `25px`,
                  border: `5px solid black`,
                  '&:hover': {
                    cursor: `pointer`
                  }
                }} >
                  CHOOSE THIS WAY
                </Box>
              </Link>
            </Box>
          </Box>

          <Box sx={{
            background: `#FFFFFF`,
            padding: `16px 4%`,
            border: `none`,
            position: `absolute`,
            top: `20px`,
            left: `50%`,
            transform: `translate(-50%, 11px)`,
            textAlign: `center`,
            display: {
              sm: `block`,
              ss: `none`
            }
          }} >
            <Box
              sx={{
                fontFamily: 'Gilroy Extra',
                fontSize: {
                  tg: `26px`,
                  md: `22px`,
                  sm: `18px`,
                },
                fontWeight: `700`
              }}
            >
              SELECT YOUR STAKING WAY
            </Box>
            <Box
              sx={{
                fontFamily: 'Gotham',
                fontSize: {
                  tg: `20px`,
                  md: `18px`,
                  sm: `16px`,
                },
                textTransform: `uppercase`
              }}
            >
              Choose your reward!
            </Box>
          </Box>
        </Box>



      </Box>
      {/*  */}
    </>
  );
}

export default Stake;