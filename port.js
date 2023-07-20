// --------------toggle icon navbar-------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ----------scroll section active link--------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // ------sticky navbar--------
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // -------remove toggle icon and navbar when click navbar link(scroll)-------

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// ------Scroll reveal -------------------
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// -------fade in of topcs (top - bottom)-------------------
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

// -------fade in of topcs ( bottom - top)-------------------
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

// -------fade in of topcs (left - right)-------------------
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

// -------fade in of topcs (left - right)-------------------
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ------------typed JS----------------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer!', 'Java Programmer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// -------------for Read more button in About-Me---------------
// function toggleVisibility() {
//     var paragraph = document.getElementById("about-me");
//     var button = document.querySelector(".btn");

//     if (paragraph.classList.contains("partial-para")) {
//       paragraph.classList.remove("partial-para");
//       paragraph.classList.add("full-para");
//       button.innerText = "Read Less";
//     } else {
//       paragraph.classList.remove("full-para");
//       paragraph.classList.add("partial-para");
//       button.innerText = "Read More";
//     }
//   }
function toggleVisibility(button) {
    var paragraph = document.getElementById("about-me");
    var buttonText = button.querySelector("#button-text");

    if (paragraph.classList.contains("partial-para")) {
        paragraph.classList.remove("partial-para");
        paragraph.classList.add("full-para");
        buttonText.innerHTML = "Read Less";
    } else {
        paragraph.classList.remove("full-para");
        paragraph.classList.add("partial-para");
        buttonText.innerHTML = "Read More";
    }
}



function openPopup(project) {
    var heading = document.getElementById('popup-heading');
    var description = document.getElementById('popup-description');
    var popup = document.getElementById('popup-overlay');

    if (project === 'iot') {
        heading.textContent = 'IOT Based Home Automation';
        description.textContent = 'Detailed description of the IOT Based Home Automation project.';
    } else if (project === 'distance') {
        heading.textContent = 'Digital Distance Measuring Device';
        description.textContent = 'Detailed description of the Digital Distance Measuring Device project.';
    } else if (project === 'web') {
        heading.textContent = 'Web Development';
        description.textContent = 'Detailed description of the Web Development project.';
    }

    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup-overlay');
    popup.style.display = 'none';
}
