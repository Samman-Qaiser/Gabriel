function loader(){
var tl = gsap.timeline();


tl.to(".loader h4", {
    opacity: 1,
    duration: 0.07,
    stagger: {
        each: 0.14, //0.07 to show + 0.07 to hide = 0.14
        repeat: 1,
        yoyo: true
    }
})
    .to(".loader", {
        display: "none",
    })
    .to(".cntr-p", {
        onStart: function () {
          
            $(".p2") .scramble(4000, 20, "alphabet", true);


        }
    },"animi")
    .to(".cntr-p", {
        onStart: function () {
          
            $(".p1") .scramble(4000, 20, "alphabet", true);
            

        }
    },"animi")
    .to(".cntr-p", {
        onStart: function () {
          
            $(".p3") .scramble(4000, 20, "alphabet", true);
            

        }
    },"animi")
    .to(".cntr-p", {
        onStart: function () {
          
            $(".p4") .scramble(4000, 20, "alphabet", true);
            

        }
    },"animi")
    .to(".cntr-p",{
        justifyContent:"space-between",width:"100%"
    })

}
function fixed_content(){
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#one",
        pin: true,
       
        start: "top 90%",
        end: "top 0%",
        scrub: 2
    }
});
tl2.to(".flex-p-content", {
    scale: "0.8"
})
    .to("#one-text", {
        top: "50%"
    })
}



function pages(){

var tl=gsap.timeline({
    scrollTrigger: {
        trigger: "#img-one",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
      
    }
})
    tl.to("#img-one", {
        backgroundSize: "50%",
    },"animi2");
    tl.to("#one-text",{
      top:"6%"
    },"animi2")

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-two",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
     
    }
})
    .to("#img-two", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-three",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-three", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-four",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-four", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-five",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-five", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-six",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-six", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#img-seven",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to("#img-seven", {
        backgroundSize: "50%",
    });

gsap.timeline({
    scrollTrigger: {
        trigger: "#last",
        start: "0% 90%",
        end: "200% 90%",
        scrub: true,
        // markers: true,
    }
})
    .to(".flex-p-content", {
        scale: "1.2",
    });


document.querySelector("#img-one").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#dfd2be";
})

document.querySelector("#img-one").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-two").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#1a354e";
})

document.querySelector("#img-two").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
})


document.querySelector("#img-three").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#b11215";
  })
  
  document.querySelector("#img-three").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  document.querySelector("#img-four").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#062529";
  })
  
  document.querySelector("#img-four").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  document.querySelector("#img-five").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#b05d22";
  })
  
  document.querySelector("#img-five").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  document.querySelector("#img-six").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#281069";
  })
  
  document.querySelector("#img-six").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
  
  
  document.querySelector("#img-seven").addEventListener("mouseenter", function () {
    document.querySelector("html").style.backgroundColor = "#333";
  })
  
  document.querySelector("#img-seven").addEventListener("mouseleave", function () {
    document.querySelector("html").style.backgroundColor = "#000";
  })
  
}
pages()
loader()