import Home from './Page/HomePage/Home';
import Service from './Page/ServicePage/Service';
import Team from './Page/Team/Team';
import Blog from './Page/BlogPage/Section1'
import CasePage from './Page/CasePage/Section1'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div >

    <BrowserRouter>
          <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/casepage" element={<CasePage/>}/>
        </Routes>
          <Footer/>
    </BrowserRouter>  
    
    
    </div>
  );
}

export default App;
