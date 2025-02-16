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
