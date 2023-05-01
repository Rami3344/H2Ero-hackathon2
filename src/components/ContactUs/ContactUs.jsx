import React from 'react'

function ContactUs() {
  return (
    <div className='contact'>
        <div className='cont1'>
        <form action="">
        <div>
            <h1>Contact Us</h1>
            <ul>
                <li><span>FullName</span><input type="text" /></li>
                <li><span>Email</span><input type="text" /></li>
                <li><span>PhoneNumber</span><input type="text" /></li>
                <li><button>Submit</button></li>
            </ul>
            </div>
        </form>
        </div>

    </div>
  )
}

export default ContactUs