const navbar = document.querySelector("header");

function animation() {
    var controller = new ScrollMagic.Controller();

    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t1.fromTo(".homepage__left", 1.5, { y: "-600rem"}, { y: 0 }, "-=1");
    t1.fromTo(".homepage__desc", 1, { y: "100rem", opacity: 0 }, { y: 0, opacity: 1 }, "-=1");
    t1.fromTo(".homepage__right", 1.3, { y: "-100rem"}, { y: 0 }, "-=1");
    t1.fromTo(navbar, 1, { y: "-10rem" }, { y: 0 });
    t1.fromTo(".header__item", 1.3, { x: "100rem" }, { x: 0, stagger: 0.2 });


    const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });

    t2.fromTo("#about", 1.2, { x: "-2rem", opacity: 0 }, { x: 0, opacity: 1 });
    t2.fromTo(".about", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
    t2.fromTo(".about__content__text", 0.5, { y: "1rem", opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2 });

    new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(t2)
        .addTo(controller);

    //Skills animation

    const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t3.fromTo("#skills", .5, { x: "-2rem", opacity: 0 }, { x: 0, opacity: 1 });
    t3.fromTo(".skills", .6, { opacity: 0 }, { opacity: 1 });
    t3.fromTo(".skills__card", 1, { y: "-3rem", opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 });
    t3.set(".skills__card", { clearProps: "all" });

    new ScrollMagic.Scene({
        triggerElement: "#skills",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(t3)
        .addTo(controller);

    // Portfolio animations

    const t4 = gsap.timeline({ defaults: { ease: Expo.InOut } });
    t4.fromTo("#portfolio", .5, { x: "-2rem", opacity: 0 }, { x: 0, opacity: 1 });
    t4.fromTo(".portfolio__card", 0.7, { x:"100rem", display: "none",  rotationX: 180, opacity: 0 }, { x: 0, display: "block", rotationX: 0, opacity: "1" , stagger: 0.2});
    t4.fromTo(".portfolio__more", 0.7, {  y:"100", opacity: 0 }, { y:0, opacity:"1" });
    t4.set(".portfolio", { clearProps: "all" });

    new ScrollMagic.Scene({
        triggerElement: "#portfolio",
        triggerHook: 0.5,
        reverse: false,
    })
        .setTween(t4)
        .addTo(controller);
}
animation();