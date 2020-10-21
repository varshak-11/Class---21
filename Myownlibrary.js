function isTouching(sprite,target) {

    if(sprite.x - target.x < sprite.width/2 + target.width/2 
      && target.x - sprite.x < sprite.width/2 + target.width/2 && 
      sprite.y - target.y < sprite.height/2 + target.height/2 
      && target.y - sprite.y < sprite.height/2 + target.height/2)
      {
      
      return true;
    }
    else {
      return false;
    }
  }
  
  function bounce(sprite1,sprite2){
    if(sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2 
      && sprite2.x - sprite1.x < sprite1.width/2 + sprite2.width/2) {
        sprite1.velocityX = sprite1.velocityX * (-1)
        sprite2.velocityX = sprite2.velocityX * (-1)
      }
  }