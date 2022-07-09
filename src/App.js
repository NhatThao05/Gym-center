import {ThemeProvider} from "@mui/system";
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Footer from "./components/footer";
import Transformation from "./components/tranformation";
import Ourservice from "./components/ourservice";

function App() {
  useEffect(() => {
    document.title = "Going to the gym"
  }, [])
  return (
    <ThemeProvider theme={theme} sx={{
      background: "#EDF2F4"
    }}>
      
        {/* appdrawer */}
        <Appbar />
        <Banner />
        <Ourservice />
        <Transformation />
        <Footer />
        
    </ThemeProvider>  
  );
}

export default App;
