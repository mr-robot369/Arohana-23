const mobile_nav= document.querySelector(".hamburger");
const nav_header = document.querySelector(".nav-elements");


const toggleNavbar = () => {
    // alert(" Aarohna ");
    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click",() => toggleNavbar());