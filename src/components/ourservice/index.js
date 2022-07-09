import { Grid, useMediaQuery } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import { Box } from "@mui/system";
import {Services} from "../../data";  
import { ServiceText, ServiceTitle } from "../../styles/ourservice";
import SingleService from "./SingleService";

export default function Ourservice() {
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down('md'));
 const renderServices = Services.map(Service => (
  <Grid 
    item 
    key={Service.id} 
    display="flex" flexDirection={"column"} alignItems="center">
   <SingleService Service={Service} matches={matches} />
  </Grid>
 ))
 return (
  <>
  <Box sx={{ background: "#EDF2f4", padding: '20px'}}>

  
   <ServiceTitle variant="h4" sx={{fontWeight: 'bold'}}>Welcome to our service</ServiceTitle>
   <ServiceText variant="h6">Working out at CITIGYM will help you achieve your health and fitness goals.</ServiceText>
   <Grid 
     container 
     justifyContent={"center"} 
     sx={{margin: "20px 4px 10px 4px"}} 
     spacing={{xs: 2, md: 3}}
     >{renderServices}</Grid>
   </Box>
  </>

 )
}