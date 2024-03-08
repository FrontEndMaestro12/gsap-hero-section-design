function loaderr() {
    let number = 0;
    setInterval(() => {
        number = number + Math.floor(Math.random()*20);
        if (number<100) {
            document.querySelector("#loader h1").innerHTML = number+"%";
        } else {
            number = 100;
            document.querySelector("#loader h1").innerHTML = number+"%";
        }
    }, 100);
}
loaderr();
var  timeline = gsap.timeline();

timeline.to("#loader h1",{
duration:1,
delay:0.5,
onStart:loaderr()
});
timeline.to("#loader",{
    duration:1,
    delay:0.5,
    top:"-100vh"
    });
    
    


timeline.from("#header img ,#navbar a, #btn-container button,#header i",{
y:-100,
opacity:0,
duration: 0.6,
delay:0.3,
stagger:0.3,
});
timeline.from("#main h1",{
    opacity:0,
    y:90,
    duration:0.7,
    stagger:0.2
});
timeline.from("#main img",{
    opacity:0,

    duration:0.5,
    stagger:0.2,
});

//gsap code end basics 
gsap.to("#page22 h1", {
    transform: "translateX(-210%)",
    fontWeight:"200",
    scrollTrigger: {
        trigger: "#page22",
        scroller: "body",
        // markers: true,
        start: "top -15%",
        end: "top -200%",
        scrub: 2,
        pin: true
    }
});
