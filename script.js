function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco();

function logoAnimate() {
  var change = document.querySelector("#logo");
  var flag = 0;
  change.addEventListener("click", function () {
    if (flag === 0) {
      change.src = "jplogo.png";
      change.style.scale = 1.2;

      change.style.width = "160px";
      flag = 1;
    } else {
      change.src = "omlogo.png";
      change.style.scale = 1;
      flag = 0;
    }
  });
}

logoAnimate();

document.querySelector("#main").addEventListener("mousemove", function (dets) {
  document.querySelector(".img_top").style.width = dets.clientX + "px";
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    // markers:true,
    start: "35% 50%",
    end: "100% 50%",
    scrub: 1,
    duration: 0.2,
    // pin:true,
  },
});

tl5.to(".img", {
  width: "100vw",
  height: "100vh",
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    // markers: true,
    start: "5% 70%",
    end: "100%  50%",
    scrub: 1,
    // duration: 0.5,
  },
});

tl1.to(".header-container", {
  marginTop: "22vh",
});

tl1.to(".clipped-text", {
  scale: 1.5,
});

const containers = document.querySelectorAll(".items");
const heart = document.querySelectorAll(".items i");

containers.forEach((cont, index) => {
  cont.addEventListener("dblclick", function () {
    const heartIn = heart[index];
    heartIn.style.transform = " translate(-50%,-50%) scale(1.3)";
    heartIn.style.opacity = 0.7;

    setTimeout(function () {
      heartIn.style.transform = " translate(-50%,-50%) scale(1.2)";
    }, 3000);

    setTimeout(function () {
      heartIn.style.opacity = 0;
    }, 3000);
  });
});

const page4 = document.querySelector("#main");
const pointer = document.querySelector(".cursor");

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "scale(0.8)";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "scale(1)";
  });
});

page4.addEventListener("mousemove", function (dets) {
  pointer.style.left = dets.x + "200px";
  pointer.style.top = dets.y + "250px";
});

// function instaStory(){

//   var arr = [
//     {
//       dp: "https://img.freepik.com/premium-photo/portrait-beautiful-japanese-women-street_825367-3975.jpg",
//       story:
//         "https://images.unsplash.com/photo-1564632302631-c3670e71f579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
//     },

//     {
//       dp: "https://tensor-sf-sig.7022ae40757f8d53295a57619de9b364.r2.cloudflarestorage.com/workspace/generation/729896719763961614/2024-06-28/51271784-6176-4e0c-90ba-f8ea8b78700f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0bef8a003dc93fc4d7030c9da79271ff%2F20240628%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20240628T042436Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=df4141c0b409bf5cd624c9d1bf4fdf7cadc6728f0203f5c7ac2ecbc012d9e1b6",
//       story:
//         "https://images.unsplash.com/photo-1564632302631-c3670e71f579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
//     },

//     {
//       dp: "https://cdn.pixabay.com/photo/2020/09/13/17/28/portrait-5568884_1280.jpg",
//       story:
//         "https://images.unsplash.com/photo-1564632302631-c3670e71f579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
//     },

//     {
//       dp: "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=1920,f=jpeg,q=85/model_showcase/643529480104735756/6e7c6501-471b-7ecb-396b-533eb8293e12.png",
//       story:
//         "https://images.unsplash.com/photo-1564632302631-c3670e71f579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
//     },
//   ];

//   var clutter = "";
//   var storiyan= document.querySelector("#storiyan")
//   var fullscreen= document.querySelector("#fullScreen")
//   arr.forEach(function (elem, indx) {
//     clutter += ` <div class="story">
//                 <img id="${indx}" src="${elem.dp}" alt="">
//               </div>
//               `;
//   });

//   storiyan.innerHTML=clutter

//   storiyan.addEventListener("click",function(dets)
//   {
//     fullscreen.style.display="block"

//     fullscreen.style.backgroundImage=`url(${arr[dets.target.id].story})`

//     setTimeout(function(){

//       fullscreen.style.display="none"

//     },3000)
//   })

// }

// instaStory()
