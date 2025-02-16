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

document.addEventListener("DOMContentLoaded", function () {
    function createOdometer(el, finalValue) {
        if (!el) {
            console.error("Elemento no encontrado:", el);
            return;
        }

        el.innerHTML = "0"; // Asegura que inicie en 0
        const odometer = new Odometer({ el: el, value: 0 });

        let hasRun = false;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasRun) {
                    console.log("Iniciando contador en", finalValue);
                    odometer.update(finalValue);
                    hasRun = true; // Evita que la animación se repita
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    }

    setTimeout(() => {
        createOdometer(document.querySelector(".años-odometer"), 24);
        createOdometer(document.querySelector(".has-odometer"), 60000);
        createOdometer(document.querySelector(".usuarios-odometer"), 47000);
    }, 1000);
});

