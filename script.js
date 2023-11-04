window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show/Hide Faq
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "fa-solid fa-square-plus") {
      icon.className = "fa-solid fa-square-minus";
    } else {
      icon.className = "fa-solid fa-square-plus";
    }
  });
});

// Show/Hide Navbar
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// Hide Navbar
// const closeNav = () => {
//     menu.style.display = 'none';
//     closeBtn.style.display = 'none';
//     menuBtn.style.display = 'inline-block';
// }

// closeBtn.addEventListener('click', closeNav)

// // Preview
// let previewContainer = document.querySelector('.products-preview');
// let previewBox = previewContainer.querySelectorAll('.preview');

// document.querySelectorAll('.products-container .product').forEach(product => {
//     product.onclick = () => {
//         previewContainer.style.display = 'flex'
//         let name = product.getAttribute('data-name');
//         previewBox.forEach(preview => {
//             let target = preview.getAttribute('data-target');
//             if (name == target) {
//                 preview.classList.add('active');
//             }
//         })
//     }
// })

// previewBox.forEach(close => {
//     close.querySelector('.fa-times').onclick = () => {
//         close.classList.remove('active');
//         previewContainer.style.display = 'none';
//     }
// })
