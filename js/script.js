const header = document.querySelector("header");
 
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:100, origin:'bottom'})


function sendEmail(event) {
	event.preventDefault(); // Prevent the default form submission

	// Get the form data
	var email = document.getElementById("email").value;

	// Construct the mailto URL with the form data in the body
	var mailtoLink = 'mailto:developermahesh0@gmail.com?subject=Enter Subject Here&body=';

	// Open the email client in a new window or tab
	window.open(mailtoLink, '_blank');
  }
