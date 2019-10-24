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


const skillrow = document.querySelector('.events');
const skills = document.querySelectorAll('.event-card');

SkillOptions = {
	rootMargin: "0px 0px -350px 0px"
}

const SkillObserver = new IntersectionObserver(function(entries, observer){

	entries.forEach(entry => {
		if(entry.isIntersecting){
			skills.forEach(skill => {
				skill.classList.add('event-card-scrolled');
			});
		}
	});
}, SkillOptions);

SkillObserver.observe(skillrow);

const navbar_items = document.querySelectorAll('.navbar-items');
const toggle_bar = document.querySelector('.toggle-bar');

navbar_items.forEach(function(navbar_item) {
	navbar_item.addEventListener('click', function() {
		toggle_bar.checked = false;
	});
});
