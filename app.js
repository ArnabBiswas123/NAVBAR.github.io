var navToggle=document.querySelector('.nav-toggle')
var links=document.querySelector('.links')
navToggle.addEventListener('click',function(){
    // if(links.classList.contains('show-links'))
    // links.classList.remove('show-links')
    // else
    // links.classList.add('show-links')
    links.classList.toggle('show-links')
})