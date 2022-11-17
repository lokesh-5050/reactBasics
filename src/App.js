import '../src/styles/App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title = "LokeshApp" aboutText="About Us" ></Navbar>
    <Textform heading="Enter texts to analyize"></Textform>
    
    </>
  );
} 

export default App;
