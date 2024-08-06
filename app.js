// add button
const triggerGong = document.getElementById('triggerId');
const uniqueId = document.getElementById('uniqueId');
const targetId = document.getElementById('targetId');
        
triggerGong.addEventListener('click', () => {
        // Trigger the supergong
        targetId.innterHTML = 150000;
        setTimeout(function(){
                console.log("Sending Super Gong Trigger")
        }, 2000);
        
        uid = +uniqueId;
        uniqueId.innerHTML = uid + 1;
        targetId.innterHTML = 500000;
        setTimeout(function(){
                console.log("Reseting Super Gong Trigger")
                targetId.innterHTML = 150000;
        }, 2000);
});


