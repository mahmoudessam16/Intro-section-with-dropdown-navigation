let featuresBtn = document.querySelector("header .features");
let companyBtn = document.querySelector("header .company");
let featuresMenu = document.querySelector("header .features-links");
let companyMenu = document.querySelector("header .company-links");
let image = document.querySelector("header ul.links > li > img");

featuresBtn.addEventListener("click", function () {
    featuresMenu.classList.toggle("show");
    if (featuresMenu.classList.contains("show")) {
        image.src = './images/icon-arrow-up.svg';
    } else {
        image.src = './images/icon-arrow-down.svg';
    }
});

companyBtn.addEventListener("click", function () {
    companyMenu.classList.toggle("show");
    if (companyMenu.classList.contains("show")) {
        document.querySelector("header ul.links > li.company > img").src = './images/icon-arrow-up.svg';
    } else {
        document.querySelector("header ul.links > li.company > img").src = './images/icon-arrow-down.svg';
    }
});

// ------------------------------
let featuresBtnMobile = document.querySelector(".links-mobile-menu .features");
let companyBtnMobile = document.querySelector(".links-mobile-menu .company");
let featuresMenuMobile = document.querySelector(".links-mobile-menu .features-links");
let companyMenuMobile = document.querySelector(".links-mobile-menu .company-links");
featuresBtnMobile.addEventListener("click", function () {
    featuresMenuMobile.classList.toggle("show");
    if (featuresMenuMobile.classList.contains("show")) {
        document.querySelector(".links-mobile-menu ul.links > li.features > img").src = './images/icon-arrow-up.svg';
    } else {
        document.querySelector(".links-mobile-menu ul.links > li.features > img").src = './images/icon-arrow-down.svg';
    }
});

companyBtnMobile.addEventListener("click", function () {
    companyMenuMobile.classList.toggle("show");
    if (companyMenuMobile.classList.contains("show")) {
        document.querySelector(".links-mobile-menu ul.links > li.company > img").src = './images/icon-arrow-up.svg';
    } else {
        document.querySelector(".links-mobile-menu ul.links > li.company > img").src = './images/icon-arrow-down.svg';
    }
});

// ------------------------
let barIcon = document.querySelector(".bar-icon");
let closeIcon = document.querySelector(".close-icon");
let mobileMenu = document.querySelector(".links-mobile-menu");

barIcon.addEventListener("click", function () {
    mobileMenu.style.right = '0px';
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".overlay").style.height = `${document.documentElement.scrollHeight}px`;
    closeIcon.addEventListener("click", function () {
        mobileMenu.style.right = '-280px';
        document.querySelector(".overlay").style.display = "none";
    });
});

// ---------------------------------------
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".image img").src = "./images/image-hero-mobile.png"
    } else {
        document.querySelector(".image img").src = "./images/image-hero-desktop.png"
    }
}

var x = window.matchMedia("(max-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes