import React from 'react'
import { MdAutoDelete } from "react-icons/md"; 
/*For add icons instead of copying the url
    we can import them in this way</> but we
    must see how appears in the react-icons page
  */
const Homeworks = () => {
  return (
    <div>
       <li>
            <span >
                <label htmlFor='' className='realized-homeworks'></label>
            </span>
            <Update/>
            <button className='deleted-homeworks'><MdAutoDelete /></button>
        
        </li>
      
    </div>
  )
}

export default Homeworks
