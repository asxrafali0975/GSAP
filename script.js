
gsap.from(".box1", {
    rotate: 360,
    x: 700,
    delay: 1,
    duration: 2
});

gsap.from(".page2 .box2", {  //page2 ke andar ka box
    rotate: 360,
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 .box2", 
        scroller:"body",
        markers:"true",
        start:"top 50%",
        end:"top 70%",
        scrub:5
       
    
    }
});

gsap.from(".box3", {
    rotate: 360,
    x: 700,
    duration: 2,
    scrollTrigger: {
        trigger: ".box3",
       
    }
});
