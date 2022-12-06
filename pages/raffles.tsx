import { Box } from "@mui/material"

const Raffles = () => {
  return (
    <Box sx={{
      position: `relative`,
      minHeight: `100vh`,
      marginLeft: {
        sm: `353px`,
        ss: 0
      }
    }} >
      <Box sx={{
        width: `100%`,
        padding: {
          sm: 0,
          ss: `0 24px`
        },
        position: `absolute`,
        left: `50%`,
        // top: `50%`,
        transform: `translate(-50%,60px)`,
        textAlign: `center`
      }} >
        <Box sx={{
          fontSize: {
            sm: `60px`,
            ss: `30px`
          },
          fontWeight: 800,
          textTransform: `uppercase`,
          textAlign: `center`
        }} >Coming Soon</Box>
        <Box
          component={`img`}
          src='images/comingSoon.png'
          sx={{
            width: {
              sm: `650px`,
              ss: `100%`
            },
            margin: {
              sm: `15px 30px`,
              ss: `24px 0`
            }
          }}
        />
        <Box
          sx={{
            fontFamily: `Eloquia Display`,
            fontSize: {
              sm: `42px`,
              ss: `20px`
            },
            textAlign: `center`
          }}
        >STAY TUNED, IT'S COMING SOON.
        </Box>

      </Box>
      <Box sx={{
        width: `100%`,
        textAlign: `center`,
        position: `absolute`,
        bottom: `20px`,
        fontSize: `18px`,
        fontWeight: 500,
        left: `50%`,
        transform: `translate(-50%,10px)`
      }} >
        Ⓒ  {new Date().getFullYear()} Thre3. All Rights Reserved.
      </Box>
    </Box>
  )
}
export default Raffles