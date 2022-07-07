import {ThemeProvider} from "@mui/system";
import { useEffect } from 'react';
import Appbar from './components/appbar';
import theme from './styles/theme';

function App() {
  useEffect(() => {
    document.title = "Going to the gym"
  }, [])
  return (
    <ThemeProvider theme={theme} sx={{
      background: "#EDF2F4"
    }}>
      {/* <Box sx={{
        background: "#EDF2F4"
      }}> */}
        {/* 
        Appbar
        banner
        promotion
        title
        products
        footer
        searchBox
        appdrawer
      */}
        <Appbar />

        
      {/* </Box>   */}
    </ThemeProvider>  
  );
}

export default App;
