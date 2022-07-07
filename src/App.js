import {ThemeProvider} from "@mui/system";
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Products from "./components/products";

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
        <Banner />
        <Products />

        
      {/* </Box>   */}
    </ThemeProvider>  
  );
}

export default App;
