
(function () {
    console.log("JAVA SCRIPT RUNNING!")
    // VARIABLES
	const bgVideo = document.querySelector('.bg-vid');
   
    



    // FUNCTIONS
    function videoSpeed(videoElement, speed) {
        videoElement.playbackRate = speed;
        console.log("Background Speed Slow Mo")
    }


    // EVENTS
    videoSpeed(bgVideo, 0.5);
		
})();

(function () {
    
    const skillPath = ["Developer_", "Designer_"];
    let cursor = gsap.to('.blinkCursor', {opacity: 0, ease:"power2.inOut", repeat:-1})
    cursor;
    let cursors = gsap.to('#cta-blink', {opacity: .8, ease:"power2.inOut", repeat:-1, repeatDelay:.5})
    cursors;

    let textEdit =gsap.timeline({repeat: -1})
    skillPath.forEach(skillPath => {
        let tl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay:2})
        tl.to('.text', {duration:1, text: skillPath})
        textEdit.add(tl)
    })
		
})();
