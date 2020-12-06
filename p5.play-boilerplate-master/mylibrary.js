function bounceoff(mr, fr) {
    if (mr.x - fr.x < mr.width/2 + fr.width/2 &&
      fr.x - mr.x < mr.width/2 + fr.width/2 ) {
        mr.velocityX = mr.velocityX *(-1) ;
        fr.velocityX = fr.velocityX *(-1) ;
      }
    else if ( mr.y - fr.y < mr.height/2 + fr.height/2 &&
        fr.y - mr.y < mr.height/2 + fr.height/2)  {
          mr.velocityY = mr.velocityY *(-1) ;
          fr.velocityY = fr.velocityY *(-1) ;
        }
  }
  function istouching(b1,b2) {
    if (b1.x - b2.x < b1.width/2 + b2.width/2 &&
      b2.x - b1.x < b1.width/2 + b2.width/2 &&
      b1.y - b2.y < b1.height/2 + b2.height/2 &&
      b2.y - b1.y < b1.height/2 + b2.height/2) {
    return true;    
      }
      else {
     return false;
      }
  }