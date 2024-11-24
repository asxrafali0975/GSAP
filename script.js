//  lecture 1

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


//  lecture 2



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



//  lecture 3

gsap.to(".page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".page2",//pin ke time hamesha parent to trigger karenge
        scroller:"body",
        scrub:2,
        start:"top 0%",
        end:"top -100%",
        pin:true
    }
})





//  lecture 4


var initialpath = `M 10 100 Q 500 100 1000 100`
var finalpath = `M 10 100 Q 500 100 1000 100 `

let string = document.querySelector("#string")
string.addEventListener("mouseenter", (value) => {
    initialpath = `M 10 100 Q ${value.x} ${value.y} 1000 100`
    gsap.to("svg path ", {
        attr: { d: initialpath },
     duration:0.8,
        ease:"elastic.out(1,0.2)"

    })
})
string.addEventListener("mouseleave", (value) => {

    gsap.to("svg path ", {
        attr: { d: finalpath },
        duration:0.8,
        ease:"elastic.out(1,0.2)"
      


    })

})


//  lecture 5


window.addEventListener("wheel",(x)=>{
    if (x.deltaY>0){

        gsap.to(".marque",{
            transform:"translate(-150%)",
            scrollTrigger:{
            scroller:"body",
            scrub:2,
            start:"top 0%",
            
            }
        
        })

        gsap.to("img",{
            rotate:180,
            scrub:2
         
         })
        
        

    }
        else if(x.deltaY<0) {


            gsap.to(".marque",{
                transform:"translate(150%)",
                scrollTrigger:{
                scroller:"body",
                scrub:2,
                start:"top 0%",
                
                }
            
            })

            gsap.to("img",{
               rotate:360,
               scrub:2,
            
            })
            
            

        }
})
 
 