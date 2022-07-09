import {styled} from "@mui/system"
import {Colors} from "../theme";
import { IconButton, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {slideInBottom, slideInRight} from "../../animation"

export const Ourservice = styled(Box)(({theme}) => ({
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'column',
 [theme.breakpoints.up('md')]: {
  position: 'relative',
 },
}));

export const ServiceImage = styled('img')(({src, theme}) => ({
 src: `url(${src})`,
 width: '400px',
 height: '400px',
 // width:'100%',
 padding: '10px',
 // background: Colors.light_gray,
 [theme.breakpoints.down('md')]: {
  width: '80%',
  padding: '24px',
 }
}))

export const ServiceActionButton = styled(IconButton)(() => ({
 background: Colors.white,
 margin: 4,
}));

export const ServiceFavButton = styled(ServiceActionButton)(({ isFav, theme }) => ({
 color: isFav ? Colors.primary : Colors.light,  
 [theme.breakpoints.up("md")]: {
   position: "absolute",
   right: 0,
   top: 0,
 },
}));

export const ServiceAddToCart = styled(Button)(({show, theme}) => ({
 width: '120px',
 fontSize: '12px',
 [theme.breakpoints.up('md')]: {
  position: 'absolute',
  bottom: '2%',
  width: '300px',
  padding: '10px 5px',
  animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
 },
 background: Colors.secondary,
 opacity: 0.9,
}))

export const ServiceMetaWrapper = styled(Box)(({theme}) => ({
 padding: 4,
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
}));

export const ServiceActionsWrapper = styled(Box)(({ show, theme }) => ({ 
 [theme.breakpoints.up("md")]: {
   display: show ? 'visible' : 'none',
   position: "absolute",
   right: 0,
   top: '20%',
   animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
 }
}));

export const ServiceTitle = styled(Typography)(() => ({
 display: 'flex',
 width: '100%',
 color: Colors.secondary,
 justifyContent: 'center',
 alignItems: 'center',
 paddingTop: '40px',
}))

export const ServiceText = styled(Typography)(() => ({
 display: 'flex',
 width: '100%',
 color: Colors.secondary,
 justifyContent: 'center',
 alignItems: 'center',
}))