import './App.css';
import Toast from './components/content/theToast';
import Navbar from './components/navbar/theNavbar';
import Content from './components/content/theContent';
import Footer from './components/footer/theFooter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return(
  <>
    <Navbar />
    <Toast />
    <Content/>
    <Footer/>
  </>
  );
}

export default App;
