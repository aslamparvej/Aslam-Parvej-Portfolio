// Cursor Glow Script
const cursorGlowElement = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e)=>{
    cursorGlowElement.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


