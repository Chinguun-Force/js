function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function Ball(n){
    for(let i=0; i<n; i++){
        const ballElRef = document.createElement("div")
        ballElRef.innerText = i;
        ballElRef.style.height = 50 + "px"
        ballElRef.style.width = 50 + "px"
        ballElRef.style.borderRadius = 50 + "%"
        // ballElRef.style.backgroundColor = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"
        ballElRef.style.alignContent = "center"
        ballElRef.style.textAlign = "center"

        document.body.appendChild(ballElRef)
    }

}

function ChangeBg(){
    const BodyElRef = document.getElementById("test").style.backgroundColor = "rgb(" + getRandomInt(256) + "," + getRandomInt(256) + "," + getRandomInt(256) + ")";
    return BodyElRef;
}

