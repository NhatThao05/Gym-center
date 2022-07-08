import { Grid, Box, Typography, ListItemText, List } from "@mui/material";
import {FooterTitle, FooterNetwork} from "../../styles/footer"
import { Colors } from "../../styles/theme";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
 return (
  <Box sx={{
   background: "#941B0C",
   color: Colors.white,
   p: {xs: 4, md: 10},
   pt: 12,
   pb: 12,
   fontSize: {xs: '12px', md: '14px'}
  }}>
   <Grid container spacing={2} justifyContent="center">
    <Grid item md={6} lg={4}>
      <FooterTitle variant="h4">gymcenter</FooterTitle>
      <Box sx={{
          mt: 4,
          color: Colors.white
      }}>
         <List>
          <ListItemText>
           <Typography lineHeight={2} variant="h6"><CallIcon sx={{mr: 1}} />1900 900 399</Typography>
          </ListItemText>
          <ListItemText>
           <Typography lineHeight={2} variant="h6"><LocationOnIcon sx={{mr: 1}} />52 Thanh Thai, Ward 12, District 10</Typography>
          </ListItemText>
          <ListItemText>
           <Typography lineHeight={2} variant="h6"><AccessTimeIcon sx={{mr: 1}} />Monday - Sunday: 6:00 - 22:00</Typography>
          </ListItemText>
         </List>
      </Box>
    </Grid>
    <Grid md={6} lg={2} sx={{
     mt: 10,
    }}>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">Payment Methods</Typography>
     </ListItemText>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">Services</Typography>
     </ListItemText>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">Price Policy</Typography>
     </ListItemText>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">Privacy Policy</Typography>
     </ListItemText>
    </Grid>
    <Grid md={6} lg={2} sx={{
     mt: 10,
    }}>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">Recruit</Typography>
     </ListItemText>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">News</Typography>
     </ListItemText>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">Contact</Typography>
     </ListItemText>
     <ListItemText>
      <Typography lineHeight={2} variant="h6">Club</Typography>
     </ListItemText>
    </Grid>
    <Grid item md={6} lg={2}>
      <FooterTitle variant="h4">socialmedia</FooterTitle>
      <Box sx={{
          mt: 4,
          color: Colors.white
      }}>
         <FacebookIcon sx={{mr: 2, fontSize: '2.5em'}} />
         <InstagramIcon sx={{mr: 2, fontSize: '2.5em'}} />
         <YouTubeIcon sx={{fontSize: '2.5em'}}/>

      </Box>
    </Grid>
   </Grid>
  </Box>
 )
}