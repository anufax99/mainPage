// lenis for smooth scrolling

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//cursor animations
let cursor = document.querySelectorAll("#cursor");
window.addEventListener("mousemove",(events)=>{
    gsap.to(cursor,{
        x:events.x+5,
        y:events.y+8,
        duration:.5,
        ease:"back.out",
    })
})

window.addEventListener("",(events)=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0,
        duration:.5,
        ease:"back.out",
    })
})

let headingsEnter = document.querySelector("#homemain .headings");
headingsEnter.addEventListener("mouseenter",() =>{
    gsap.to(cursor, {
        scale:0,
        opacity:0,
        ease:"Power2.easeIn",
        scrub:true
    })
})
headingsEnter.addEventListener("mouseleave",() =>{
    gsap.to(cursor, {
        scale:1,
        opacity:1,
        ease:"Power2.easeIn",
        scrub:true
    })
})


// shery and gsap animations and others
// for scrolling left docs part

Shery.textAnimate("#homemain div h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 50,
    duration: .4,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
});

gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger: "#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger: ".last",
        scrub:true
    },
    y: "-300%",
    ease: Power1,
    
})

Shery.hoverWithMediaCircle("#homemain .headings h1", {
    videos: ["./assets/video-1.mp4", "./assets/video-2.mp4", "./assets/video-3.mp4"],
    
});

Shery.hoverWithMediaCircle(".fheading", {
    videos: ["./assets/video-4.mp4"],
    
});



// home timeline
let HomePage = document.querySelector("#home");
let t3 = gsap.timeline({
    scrollTrigger:{
        trigger:HomePage,
        start:"top top",
        end:"bottom top",
        scrub:true,
    }
})

let para1 = document.querySelector("#homelast");
gsap.from(para1,{
    scrollTrigger:{
        trigger:HomePage,
        start:"top 88%%",
        end:"bottom bottom",
        scrub:true,
    },
    xPercent:-100,
    opacity:0
})



t3.fromTo(HomePage,{backgroundColor:"rgb(193 255 254)"},{backgroundColor:"rgb(255, 255, 246)"})


// featured timeline
let featured = document.querySelector("#featured");
let t1 = gsap.timeline({
    scrollTrigger:{
        trigger:featured,
        start:"top center",
        end:"bottom top",
        scrub:true,
    },
})
t1.fromTo(featured,{backgroundColor: "white"},{backgroundColor: "rgb(255, 255, 202)"})
// t1.to(featured,{backgroundColor: "white"})

// connecting with left dics part with rigth

let sections = document.querySelectorAll(".fleftelm")

Shery.imageEffect(".images", {
    style: 3,
    cofing: {"uFrequencyX":{"value":13.74,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":9.92,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32.74},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6507068770903061},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":4},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}, "onMouse": {"value"  : 1}},

    slideStyle: (setScroll) => {
      sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger:section,
            scrub:true,
            start:"top top",
            onUpdate: function(prog){
                setScroll(prog.progress+index)
            }
        })
      })
    },
  });

let menuBarActive = document.querySelector(".menuScrollBar");
let eg = document.querySelector(".container");
eg.addEventListener("click",() =>{
    eg.classList.toggle("example");
    eg.classList.toggle("containerActive")
    menuBarActive.classList.toggle("menuScrollBarActive");
})

if(menuBarActive.className === "menuScrollBarActive"){
    console.log("hi");
}




// button interactions

let magneto = document.querySelector(".btndiv .magneto");
let magnetoText = document.querySelector(".btndiv .magneto span");

const activateMagneto = (movement) => {
    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 40;
    const magnetoTextStrength = 80;

    const newXP = ((movement.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
    const newYP = ((movement.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

    gsap.to(magneto,{
        duration:1,
        x:newXP*magnetoStrength,
        y:newYP*magnetoStrength,
        ease:Power4.easeOut,
    }) 
    
    gsap.to(magnetoText,{
        duration:1,
        x:newXP*magnetoTextStrength,
        y:newYP*magnetoTextStrength,
        ease:Power4.easeOut,
    })
} 
const reseteMagneto = (movement) => {

    gsap.to(magneto, {
        x:0,
        y:0,
        duration:1,
        esae: Elastic.easeOut,
    })


    gsap.to(magnetoText, {
        x:0,
        y:0,
        duration:1,
        esae: Elastic.easeOut,
    })

} 

magneto.addEventListener("mousemove",activateMagneto);
magneto.addEventListener("mouseleave",reseteMagneto);


// button interactions ends


// logoAnimations starts

let LogoTl = gsap.timeline({

})

// line
LogoTl.fromTo(".line",{transformOrigin: "50% 50%",x:1,scale:0},{scale:1.2, duration: .6, ease: "Power3.out"})

// trac and cart
LogoTl.fromTo(".trac",{x:40, opacity:0},{opacity:1 ,x: -5, scale:1, duration: .6, ease: "Power4.inOut"})
LogoTl.fromTo(".cart",{x:-40, opacity:0},{opacity:1 ,x: 5, scale:1, duration: .6, ease: "Power4.inOut"})