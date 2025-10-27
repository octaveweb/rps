let codeContainer = document.getElementById("code-container");



function rsp(user, ai) {
    if (user == ai) return "Draw";

    if (user == "sisor" && ai == "paper") return `You Won!`
    if (user == "rock" && ai == "sisor") return `You Won!`
    if (user == "paper" && ai == "rock") return `You Won!`

    let response = codeContainer.appendChild(textCreate("code-bg code-sub", "Ai Won! Better luck next time Lol(:"))

    return response;
}




function grit(mass) {
    codeContainer.appendChild(textCreate("code-bg-grit code-titel", `${mass}`));
}
function inpuTaken() {

    return ans = prompt("Choose rock, papar or sisor")
}

function ai() {
    let num = parseInt(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "sisor"
            break;

        default:
            return codeContainer.appendChild(textCreate("code-bg code-sub", "Ai is now Dead!"));
            break;
    }

}

function textCreate(class_name, text) {
    const para = document.createElement('p');
    let newPara = para;
    newPara.classList = `${class_name}`;
    newPara.innerHTML = `${text}`

    return newPara;
}
function game() {
    let win = 0;
    let totalWin = document.getElementById("count");
    let one_time_paly = 1;


    if (true) {
        user_ans = inpuTaken();
        ai_respoce = ai();

        codeContainer.appendChild(textCreate("code-bg code-sub", `You:${user_ans}, Ai:${ai_respoce}`));

        let finalAns = rsp(user_ans, ai_respoce);
        console.log(finalAns);

        if (finalAns.innerText == "Draw") {
            codeContainer.appendChild(textCreate("code-bg code-sub-draw", finalAns));
        }
        else if (finalAns.innerText == "Ai Won! Better luck next time Lol(:") {
            codeContainer.appendChild(textCreate("code-bg code-sub-fail", finalAns));
        }
        else if (finalAns.innerText == "You Won!") {
            codeContainer.appendChild(textCreate("code-bg code-sub-success", finalAns));
            ++win;
        }
        else {
            codeContainer.appendChild(textCreate("code-bg code-sub-success", finalAns));
        }
        --one_time_paly
    }
    totalWin.appendChild(win);
}

function objectErrorFix() {
    let box = document.getElementById("code-container");
    let kids = box.querySelectorAll("*");

    kids.forEach(el => {
        if (el.textContent.includes("[object HTMLParagraphElement]")) {
            el.textContent = "Try again";
        }
    });
}
function main() {


    let btn = document.getElementById("btn");

    setInterval(() => {
        objectErrorFix()
    })




    grit("Welcome to the game!");
    btn.addEventListener("click", () => {
        game();
    })







}
main();





