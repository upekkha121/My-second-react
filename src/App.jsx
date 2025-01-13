import { useState } from 'react';
import './App.css';
// import Button from './components/buttons';
import { sculptureList } from './js/data';

function App() {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  let data = sculptureList[currentIndex];
  console.log(data);

  return (
    <div className='w-screen h-screen'>
      {/* <h2 className='text-[70px] text-center text-green-400 font-bold'>HelloWorld</h2>
      <Button text={"Click me"}/> */}
      <div className='w-full h-full flex items-center justify-center'>
        
      </div>

    </div>
  )
}

export default App
