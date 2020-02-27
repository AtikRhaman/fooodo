import React from "react";
import './footer.css'
import image from '../footer/googlePlay.png'
const Footer = () => (
  <div className = 'footer'>
    <div className = 'footer__top'>
      <div className='footer__top__wrapper'>
        <div className='footer__top__wrapper__text'>
          <h2> Get the food at your fingertip</h2>
          <p>Nullam elementum facilisis risus, in lobortis massa elementum vel. Aenean at porttitor nisl. Etiam facilisis ac dolor eu molestie. Aenean ut venenatis leo, a pellentesque erat. Cras eu sollicitudin lorem, nec scelerisque mi. Pellentesque sem nisi, aliquam vitae laoreet sed, egestas ut tortor. Suspendisse ac augue volutpat ante lacinia sollicitudin.</p>
        </div>
        <div className='footer__top__wrapper__logo'>
          <img src = {image} alt=''/>
        </div>
      </div>
    </div>

    <div className = 'footer__bottom'>
      <div className = 'footer__bottom__wrapper'>  
         <p> Foodo</p>
         <p>2019 Foodo|Techfinna Oy <br/> hello@foodo,bd.com </p>
         <div className = 'social-icon'>
            <a href="https://www.facebook.com/" class="fa fa-facebook">''</a>
            <a href="https://www.instagram.com/" class="fa fa-twitter">''</a>
            <a href="https://www.instagram.com/" class="fa fa-google">''</a>
            <a href="https://www.instagram.com/" class="fa fa-linkedin">''</a>
            <a href="https://www.instagram.com/" class="fa fa-youtube">''</a>
            <a href="https://www.instagram.com/" class="fa fa-instagram">''</a>
         </div>
      </div>
    </div>
</div>
);
export default Footer;
