import React from 'react'
import './main-page.css'
function MgsHeader() {
  return (
      <div className="mgsHeader">
          <div className="contectProfile">
                <div className="contectUserDP"></div>
                <div className="contectUserName1">
                 Khikhi<br />
                    <span className='phoneNum'>8837300860</span>
                </div>
            </div>
            <div className="contectStatus">
                <span className='statusDisplay'>World of Creative Desginer</span><br />
                <span className='emailDisplay'>khikhi@gmail.com</span><br />
                <span className='activeNotifiyer'>Active</span>
            </div>
            <div className="contectCall">
                <button className='callButton'>Call</button><br />
                <button className='vCallButton'>Video Call</button>
            </div>
    </div>
  )
}

export default MgsHeader