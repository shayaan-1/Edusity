import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam possimus, ratione rem dicta excepturi alias provident a voluptatem.</p>
            <ul>
                <li><img src={mail_icon} alt="" />edusity@gmail.com</li>
                <li><img src={phone_icon} alt="" />+92 123 564 785</li>
                <li><img src={location_icon} alt="" />Florida, USA</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={10} placeholder='Enter your message here' required></textarea>
                <button type='submmit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
