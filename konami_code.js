const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function konami(e) {
    const key = parseInt(e.detail || e.which)
    let index = 0; 
    
    if (key == code[index]) {
      index++ 
      
      if (index == code.length) {
        alert('You got it!'); 
        
        index = 0; 
      }
      
    }else {
      index = 0; 
    }
    }

function init() {
  const body = querySelector('body')
  

  
  body.addEventListner('keydown', alert)

}