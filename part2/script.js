// Topic Scroll trigger

// gsap.from("#page2 #box", {
//     opacity: 0,
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 2, // scrub yani ke scroll karunga animations start hoo jaegii scroll base me chalegii 
//         pin: true, // scolling ke time mera element whii rukh jaega
//     }
// })

gsap.to("#page2 h1", {
    transform: "translateX(-160%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
    }
})


gsap.to("#page3 #box", {
    width: "100%",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        markers: true,
        start: "top 50%",
        scrub: 2,
    }
});

