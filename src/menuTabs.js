document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu-btn");
    const panels = document.querySelectorAll(".menu-panel");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            panels.forEach(panel => panel.classList.remove("active"));
            document.getElementById(target).classList.add("active");
        });
    });

    document.querySelector(".menu-btn").classList.add("active");
    document.querySelector(".menu-panel").classList.add("active");
});