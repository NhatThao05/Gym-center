import {ThemeProvider} from "@mui/system";
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Footer from "./components/footer";
// import UnderFooter from "./components/underFooter";
import Transformation from "./components/tranformation";

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
        title
        products
        footer
        appdrawer
      */}
        <Appbar />
        <Banner />
        <Transformation />

        <Footer />
        {/* <UnderFooter /> */}
        
    </ThemeProvider>  
  );
}

export default App;
