import { IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppbarMobile({matches}) {
 return (
  <>
   <Container>
    <AppbarContainer>
     <AppbarHeader>GYMCENTER</AppbarHeader>
     <IconButton>
      <MenuIcon/>
     </IconButton> 
    </AppbarContainer>
   </Container>
  </>
 )
}