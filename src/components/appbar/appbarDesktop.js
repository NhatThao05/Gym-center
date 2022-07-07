import { ListItemText } from "@mui/material";
import { Container } from "@mui/system";
import { AppbarHeader, AppbarContainer, MyList, ActionIconsContainerMobile, ActionIconsContainerDesktop} from "../../styles/appbar";
import { Button } from '@mui/material';

export default function AppbarDesktop({matches}) {
 const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
 return (
  <>
  <Component>
   <Container maxWidth="xl">
    <AppbarContainer>
      <AppbarHeader>GYMCENTER</AppbarHeader>
      <MyList type="row">
       <ListItemText primary="CLUB"/>
       <ListItemText primary="SERVICE"/>
       <ListItemText primary="SCHEDULE"/>
       <ListItemText primary="PRICE POLICY"/>
       <ListItemText primary="NEWS"/>
       <ListItemText primary="PROMOTION"/>
      </MyList>
      <Button variant='contained' sx={{
       fontWeight: 'bold'
      }}>SIGN UP FOR A TRIAL</Button>
    </AppbarContainer>
   </Container>
  </Component>
   
  </>
 )
}