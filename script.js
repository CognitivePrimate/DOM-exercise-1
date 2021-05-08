function main(){
    const grow = document.getElementById("grow-me");
    grow.classList.add("big");
    
    const byeBye = document.getElementById("shrink-me");
    byeBye.classList.remove("big");

    const listLog = document.querySelectorAll("li");
    listLog.forEach(li => console.log(li.textContent));

    const zelda = document.querySelector(".link");
    zelda.setAttribute("href", "http://example.com");
    zelda.setAttribute("target", "_blank");
    zelda.innerText = "somehwere.";

    const camo = document.getElementById("hide-me");
    camo.style.display = "none";

    const missouri = document.getElementById("show-me");
    missouri.style.display = "block";

    let probablyNotARobot = document.getElementById("name");
    let welcome = document.querySelector("h1");
    welcome.innerText = `Welcome, ${probablyNotARobot.value}!`;

}


