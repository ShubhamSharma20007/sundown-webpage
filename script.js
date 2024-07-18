gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


// window.addEventListener("contextmenu", (e) => {
//     e.preventDefault()
// })

//  card animation


const cards = document.querySelectorAll(".heading-first");
const fixedContainer = document.querySelector(".fixed-image");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        const attribute = card.getAttribute("data-source")
        fixedContainer.style.display = "block"
        fixedContainer.style.backgroundImage = `url(${attribute})`
    })
    card.addEventListener("mouseleave", () => {
        fixedContainer.style.display = "none"
    })
})


// swipper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: false,

}, );

// menu
const menubtn = document.querySelector("#menu");
const screen = document.querySelector("#full-scr");
const navImg = document.querySelector("nav img")
const nav = document.querySelector("nav")
var flag = true
menubtn.addEventListener('click', function() {
    if (flag === true) {
        screen.style.top = "0"
        navImg.style.display = "none"
        nav.style.justifyContent = "flex-end"
        nav.style.alignItems = "center"

        flag = false
    } else {
        screen.style.top = "-100%"
        navImg.style.display = "block"
        nav.style.justifyContent = "space-between"
        nav.style.alignItems = "center"

        flag = true
    }
})


// 

const loader = document.querySelector("#loader");

setTimeout(() => {
    loader.style.top = "-100%"
}, 4000)




// rounde ball

function roundBall() {
    const swiper = document.querySelector(".swiper-wrapper ");
    const roundBall = document.querySelector('.rounded-ball');

    swiper.addEventListener("mouseenter", (event) => {
        gsap.to(roundBall, {
            scale: 0,
            onStart: () => {
                document.body.style.cursor = "none";
            }

        });
    });

    swiper.addEventListener("mousemove", (event) => {
        gsap.to(roundBall, {
            scale: 1,
            display: 'block',
            left: event.clientX - 20 + 'px',
            top: event.clientY - 20 + 'px',
            ease: 'ease',
            onStart: () => {
                document.body.style.cursor = "none";
            }
        });
    });

    swiper.addEventListener("mouseleave", (event) => {
        gsap.to(roundBall, {
            scale: 0, // Set the desired scale when mouse leaves
            ease: 'ease',
            onComplete: () => {
                document.body.style.cursor = "default";
            }
        });
    });
    swiper.addEventListener("ondrag",()=>{
        gsap.to(roundBall,{
            scale:1,
            onStart:()=>{
                document.body.style.cursor = "none";
            },
            onComplete:()=>{
                document.body.style.cursor = "none";
            }
        })
    })
}

roundBall();