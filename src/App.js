import React , {useState} from 'react'

const App =() => {
  const [tempetureValue, settempetureValue] = useState(10);
  const [temperatureColor, settemperatureColor] = useState('cold');

  const increaseTemperature=()=>{
    if(tempetureValue === 30) return;
    const newTemperatureValue = tempetureValue +1;
    if(newTemperatureValue >= 15)
      settemperatureColor('hot');
    settempetureValue(newTemperatureValue);
  };
  const decreaseTemperature=()=>{
    if(tempetureValue === 0) return;
    const newTemperatureValue =tempetureValue -1;
    if(newTemperatureValue < 15)
      settemperatureColor('cold');
    settempetureValue(newTemperatureValue);
  };
  return(
    <div className='app-container'>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {tempetureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() =>increaseTemperature()}>+</button>
        <button onClick={() =>decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}

export default App;
