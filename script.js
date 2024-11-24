 gsap.from("div",{
    x:1000,
    duration:2,
    rotate:380,
    backgroundColor:"blue",
    borderRadius:"50%",
    opacity:0,
    stagger:1
})

gsap.to("h1",{
    x:1000,
    duration:3,
   stagger:0.4,  // can be -1 
    repeat:Infinity,
    yoyo:true

})