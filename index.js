let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let nouvil=document.querySelector('.nouvil');

window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value +'px' ;
    moon.style.top=value*3.5 +'px' ;
    mountains3.style.top=value*1.5 +'px' ;
    mountains4.style.top=value*1 +'px' ;
    river.style.top=value +'px' ;
    boat.style.top=value +'px' ;
    boat.style.left=value*2 +'px' ;
    nouvil.style.fontSize=value +'px' ;
    if(scrollY>=65){
        nouvil.style.fontSize=70+'px'
        nouvil.style.position='fixed';
    }
    if(scrollY>=470){
        nouvil.style.display='none'
    }else{
        nouvil.style.display='block'
    }
    if(scrollY>=126){
        document.querySelector('.main').style.background= 'linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background= 'linear-gradient(to top,#200016,transparent)';
    }
}

























