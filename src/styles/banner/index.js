import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";
import { Colors } from "../theme";

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
  marginTop: 15,
  marginBottom: 30,
  marginLeft: "auto",
  marginRight: "auto",
}))