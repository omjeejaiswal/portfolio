

// _---------------------------------START -------------------------------------------




document.addEventListener('DOMContentLoaded', (event) => {
    var t1 = gsap.timeline();

    t1.to("#fullscreen", {
        height: 0,
        duration: 2,
        ease: "expo.inOut"
    })
    .to("#elem", {
        height: "100%",
        duration: 2,
        delay: -2,
        ease: "expo.inOut"
    })
    .to("#white", {
        height: "100%",
        duration: 2,
        delay: -1.6,
        ease: "expo.inOut"
    })
    .to(".name", {
        opacity: 1,
        duration: 1,
        ease: "expo.inOut"
    })
    .to("#front_screen", {
        opacity: 0,
        duration: 1,
        delay: 1.5, // Wait for 1.5 seconds before transitioning
        ease: "expo.inOut",
        onComplete: function() {
            document.getElementById('front_screen').style.display = 'none';
            document.getElementById('screen').style.display = 'block';
        }
    })
});

document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.querySelector('.down__arrow');
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            // Downscroll code
            arrow.classList.add('hidden');
        } else {
            // Upscroll code
            arrow.classList.remove('hidden');
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
});










// -------------------------END-----------------------------------





















// show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close') 

//menu show
// validate if constant exists 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu  mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAcion = () =>{
    const navMenu = document.getElementById('nav-menu')
    // jab hum nav__link(like home button ,skills button etc) pe click karge to hum show-menu ko remove karge
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAcion))



// swiper 
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

// swiper testimonial
let swiperTestimonial = new Swiper(".testimonail__container", {
    grabCursor: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-perv",
    },
});






// email js

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // check if the filed has value
    if(contactName.value === ' ' || contactEmail.value === '' || contactProject.value === ''){
        // add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // show message
        contactMessage.textContent = 'write all the input fields '
    }else{
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_ro6dvhb','template_sdj71oh','#contact-form','D1QQWOlUbadfrvRNi')
            .then(() =>{
                // show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ✔'

                // remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            }, (error)=>{
                alert('oops! something has failed...', error)
            })

        // to cleat the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)






// scroll section active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[herf*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)









// ----------scroll up

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)






// dark theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'  // ri-sun-line is for moon to sun --> it schange the theme 

// previous selcted topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obatin the cuurent theme the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


// we validate if the user previoulsy chose a topic
if(selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activeated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
} 

// Activate /deactivate the theme manually with button
themeButton.addEventListener('click', ()=> {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





// backgroung header

const scrollHeader =() =>{
    const header= document.getElementById('header')
    // when the scroll is grater than 50 viewport height, and the scroll-header class to hte header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /* animation repeat */
})

sr.reveal(`.home__data, .projects__container, .testimonial__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services.card`, {interval: 100})



