import { Typography } from "@mui/material";
import {styled} from "@mui/system";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
 marginBottom: "1em", 
 color: Colors.white,
 display: 'flex',
 width: '50%',
 textTransform: "uppercase",
}))
