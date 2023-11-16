var cr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

var h4all = document.querySelectorAll("#nav h4")

    // h4all.forEach(function(elem){
    //     elem.style.addEventListener("mouseenter",function(){
    //         cr.style.scale = 3;
    //         cr.style.backgroundColor="transparent";
    //         cr.style.border = "2px solid #fff"
    //     })
    // })
document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x + "px"
    cr.style.top = dets.y + "px"
})

document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x -200 + "px"
    blur.style.top = dets.y -200 + "px"
})
// this is used for coloring change of navbar into black while scrolling
gsap.to("#nav",{
    backgroundColor : "#000",
    duration: 0.5,
    height:"110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        marker: true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // multiple elements ko ek ek kar ke chal rahe h
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        marker:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // multiple elements ko ek ek kar ke chal rahe h
    // stagger:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        marker:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})