const burger = document.querySelector('.header_mobile-hamburher');
const nav = document.getElementById('nav');


burger.addEventListener('click', function () {
    console.log(nav);
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else nav.classList.add('active');
    console.log(nav);
  })

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex";
            }
        });
    });

    closeButtons.forEach(close => {
        close.addEventListener("click", () => {
            close.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});


