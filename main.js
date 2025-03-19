document.querySelectorAll(".leo-card").forEach((card) => {
    card.addEventListener("mouseover", () => {
    card.querySelector(".leo-service-btn").style.transition =
        "bottom 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s";
    });

    card.addEventListener("mouseleave", () => {
    card.querySelector(".leo-service-btn").style.transition =
        "bottom 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s";
    });
});

/* hamburgesa */

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".btn-menu");
    const offcanvasMenu = document.getElementById("offcanvasMenu");

    offcanvasMenu.addEventListener("show.bs.offcanvas", function () {
        menuButton.style.display = "none";
    });

    offcanvasMenu.addEventListener("hidden.bs.offcanvas", function () {
        menuButton.style.display = "block";
    });
});


/* contador */
window.onload = function () {

    function createOdometer(el, finalValue) {
        if (!el) {
            /* console.error("Elemento no encontrado:", el); */
            return;
        }

        el.innerHTML = "0"; // Asegura que inicie desde 0
        const odometer = new Odometer({
            el: el,
            value: 0,
        });

        let hasRun = false;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasRun) {
                    /* console.log(`Iniciando contador en: ${finalValue}`); */

                    // Formatear el número con puntos
                    const formattedValue = finalValue.toLocaleString("en-US");

                    odometer.update(finalValue);
                    el.innerHTML = formattedValue; // Sobrescribe el valor con el formato correcto
                    
                    hasRun = true; // Evita que la animación se repita
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    }

    // Esperamos que los elementos existan en el DOM antes de ejecutarlos
    setTimeout(() => {
        createOdometer(document.querySelector(".años-odometer"), 25);
        createOdometer(document.querySelector(".has-odometer"), 60000);
        createOdometer(document.querySelector(".usuarios-odometer"), 47000);
    }, 1000);
};

/* navbar */

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar"); // Seleccionamos el navbar por ID

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {  
            navbar.classList.add("fixed-top"); // Agregar clase cuando haces scroll
        } else {
            navbar.classList.remove("fixed-top"); // Remover clase cuando vuelves arriba
        }
    });
});

/* que hacemos */
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".content");

        header.addEventListener("click", function () {
            const isOpen = item.classList.contains("open");

            // Cierra los otros acordeones antes de abrir el actual
            accordionItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("open");
                    let content = i.querySelector(".content");
                    content.style.display = "none";
                }
            });

            if (isOpen) {
                // Cierra el acordeón
                item.classList.remove("open");
                content.style.display = "none";
            } else {
                // Abre el acordeón
                item.classList.add("open");
                content.style.display = "block";

                // Posiciona la vista en el acordeón
                setTimeout(() => {
                    item.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 100);
            }
        });
    });
});


/* active page */

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el nombre del archivo actual
    const currentPage = window.location.pathname.split("/").pop();

    // Mapeo de páginas y sus respectivos enlaces
    const pageMap = {
        "index.html": "Home",
        "hacemos.html": "Qué Hacemos",
        "quienes.html": "Quiénes Somos",
        "socios.html": "Socios Estratégicos",
        "prensa.html": "Prensa",
        "contacto.html": "Contacto"
    };

    // Seleccionar todos los elementos <li> con la clase navItemList
    const navItems = document.querySelectorAll(".navItemList");

    // Recorrer los elementos <li> y buscar el que coincida con la página actual
    navItems.forEach(item => {
        const link = item.querySelector(".navBtn"); // Buscar el enlace dentro del <li>
        if (link && link.textContent.trim() === pageMap[currentPage]) {
            item.classList.add("active-page"); // Agregar la clase al <li>
        }
    });
});

/* ver mas socios */

document.addEventListener("DOMContentLoaded", function () {
    const primerBoton = document.querySelector(".primerVermas");
    const segundoBoton = document.querySelector(".segundoVermas");
    const desplegables1 = document.querySelectorAll(".sociosDesplegableMobile");
    const desplegable2 = document.querySelector(".sociosDesplegableMobile2");
    const botonesConocer = document.querySelectorAll(".botonSocioConocer"); // Todos los botones "Conocé más"

    function toggleDisplay(elements, button) {
        let isVisible = false;

        elements.forEach(element => {
            if (element.style.display === "flex") {
                element.style.display = "none";
            } else {
                element.style.display = "flex";
                isVisible = true; // Si al menos un elemento se muestra, se cambia el texto del botón
            }
        });

        // Cambia el texto del botón dependiendo del estado
        button.textContent = isVisible ? "Ver menos" : "Ver más";
    }

    function hideButtons() {
        botonesConocer.forEach(button => {
            button.style.display = button.style.display === "none" ? "inline-block" : "none";
        });
    }

    primerBoton.addEventListener("click", function () {
        toggleDisplay([desplegables1], primerBoton);
        hideButtons(); // Oculta los botones "Conocé más"
    });

    segundoBoton.addEventListener("click", function () {
        toggleDisplay([desplegable2], segundoBoton);
        hideButtons(); // Oculta los botones "Conocé más"
    });
});

/* NODEMAILER */

// Crear una instancia de Notyf
const notyf = new Notyf({
    duration: 3000, 
    position: {
        x: 'right',
        y: 'bottom',
    },
    types: [
        {
            type: 'warning',
            background: 'orange',
            icon: false
        }
    ]
});


document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que se recargue la página

    const formData = {
        nombre: document.getElementById("nombre").value,
        empresa: document.getElementById("empresa").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        mensaje: document.getElementById("mensaje").value
    };

    try {
        let response = await fetch("https://biored-mailing.vercel.app/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        let result = await response.json();

        if (result.success) {
            notyf.success('Correo enviado con éxito!');
            document.getElementById("contactForm").reset();
        } else {
            alert("Error al enviar el correo");
        }
    } catch (error) {
        console.error("Error:", error);
        notyf.error('Error al enviar el correo. Inténtalo de nuevo.');
    }
});



