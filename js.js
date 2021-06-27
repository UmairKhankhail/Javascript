burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightnav=document.querySelector('.rightnav')
navbarlist=document.querySelector('.navbarlist')

burger.addEventListener('click', ()=>{
rightnav.classList.toggle('v-class-respon');
navbarlist.classList.toggle('v-class-respon');
navbar.classList.toggle('h-nav-respon');
})

document.ready();
alert("I am javascript.");