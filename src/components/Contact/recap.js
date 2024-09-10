import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recapctha = () => {
  const [isRecaptchaChecked, setRecaptchaChecked] = useState(false);
  const captcha = useRef(null)
  const inputValue = useRef(null)

  const handleRecap=(value)=>{
    console.log(captcha.current.getValue());
    if(captcha.current.getValue()){
      setRecaptchaChecked(!!value);
    }
  }
  
  return(
      <>
        <ReCAPTCHA
        ref={captcha}
        sitekey='6LcL5DwqAAAAAFI6oJ0ZTPK-eiWe6F8mudOqx0jl'
        onChange={handleRecap}
        />
        <input ref={inputValue} placeholder='Your message'/>
        <button type='submit' disabled={!isRecaptchaChecked}>Send message</button>
      </>
  )
}

export default Recapctha;
