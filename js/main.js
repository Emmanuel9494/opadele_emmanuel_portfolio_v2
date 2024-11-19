// INDEX JS
(function () {
    // Check if the current page is 'intro.html'
    if (window.location.pathname.includes("index.html")) {

        console.log("JAVA SCRIPT RUNNING!");
        
        // VARIABLES
        const bgVideo = document.querySelector('.bg-vid');

        // GSAP ANIMATION
        const skillPath = ["Developer_", "Designer_"];
        let cursor = gsap.to('.blinkCursor', {opacity: 0, ease:"power2.inOut", repeat:-1});
        cursor;
        

        let textEdit = gsap.timeline({repeat: -1});
        skillPath.forEach(skillPath => {
            let tl = gsap.timeline({
                repeat: 1, 
                yoyo:true, 
                repeatDelay:2});
            tl.to('.text', {
                duration:1, 
                text: skillPath});
                textEdit.add(tl);
        });

        // FUNCTIONS
        function videoSpeed(videoElement, speed) {
            videoElement.playbackRate = speed;
            console.log("Background Speed Slow Mo");
            
        }
            videoSpeed(bgVideo, 1.19);
       



        // EVENTS
        
}})();


// INDEX JS
(function () {
    // Check if the current page is 'index.html'
    if (window.location.pathname.includes("index.html")) {

        console.log("JAVA SCRIPT RUNNING!");
        
        // VARIABLES
        const menuButton = document.querySelector(".container-mobile-top-logo");
        const menuNav = document.querySelector("#head-nav");
        const works = document.querySelector("#work-select");
        const themeSelect = document.querySelector("#theme-select");
        const subMenu1 = document.querySelector(".sub-menu1");
        const subMenu2 = document.querySelector(".sub-menu2");
        

        // GSAP ANIMATION
       
        

        // FUNCTIONS
        function swapMenuIcon() {
            menuButton.classList.toggle("container-mobile-top-logo-swap");
            menuNav.classList.toggle("mb-nav");
            console.log("Menu Triggered");
            if (menuButton.classList.contains("container-mobile-top-logo-swap")) {
                // Slide down and fade in
                gsap.fromTo("#head-nav", {
                    y: -50,      
                    opacity: 0       
                }, {
                    duration: 2,    
                    y: 0,            
                    opacity: 1,      
                    ease: "power2.out" 
                });
            } 
    }

        function revealWorks() {
            subMenu1.classList.toggle("show");
    
        }
        function revealThemes() {
            subMenu2.classList.toggle("show");
        }


       

        // EVENTS
        menuButton.addEventListener("click", swapMenuIcon);
        works.addEventListener("click", revealWorks);
        themeSelect.addEventListener("click", revealThemes);
       
}})();