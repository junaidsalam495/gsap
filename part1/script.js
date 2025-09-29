// Topic Basic
// gsap.to -- initial to final
// gsap.from -- final to initial
// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     repeat: -1, // -1 yanii infinite bar chalegii animations
//     yoyo: true // yoyo yani box ana jana dono karegii
// });
// gsap.from("#box2", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
// });

// gsap.from("h1", {
//   opacity: 0,
//   y: 30,
//   duration: 2,
//   delay: 1,
//   stagger: 1, // stagger agar h1 kafii bar hoto sbko aik aik krke chalne ke kam karega ye
// });

// Topic Time Line

var tl = gsap.timeline();

tl.from("h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});

tl.from("h1", {
  y: 20,
  duration: 1,
  opacity: 0,
  scale: 0.2,
});



