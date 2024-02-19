

let buy_button = document.querySelectorAll('.buy');


for (let i = 0; i < buy_button.length; i++) {
    buy_button[i].addEventListener("click", () => {
        alert("Ваш инивидуальный напиток будет сделан!")
    });
}