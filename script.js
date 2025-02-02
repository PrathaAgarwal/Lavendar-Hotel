gsap.from(".a-block", {
    x:-50,
    opacity:0,
    duration: 3,
    scrollTrigger: {
        trigger: ".a-block",
        scroll:"body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from(".b-block", {
    x:50,
    opacity:0,
    duration: 3,
    scrollTrigger: {
        trigger: ".b-block",
        scroll:"body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from(".c-block", {
    x:-50,
    opacity:0,
    duration: 3,
    scrollTrigger: {
        trigger: ".c-block",
        scroll:"body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from(".d-block", {
    x:50,
    opacity:0,
    duration: 3,
    scrollTrigger: {
        trigger: ".d-block",
        scroll:"body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from(".e-block", {
    x:-50,
    opacity:0,
    duration: 3,
    scrollTrigger: {
        trigger: ".e-block",
        scroll:"body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from(".f-block", {
    x:50,
    opacity:0,
    duration: 3,
    scrollTrigger: {
        trigger:".f-block",
        scroll:"body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2
    }
})

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", function(dets){
   gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        duration:0.1,
        ease: "power1.out",
   })
});
var htext= document.querySelector(".herotext");
console.log("welcomneee", htext);
window.addEventListener("scroll" , function(dets){
   gsap.to(".herotext", {
    x:-600,
    duration:2,
    opacity:1,
   })
});