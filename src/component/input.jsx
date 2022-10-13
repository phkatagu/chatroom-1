import React from 'react'
import './input.css'
function InputMgses() {
  return (
    <div className='inputPlace'>
      <input type="text" id='typingText' className="typingSpace" placeholder='Type somthing...'
      style={{width:720, height: 50}}
      />
      <div className="attachment">
        <input type="file" />
        <button>Send</button>

      </div>
        
    </div>
  )
}

export default InputMgses;