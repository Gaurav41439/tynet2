import {React , useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import routes from './pages';
import '../src/assets/fonts/font-awesome.css'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    }); 
  }, []);
  return (
    <>

    <Header />

    <Routes>

        {
            routes.map((data,idx) => (
                <Route key={idx} path={data.path} element={data.component} exact />
            ))
        }

    </Routes>

    <Footer />
</>
  );
}

export default App;