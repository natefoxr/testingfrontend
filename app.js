// add button
const triggerGong = document.getElementById('triggerId');
        
triggerGong.addEventListener('click', () => {
        // Add Variables
        var targetId = document.getElementById('targetId');
        // Trigger the supergong
        targetId.innterHTML = 150000;
        setTimeout(function(){
                console.log("Sending Super Gong Trigger")
        }, 2000);

        targetId.innerHTML = 500000;
        setTimeout(function(){
                console.log("Reseting Super Gong Trigger")
                targetId.innterHTML = 150000;
        }, 2000);
});


