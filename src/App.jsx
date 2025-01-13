import { useState } from 'react';
import './App.css';
// import Button from './components/buttons';
import { sculptureList } from './js/data';

function App() {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  let data = sculptureList[currentIndex];
  console.log(data);

  return (
    <div className='h-[100vh]'>
      {/* <h2 className='text-[70px] text-center text-green-400 font-bold'>HelloWorld</h2>
      <Button text={"Click me"}/> */}
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[500px] min-h-[400px] bg-blue-100 px-[30px] py-[20px] rounded-[5px] shadow-sm'>
          <div className='font-semibold text-[#333333] text-[24px] text-start'>{data.name}</div>
          <div>
              <img src={data.url} alt={data.alt} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
