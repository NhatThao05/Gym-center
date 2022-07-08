import { Typography, Box, Container } from "@mui/material";
import {FooterLine} from "../../styles/underFooter"

export default function Underfooter() {
 return (
  <Box sx={{
    background: "#621708",
   }}>

  <FooterLine >
   <Container>
    <Typography variant="h6">Copyright 2022 @ CITIGYM. All Right Reserved</Typography>
   </Container>
  </FooterLine>
  </Box>

 )
}