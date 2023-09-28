import ReactDOM from 'react-dom'

import ScrollReveal from 'scrollreveal'
import mixitup from 'mixitup'
import './global.css'
import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
//not supported reactdom use create root instead
ReactDOM.render(<App/> , document.querySelector("#root"))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services_modal'),
modalBtns  = document.querySelectorAll('.services_button'),
modalClose  = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}   

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortFolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
     linkWork.forEach(l=> l.classList.remove('active-work'))
     this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 4100,
    reset: false,
})

sr.reveal('.home_data');
sr.reveal('.home_handle', );
sr.reveal('.home_social , .home_scroll', {origin:'bottom'});
sr.reveal('.nav_menu', {origin:'bottom'});
sr.reveal('.section_title, .section_subtitle', {delay: 350, origin:'left'});
sr.reveal('.about_img', {delay: 350, origin:'top'});
sr.reveal('.about_data', {delay: 400, origin:'bottom'});
sr.reveal('.skills_content:nth-child(1)', {delay: 500, origin:'left'});
sr.reveal('.skills_content:nth-child(2)', {delay: 500, origin:'right'});
sr.reveal('.services_card', {delay: 450, origin:'right', interval:220});
sr.reveal('.work_item', {delay: 450, origin:'right', interval:230});
sr.reveal('.work_card:nth-child(odd)', {delay: 400, origin:'top', interval:200});
sr.reveal('.work_card:nth-child(even)', {delay: 400, origin:'bottom', interval:200});
sr.reveal('.swiper-cards', {delay: 400, origin:'bottom'});
sr.reveal('.contact_title:nth-child(1)', {delay: 400, origin:'bottom', interval:200});
sr.reveal('.contact_card', {delay: 450, origin:'bottom', interval:200 , reset:false});
sr.reveal('.contact_container', {delay: 500, origin:'right', interval:200});
sr.reveal('.footer', {delay: 500, origin:'bottom'});


/*====================FScr========================= */
document.addEventListener("dblclick", () =>{
    
    document.documentElement.requestFullscreen();
});