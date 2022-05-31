let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classlist.toggle('bx-x');
	navbar.classlist.toggle('active');
};


window.onscroll = () =>{
	menu.classlist.remove('bx-x');
	navbar.classlist.remove('active');
};


const sr = ScrollReveal ({
	distance: '400px',
	duration: 2600,
	reset: true
})

sr.reveal('.home-text',{delay:300, origin:'left'})
sr.reveal('.about,.service,.portfolio,.blog,.contact,.copyright',{delay:100, origin:'bottom'})
