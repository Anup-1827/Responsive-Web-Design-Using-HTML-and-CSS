const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

const header = document.querySelector('.header')
document.addEventListener('scroll', ()=>{
	let scroll_position = window.scrollY;
	
	if(scroll_position >150){
		header.style.backgroundColor = "#29323c";
	}
	else{
		header.style.backgroundColor = "transparent";

	}
})