import { Typography, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import {Box} from "@mui/system";
import { Colors } from "../theme";

export const AppbarContainer = styled(Box)(() => ({
 display: 'flex',
 marginTop: 10,
 justifyContent: 'center',
 alignItems: 'center',
 padding: '2px 8px'
}))

export const AppbarHeader = styled(Typography)(() => ({
 padding: '4px',
 flexGrow: 1,
 fontSize: '2em',
 // fontFamily: "'Roboto', 'sans-serif'",
 color: Colors.primary
}))

export const MyList = styled(List)(({type}) => ({
 display: type === 'row' ? 'flex' : 'block',
 flexGrow: 2,
 justifyContent: 'center',
 alignItems: 'center',
}))

export const ActionIconsContainerMobile = styled(Box)(() => ({
 display: 'flex',
 background: Colors.shaft,
 position: 'fixed',
 bottom: 0,
 left: 0,
 width: '100%',
 alignItems: 'center',
 zIndex: 99,
 borderTop: `1px solid ${Colors.border}`
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
 flexGrow: 0,
}))
