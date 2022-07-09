import { IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({matches}) {
 const {setDrawerOpen} = useUIContext()
 return (
  <>
   <Container>
    <AppbarContainer>
     <AppbarHeader>GYMCENTER</AppbarHeader>
     <IconButton onClick={() => setDrawerOpen(true)}>
      <MenuIcon/>
     </IconButton> 
    </AppbarContainer>
   </Container>
  </>
 )
}