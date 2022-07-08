import {ThemeProvider} from "@mui/system";
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    document.title = "Going to the gym"
  }, [])
  return (
    <ThemeProvider theme={theme} sx={{
      background: "#EDF2F4"
    }}>
      
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
        <Footer />
        
    </ThemeProvider>  
  );
}

export default App;
