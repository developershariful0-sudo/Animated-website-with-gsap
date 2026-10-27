// Register GSAP Plugins
if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------
// 1. Initial Page Load Animation (Navbar & Hero Section)
// -------------------------------------------------------------
const mainTl = gsap.timeline({
    defaults: {
        ease: "power3.out",
        clearProps: "all"
    }
});

// Navbar Dropdown Animation
mainTl.from("nav .nav-part1", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.1
});

mainTl.from("nav .nav-part2 h4", {
    y: -25,
    opacity: 0,
    duration: 0.45,
    stagger: 0.08
}, "-=0.25");

mainTl.from("nav .nav-part2 button", {
    y: -20,
    opacity: 0,
    scale: 0.9,
    duration: 0.4
}, "-=0.2");

// Hero Content Entry
mainTl.from(".center-part1 h1", {
    x: -50,
    opacity: 0,
    duration: 0.65
}, "-=0.2");

mainTl.from(".center-part1 p", {
    x: -35,
    opacity: 0,
    duration: 0.55
}, "-=0.35");

mainTl.from(".center-part1 button", {
    scale: 0.85,
    opacity: 0,
    duration: 0.45,
    ease: "back.out(1.8)"
}, "-=0.2");

mainTl.from(".center-part2 img", {
    x: 60,
    opacity: 0,
    scale: 0.9,
    duration: 0.7
}, "-=0.45");

mainTl.from(".section1bottom", {
    opacity: 0,
    y: 25,
    duration: 0.6
}, "-=0.25");


// -------------------------------------------------------------
// 2. Continuous Hero Image Floating Animation
// -------------------------------------------------------------
gsap.to(".center-part2 img", {
    y: 12,
    duration: 2.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// -------------------------------------------------------------
// 3. Interactive Hero Image Mouse Parallax
// -------------------------------------------------------------
const heroCenter = document.querySelector(".center");
const heroImage = document.querySelector(".center-part2 img");

if (heroCenter && heroImage) {
    heroCenter.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = heroCenter.getBoundingClientRect();
        const xOffset = (clientX - (left + width / 2)) / (width / 2);
        const yOffset = (clientY - (top + height / 2)) / (height / 2);

        gsap.to(heroImage, {
            x: xOffset * 15,
            y: yOffset * 15,
            rotation: xOffset * 1.5,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
        });
    });

    heroCenter.addEventListener("mouseleave", () => {
        gsap.to(heroImage, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto"
        });
    });
}


// -------------------------------------------------------------
// 4. Infinite Marquee Loop for Brand Partners
// -------------------------------------------------------------
const marqueeTween = gsap.to(".marquee-track", {
    xPercent: -50,
    ease: "none",
    duration: 18,
    repeat: -1
});

const marqueeBox = document.querySelector(".section1bottom");
if (marqueeBox) {
    marqueeBox.addEventListener("mouseenter", () => {
        gsap.to(marqueeTween, { timeScale: 0.25, duration: 0.5 });
    });

    marqueeBox.addEventListener("mouseleave", () => {
        gsap.to(marqueeTween, { timeScale: 1, duration: 0.5 });
    });
}


// -------------------------------------------------------------
// 5. ScrollTrigger: Elements Flying in from Outside to Inside
// -------------------------------------------------------------
if (typeof ScrollTrigger !== "undefined") {
    // Services Section Title (slides from Left outside)
    gsap.from(".services-section .section-title", {
        scrollTrigger: {
            trigger: ".services-section",
            start: "top 85%",
            once: true
        },
        x: -120,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        clearProps: "all"
    });

    // Line 1: Left card from left outside, Right card from right outside
    gsap.from(".card.line1.left", {
        scrollTrigger: {
            trigger: ".card.line1.left",
            start: "top 82%",
            once: true
        },
        x: -280,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "all"
    });

    gsap.from(".card.line1.right", {
        scrollTrigger: {
            trigger: ".card.line1.right",
            start: "top 82%",
            once: true
        },
        x: 280,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "all"
    });

    // Line 2: Left card from left outside, Right card from right outside
    gsap.from(".card.line2.left", {
        scrollTrigger: {
            trigger: ".card.line2.left",
            start: "top 82%",
            once: true
        },
        x: -280,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "all"
    });

    gsap.from(".card.line2.right", {
        scrollTrigger: {
            trigger: ".card.line2.right",
            start: "top 82%",
            once: true
        },
        x: 280,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        clearProps: "all"
    });

    // CTA Banner (slides in from bottom outside)
    gsap.from(".cta-banner", {
        scrollTrigger: {
            trigger: ".cta-banner",
            start: "top 85%",
            once: true
        },
        y: 120,
        scale: 0.92,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all"
    });

    // Case Studies Title (slides from left outside)
    gsap.from(".case-studies-section .section-title", {
        scrollTrigger: {
            trigger: ".case-studies-section",
            start: "top 85%",
            once: true
        },
        x: -120,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        clearProps: "all"
    });

    // Case Studies Container (slides in from bottom outside)
    gsap.from(".case-studies-container", {
        scrollTrigger: {
            trigger: ".case-studies-container",
            start: "top 85%",
            once: true
        },
        y: 90,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all"
    });

    // Refresh ScrollTrigger positions after page assets load
    window.addEventListener("load", () => ScrollTrigger.refresh());
    setTimeout(() => ScrollTrigger.refresh(), 400);
}


// -------------------------------------------------------------
// 6. Interactive 3D Tilt & Parallax for Service Cards
// -------------------------------------------------------------
const allServiceCards = document.querySelectorAll(".services-container .card");

allServiceCards.forEach((singleCard) => {
    const cardSvg = singleCard.querySelector(".card-right svg");
    const arrowIcon = singleCard.querySelector(".circle-icon");

    singleCard.addEventListener("mousemove", (e) => {
        const rect = singleCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        gsap.to(singleCard, {
            rotateX: rotateX,
            rotateY: rotateY,
            y: -8,
            scale: 1.025,
            duration: 0.3,
            ease: "power1.out",
            transformPerspective: 1000
        });

        if (cardSvg) {
            gsap.to(cardSvg, {
                x: (x - centerX) * 0.08,
                y: (y - centerY) * 0.08,
                scale: 1.05,
                duration: 0.3,
                ease: "power1.out"
            });
        }

        if (arrowIcon) {
            gsap.to(arrowIcon, {
                rotate: 45,
                scale: 1.15,
                duration: 0.3,
                ease: "back.out(2)"
            });
        }
    });

    singleCard.addEventListener("mouseleave", () => {
        gsap.to(singleCard, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out"
        });

        if (cardSvg) {
            gsap.to(cardSvg, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power3.out"
            });
        }

        if (arrowIcon) {
            gsap.to(arrowIcon, {
                rotate: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    });
});


// -------------------------------------------------------------
// 7. Continuous Floating Idle Animation for Illustrations
// -------------------------------------------------------------
gsap.to(".card-right svg", {
    y: 6,
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.2
});

gsap.to(".cta-illustration svg circle", {
    y: 6,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
