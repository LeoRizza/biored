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

/* contador */
window.onload = function () {
    console.log("Página completamente cargada, iniciando Odometer...");

    function createOdometer(el, finalValue) {
        if (!el) {
            console.error("Elemento no encontrado:", el);
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
                    console.log(`Iniciando contador en: ${finalValue}`);

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
        createOdometer(document.querySelector(".años-odometer"), 24);
        createOdometer(document.querySelector(".has-odometer"), 60000);
        createOdometer(document.querySelector(".usuarios-odometer"), 47000);
    }, 1000);
};


/*scroll*/

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".leoNavbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {  // Si el usuario scrollea más de 50px
            navbar.style.background = "rgba(91, 84, 80, 0.5)"; // Fondo semitransparente
            navbar.style.backdropFilter = "blur(10px)"; // Efecto de desenfoque
            navbar.style.transition = "all 0.3s ease-in-out"; // Transición suave
        } else {
            navbar.style.background = "transparent"; // Fondo transparente cuando está arriba
            navbar.style.backdropFilter = "none"; // Quita el desenfoque
        }
    });
});
