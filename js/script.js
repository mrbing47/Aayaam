//This part is responsible for the animation on the Nav Bar
const navbar = document.querySelector('.navbar');
const intro_img = document.querySelector('.intro-div');

const NavOptions = {
	rootMargin: '-150px 0px 0px 0px'
};

const NavObserver = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.rootBounds.width > 768) {
			if (!entry.isIntersecting) {
				navbar.classList.add('navbar-scrolled');
			} else {
				navbar.classList.remove('navbar-scrolled');
			}
		}
	});
}, NavOptions);

NavObserver.observe(intro_img);

//This part is responsible for the animation on the About-Us card
const about_us = document.querySelector('.about-us-div');
const about_head = document.querySelector('.about-head');

const AboutOptions = {
	rootMargin: '0px 0px -500px 0px'
};

const AboutObserver = new IntersectionObserver(function(entries, oberser) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			about_us.classList.add('about-us-scrolled');
			console.log("here I'm");
		}
	});
}, AboutOptions);

AboutObserver.observe(about_head);

//This part is responsible for the animations on the Event cards
const eventrow = document.querySelector('.events');
const events = document.querySelectorAll('.event-card');

EventOptions = {
	rootMargin: '0px 0px -350px 0px'
};

const EventObserver = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			events.forEach(event => {
				event.classList.add('event-card-scrolled');
			});
		}
	});
}, EventOptions);

EventObserver.observe(eventrow);

//This part is responsible for the animations on the Admin cards
const admincards = document.querySelectorAll('.admin-card');

AdminOptions = {
	rootMargin: '0px 0px -100px 0px'
};

const AdminObserver = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('admin-card-scrolled');
		}
	});
}, AdminOptions);

admincards.forEach(admincard => {
	AdminObserver.observe(admincard);
});

//This part checks whether the user has selected an option and then closes the navbar
const navbar_items = document.querySelectorAll('.navbar-items');
const toggle_bar = document.querySelector('.toggle-bar');

navbar_items.forEach(function(navbar_item) {
	navbar_item.addEventListener('click', function() {
		toggle_bar.checked = false;
	});
});
