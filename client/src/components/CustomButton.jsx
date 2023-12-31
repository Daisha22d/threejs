import React from 'react'; 
import state from '../store';
import { useSnapshot } from 'valtio';

const CustomButton = ({ type, title, customeStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff'
      }
    }
  }
  return (
    <button 
    className={`px-2 py-1.5 flex-1 rounded-md ${customeStyles}`}
    style={generateStyle(type)}
    onClick = {handleClick} >
      {title}
    </button>
  )
}

export default CustomButton