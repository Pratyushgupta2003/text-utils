
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Accordion from './component/Accordion';
import { useState } from "react";
import Alert from './component/Alert';
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");
  const [alert , setalert ]= useState(null);

  const removeclass =()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
  }

  const togglemode =(cls)=>{
    removeclass();
    document.body.classList.add('bg-'+cls);

    if(mode === 'light'){
      setmode("dark");
      // document.body.style.backgroundColor='rgb(29, 27, 74);'
      showalert("Darkmode is enabled" , "success")
    }
    else{
      setmode("light");
      // document.body.style.backgroundColor='white'
      showalert("Lightmode is enabled" , "success")
    }
    }
  
  const showalert =(msg , type)=>{
    setalert({
      message:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  return (
    <>
{/* 
      <Navbar title="TextUtil" home="Home" about="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <TextForm mode={mode} showalert={showalert} alert={alert} />
   */}
      <BrowserRouter>
      <Navbar title="TextUtil" home="Home" about="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
     
      <Routes>
        <Route path="/" element={<TextForm mode={mode} showalert={showalert} alert={alert}/>} />
        <Route path="/home" element={<TextForm mode={mode} showalert={showalert} alert={alert}/>} />
          <Route path='/about' element={<Accordion/>}></Route>
        
      </Routes>
    </BrowserRouter>

</>
  );
 
  }
export default App;
