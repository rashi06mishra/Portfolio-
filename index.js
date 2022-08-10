// scroll to top button
const homeSection = document.querySelector(".section-home");
const footerElement = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");

scrollElement.classList.add("scroll-top-style");

scrollElement.innerHTML = `<ion-icon name="chevron-up-outline" class="scroll-up"></ion-icon>` ;

footerElement.after(scrollElement);

const scrollTop = () => {
    homeSection.scrollIntoView({behavior: "smooth" });
}

scrollElement.addEventListener("click", scrollTop);


// lazy loading

