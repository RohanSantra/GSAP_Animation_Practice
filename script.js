function section1Animation() {
    const tl = gsap.timeline()

    tl.from(".nav .logo", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        scrub: 2
    })
    gsap.from(".nav .logo i", {
        rotate: 180,
        duration: 0.5,
        scrub: 2,
        delay: 1
    })

    tl.from(".nav .links h3", {
        y: -100,
        opacity: 0,
        duration: 0.25,
        stagger: 0.15,
        scrub: 3
    })

    tl.from(".nav .links button", {
        y: -100,
        opacity: 0,
        scrub: 2
    })

    tl.from(".description h1,.description p,.description button", {
        x: -50,
        opacity: 0,
        duration: 0.25,
        scrub: 2,
        stagger: 0.15
    })

    tl.from(".middle-section img ", {
        x: 50,
        opacity: 0,
        duration: 0.25,
        scrub: 2
    })
    tl.from(".logos img", {
        y: 50,
        opacity: 0,
        duration: 0.25,
        scrub: 2,
        stagger: 0.15
    })
}

function section2Animation() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-2",
            scroller: "body",
            start: "top 70%",
            end: "top 0",
            scrub: 2

        }
    });

    t2.from(".section-2 .title h1", {
        x: -100,
        duration: 0.5,
        opacity: 0
    }, "services")

    t2.from(".section-2 .title p", {
        x: 100,
        duration: 0.5,
        opacity: 0
    }, "services")

    t2.from(".card-container .left", {
        x: -100,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5
    }, "animate")
    t2.from(".card-container .right", {
        x: 100,
        duration: 0.5,
        opacity: 0,
        stagger: 0.5
    }, "animate")
}

function section3Animation() {
    const cardContainer = document.querySelector(".section-3 .section-3-container");
    cardContainer.addEventListener('mouseenter', () => {
        gsap.to(".section-3 .overlay-1", {
            rotate: -3,
            duration: 0.25,
            scrub: 2,
        })
        gsap.to(".section-3 .overlay-2", {
            rotate: 3,
            duration: 0.25,
            scrub: 2,
            zIndex: 2

        })
    })

    cardContainer.addEventListener('mouseleave', () => {
        gsap.to(".section-3 .overlay-1", {
            rotate: 3,
            duration: 0.5,
            scrub: 2,
        })
        gsap.to(".section-3 .overlay-2", {
            rotate: -3,
            duration: 0.5,
            scrub: 2,
            zIndex: -1
        })
    })
}

function section4Animation() {
    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-4",
            scroller: "body",
            start: "top 70%",
            end: "top 60%",
            scrub: 2
        }
    });

    t3.from(".section-4 .title h1", {
        x: -100,
        duration: 0.5,
        opacity: 0
    }, "case-study")

    t3.from(".section-4 .title p", {
        x: 100,
        duration: 0.5,
        opacity: 0
    }, "case-study")
}


section1Animation();
section2Animation();
section3Animation();
section4Animation();