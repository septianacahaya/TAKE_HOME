let poin = Array.from(document.getElementsByClassName('skor'));
poin.forEach((e)=>{
    e.addEventListener('mousedown', event => {
        event.preventDefault();
        mouseX = event.clientX;
        mouseY = event.clientY;
    }, false);
    e.addEventListener('mouseup', event => {
        event.preventDefault();
        topX= event.clientX;
        topY = event.clientY;
        mouseSwipped();
      }, false);
    e.addEventListener('touchstart', event=> {
      tekanX = event.changedTouches[0].screenX;
      tekanY = event.changedTouches[0].screenY;
    }, false);
    e.addEventListener('touchend', event=> {
      pressX = event.changedTouches[0].screenX;
      pressY = event.changedTouches[0].screenY;
      swippe();
    }, false);

      
    function mouseSwipped() {
        let poin = parseInt(e.textContent);
        if (Math.abs(topX- mouseX) > 0 || Math.abs(topY - mouseY) > 0) {
            if(topY < mouseY && poin < 25) {
                let hasil = poin + 1;
                if (hasil < 10) {
                  e.innerHTML = `0${hasil}`;
                } else {
                  e.innerHTML = hasil;
                }
              }
              if(topY > mouseY && poin > 0) {
                let hasil = poin - 1;
                if (hasil < 10) {
                  e.innerHTML = `0${hasil}`;
                } else {
                  e.innerHTML = hasil;
                }
              } 
          }
    }
    function swippe() {
        let poin = parseInt(e.textContent);
        if(pressY < tekanY && poin<25) {
            let hasil = poin+1;
            if(hasil<10){
                e.innerHTML = `0${hasil}`;
            }
            else{
                e.innerHTML = hasil;
            }
        }       
        if(pressY > tekanY && poin>0) {  
            let hasil = poin-1;
            if(hasil<10){
                e.innerHTML = `0${hasil}`;
            }
            else{
            e.innerHTML = hasil;
            }
        }
    }
})
