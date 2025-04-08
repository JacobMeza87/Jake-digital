//Inicio basico js menu//
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.querySelector('body');

    // Toggle menú hamburguesa
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Cerrar menú al hacer click en enlace
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Cerrar menú con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
});

// inicio de formulario//
// Animación de labels del formulario
document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('input', function() {
        if(this.value !== '') {
            this.parentNode.querySelector('label').classList.add('active');
        } else {
            this.parentNode.querySelector('label').classList.remove('active');
        }
    });
});

// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación básica
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if(name && email && phone) {
        // Aquí iría la lógica de envío
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        this.reset();
    } else {
        alert('Por favor completa todos los campos requeridos.');
    }
});
// fin seccion formulario
// Manejo del newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    if(email) {
        // Aquí iría la lógica de suscripción
        alert('¡Gracias por suscribirte!');
        this.reset();
    }
});
