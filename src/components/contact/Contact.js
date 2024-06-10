import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="top">
                <h1>Contact</h1>
            </div>
       
<form>
    <div>
        <label>Name</label>
        <input type="text" placeholder='Enter your name'/>
        <label>Email</label>
        <input type="text" placeholder='Enter your email'/>
        <label>Message</label>
        <textarea cols={30} rows={15} placeholder='Enter your message'></textarea>
    </div>
    <div className="bottom"><button className="btn btn-dark">Submitt</button></div>
</form>
    </div>
    </div>
  )
}

export default Contact
