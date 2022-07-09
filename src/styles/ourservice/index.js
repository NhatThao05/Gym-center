import {styled} from "@mui/system"
import {Colors} from "../theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

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
 padding: '10px',
 [theme.breakpoints.down('md')]: {
  width: '80%',
  padding: '24px',
 }
}))


export const ServiceMetaWrapper = styled(Box)(({theme}) => ({
 padding: 4,
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
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