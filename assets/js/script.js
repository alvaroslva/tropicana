let mobileBtn = document.querySelector('#mobile_btn')
let mobileMenu = document.querySelector('#mobile_menu')
const sections = document.querySelectorAll('section')
const navItems = document.querySelectorAll('.nav-item')


mobileBtn.addEventListener('click',function(){
    mobileMenu.classList.toggle('active')
    mobileBtn.firstElementChild.classList.toggle('fa-x')   
})

