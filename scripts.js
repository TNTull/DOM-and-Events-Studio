//Teresa Tull worked on this 8-13-2022 Chapter 23.8 Studio DOM and events

// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.onload = function () {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoff.onclick = function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerText = 10000;
        }
    };

    landing.onclick =  function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerText = 0;
        document.getElementById("rocket").style.position.left="10px";
    };

    
    missionAbort.onclick =  function (event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerText = 0;
            document.getElementById("rocket").style.position.left="10px";
        }
    };

    up.onclick = function (event) {
        flightStatus.innerText = "Changing course.";
        spaceShuttleHeight.innerText = 10000;
        document.getElementById("rocket").style.top="10px";
    };

    down.onclick = function (event) {
        flightStatus.innerText = "Changing course.";
        spaceShuttleHeight.innerText = 0;
        document.getElementById("rocket").style.bottom="10px";
    };

    right.onclick = function (event) {
        flightStatus.innerText = "Changing course.";
        document.getElementById("rocket").style.right="10px";
    };

    left.onclick = function (event) {
        flightStatus.innerText = "Changing course.";
        document.getElementById("rocket").style.left="10px";
    };


};
