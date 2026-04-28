// MENU
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// THEME
let toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
    document.body.classList.toggle("light-mode");
};

// TYPED TEXT
new Typed('.multiple-text', {
    strings: ['IBM Maximo (EAM)', 'EAM Specialist', 'SQL Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// POPUP
function openPopup(type) {
    let heading = document.getElementById('popup-heading');
    let desc = document.getElementById('popup-description');

    if (type === 'iot') {
        heading.innerText = 'IoT Automation';
        desc.innerText = 'Control appliances remotely using IoT system.';
    }
    if (type === 'distance') {
        heading.innerText = 'Distance Device';
        desc.innerText = 'Measured distance using ultrasonic sensor.';
    }
    if (type === 'gas') {
        heading.innerText = 'Gas Detection';
        desc.innerText = 'Gas leak detection with alert system.';
    }

    document.getElementById('popup-overlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}
