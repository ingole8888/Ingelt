import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Icon from '../Images/InGelt-white.png'

const Navbar = () => {
  return (
    <Box style={{backgroundColor:"#051C45", height:"7.5rem"}}>
      <Image src={Icon} style={{paddingTop:"0.9rem",marginLeft:"8rem",height:"5.6rem", width:"6.25rem"}}/>
    </Box>
  )
}

export default Navbar