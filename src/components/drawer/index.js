import { Drawer, ListItemButton, ListItemText, List, Button } from "@mui/material";
import { useUIContext } from "../../context/ui";
import {DrawerCloseButton} from '../../styles/appbar'
import CloseIcon from "@mui/icons-material/Close"
import { Colors } from "../../styles/theme";

export default function AppDrawer() {
 const {drawerOpen, setDrawerOpen} = useUIContext()
 return (
  <>
  {drawerOpen && <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
    <CloseIcon sx={{fontSize: '2.5rem', color: Colors.white}}/>
    </DrawerCloseButton>}
  <Drawer open={drawerOpen} anchor={'right'}>
   
   <List>
    <ListItemButton>
     <ListItemText>CLUB</ListItemText>
    </ListItemButton>
    <ListItemButton>
     <ListItemText>SERVICE</ListItemText>
    </ListItemButton>
    <ListItemButton>
     <ListItemText>SCHEDULE</ListItemText>
    </ListItemButton>
    <ListItemButton>
     <ListItemText>PRICE POLICY</ListItemText>
    </ListItemButton>
    <ListItemButton>
     <ListItemText>NEWS</ListItemText>
    </ListItemButton>
    <ListItemButton>
     <ListItemText>PROMOTION</ListItemText>
    </ListItemButton>
    <ListItemButton>
     <Button variant='contained' sx={{fontWeight: 'bold'}}>SIGN UP FOR A TRIAL</Button>
    </ListItemButton>
   </List>
  </Drawer>
  </>
 )
}