
 ludogame = () => {

    const player1 = Math.floor(Math.random() * 6) + 1;
    const player1dice = `dice${player1}.png`;
    document.getElementById('check1').setAttribute('src', player1dice)


    const player2 = Math.floor(Math.random() * 6) + 1;
    const player2dice = `dice${player2}.png`;
    document.getElementById('check2').setAttribute('src', player2dice)




    if (player1 > player2) {

        document.querySelector("h1").innerText = " Player 1 is Winner"
        // document.querySelector("h1").style.fontSize = " 3rem"
    }
    else if (player1 === player2) {
        document.querySelector("h1").innerText = "Match Drawn!"
        // document.querySelector("h1").style.fontSize = " 2rem"

    }
    else {
        document.querySelector("h1").innerText = "Player 2 is Winner"
        // document.querySelector("h1").style.fontSize = " 3rem"
    }




}
