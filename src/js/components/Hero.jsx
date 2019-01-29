import React, { Component } from 'react';
import $ from "jquery";
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  6000);
class Hero extends Component {
    
    render() {
        return (
            
                <div id="slideshow">
   <div>
   <img src="./images/Hero/Hero1.jpg"  width="100%" height="640px"/>
   </div>
   <div>
     <img src="./images/Hero/Hero2.jpg"  width="100%" height="640px"/>
   </div>
   <div>
   <img src="./images/Hero/Hero3.jpg"  width="100%" height="640px"/>
   </div>
</div>


            
        );
    }
}
 export default Hero;

