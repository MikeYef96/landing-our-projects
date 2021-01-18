(() => {
  const openModalBtn = document.querySelector("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const modal = document.querySelector("[data-modal]");

  const toggleModal = () => {
    document.body.classList.toggle("modal-open");
    modal.classList.toggle("is-hidden");
  };

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);
})();

// const { height: pageHeaderHeight } = document
//             .querySelector("page-header").getBoundingClientRect();
//         document.body.style.paddingTop = '${ pageHeaderHeight }px';

//FIXED HEADER FUNCTION^^^==============================================================================================

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
