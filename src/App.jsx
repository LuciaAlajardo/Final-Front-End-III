
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Theme from "./Components/Theme";
import { ContextProvider } from "./Components/utils/global.context";


function App() {

  return (
      <div className="App">
      <ContextProvider>
      <Theme>
          <Navbar />
          <Outlet/>
          <Footer/>
          </Theme>
          </ContextProvider>
          
      </div>
  );
}

export default App;
