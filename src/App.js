import './App.css';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Components/Footer'

import Header123 from './Components/Header123';
import Navbarlinetwo from './Components/Navbarlinetwo';


function App() {
  return (
    <div className="App">
      <Header123 />
      <Navbarlinetwo />
      <AllRoutes />      
      <Footer />
    </div>
  );
}

export default App;
