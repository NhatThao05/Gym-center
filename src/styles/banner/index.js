import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";
import { Colors } from "../theme";

// export const BannerContainer = styled(Box)(({theme}) => ({
//  display: 'flex',
//  justifyContent: 'center',
//  width: '100%',
//  height: '100%',
//  padding: '0px 0px',
//  background: Colors.light_gray,
//  [theme.breakpoints.down('sm')]: {
//   flexDirection: 'column',
//   alignItems: 'center'
//  }
// }))

export const BannerImage = styled('img')(({src, theme}) => ({
 src: `url(${src})`,
 width: '100%',
 [theme.breakpoints.down('md')]: {
  width: '100%'
 },
 [theme.breakpoints.down('sm')]: {
  width: '100%',
  height: '100%',
 },
}))

export const BannerUnderline = styled(Box)(() => ({
 height: "0.25rem",
  width: "20rem",
  background: Colors.primary,
  marginTop: 10,
  marginBottom: 18,
  marginLeft: "auto",
  marginRight: "auto",
}))