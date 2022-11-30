const img=document.querySelector("img");
const cursor=document.querySelector(".cursor");
img.addEventListener("mousemove",function(dets){
    // console.log("hety");
    // console.log(dets.x);
    const rotX= 58 - dets.x/11;
    const rotY= Math.abs(rotX)
    console.log(rotX,rotY);
    img.style.transform=`rotateX(${rotX}deg) rotateY(${-rotY}deg)`;
})
img.addEventListener("mouseleave",function(dets){
    // console.log("hety");
    // console.log(dets.x);
    setTimeout(() => {
        img.style.transform=`rotateX(0deg) rotateY(0deg)`;
    }, 1000);
    
})
document.addEventListener("mousemove",function(dets){
    cursor.style.left= `${dets.x}px`
    cursor.style.top= `${dets.y}px`
})