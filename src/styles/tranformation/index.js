import styled from "@emotion/styled";
import { Typography, TextField } from "@mui/material";
import { Colors } from "../theme";


export const ListItemTitle = styled(Typography)(() => ({
 color: Colors.secondary,
 fontSize: '2rem',
 fontWeight: 'bold',
 marginBottom: 30,
}))

export const ModalImage = styled('img')(({src, theme}) => ({
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

export const SubscribeTf = styled(TextField)(() => ({
 ".MuiInputLabel-root": {
   color: Colors.secondary,
 },
 width: '200px',

 ".MuiInput-root::before": {
   border: `1px solid ${Colors.secondary}`,
 },
}));

