import { useState} from 'react'
import './App.css'
import Bulb from './components/Bulb'

function App() {
  const [colorRed, setcolorRed] = useState("gray")
  const [colorYellow, setcolorYellow] = useState("gray")
  const [colorGreen, setcolorGreen] = useState("gray")
  const [counter, setCounter] = useState(1)

  setTimeout(function(){
         
  if( counter == 1){
    setcolorRed("red")
    setcolorYellow("gray")
   setcolorGreen("gray")
  } 
   if(counter == 2){
    setcolorRed("gray")
    setcolorYellow("yellow")
    setcolorGreen("gray")
   
  } 
   if(counter == 3){
 
    setcolorRed("gray")
    setcolorYellow("gray")
    setcolorGreen("green")
    

  } 
   
  setCounter(counter+ 1)

   if(counter >= 3){
    setCounter(1)
  }
    
  }, 2000)






  

  

 


  return (
    <div className="App">
      <Bulb color={colorRed}/>
      <Bulb color={colorYellow}/>
      <Bulb color={colorGreen}/>
    </div>
  )
}

export default App
