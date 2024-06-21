// ---------------------------------------------------------------------------------- //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// ---------------------------------------------------------------------------------- //

let dropdown = document.querySelector(".dropdown");
let dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function(event) {
  dropdownContent.style.display = "block";
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

document.addEventListener("click", function(event) {
  if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});


window.onload = function() {
  let savedLanguage = localStorage.getItem('currentLanguage');
  if (savedLanguage) {
      document.getElementById('currentFlag').src = savedLanguage;
  }
}

function switchLanguage(flagUrl) {
  document.getElementById('currentFlag').src = flagUrl;
  localStorage.setItem('currentLanguage', flagUrl);
}


// ---------------------------------------------------------------------------------- //

window.addEventListener('scroll', function() {
  let backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 100) {
      backToTopButton.classList.add('back-to-top--is-visible');
  } else {
      backToTopButton.classList.remove('back-to-top--is-visible');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});


// ---------------------------------------------------------------------------------- //

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// ---------------------------------------------------------------------------------- //

const myPs = document.querySelectorAll(".news_text");
myPs.forEach((p) => {
  const text = p.textContent.trim();
  const words = text.split(" ");
  const truncated = words.slice(0, 11).join(" ") + "...";
  p.textContent = truncated;
});

// ---------------------------------------------------------------------------------- //

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.getElementById(this.getAttribute("href").substr(1));

    // Check if the target element exists on the current page
    if (target) {
      window.scrollTo({
        top: target.offsetTop - window.innerHeight / 2 + target.offsetHeight / 2,
        behavior: "smooth",
      });
    } else {
      console.log('Target element does not exist on this page');
    }
  });
});


// ---------------------------------------------------------------------------------- //

("use strict");
// Select all slides
const slides = document.querySelectorAll(".hero-slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".items-btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

if (nextSlide) {
  // add event listener and navigation functionality
  nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
}

// select next slide button
const prevSlide = document.querySelector(".items-btn-prev");

if (prevSlide) {
  // add event listener and navigation functionality
  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
}

setInterval(function () {
  if (nextSlide) nextSlide.click();
}, 5000);


// ---------------------------------------------------------------------------------- //

const swiper1 = new Swiper(".swiper1", {
  
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,
  centeredSlides: false,
  direction: "horizontal",
  loop: false,
  

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  }
});



// ---------------------------------------------------------------------------------- //

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 0,
  speed: 800,
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

// ---------------------------------------------------------------------------------- //

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 0,
  speed: 800,
  direction: "horizontal",
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

// ---------------------------------------------------------------------------------- //

function magnify(imgID, zoom) {
  let img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    let pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /*set the position of the magnifier glass:*/
    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition =
      "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
  }
  function getCursorPos(e) {
    let a,
      x = 0,
      y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

magnify("myimage", 2.2);


// ---------------------------------------------------------------------------------- //


