const button = document.getElementById("searchBoxDropdownClick");

button.addEventListener('click', () => {
    const dropDown = document.getElementById("searchBoxDropdown");
    if(dropDown.style.display === "none"){
        dropDown.style.display = "flex";
        document.getElementById('dropDownArrow').innerText = '⌃';
    } else {
        dropDown.style.display = "none";
        document.getElementById('dropDownArrow').innerText = '⌄'
    };
});


const comPic = document.getElementById('commersePicture');
const comBtns = document.getElementsByClassName('comBtn')
let comBtnNum = 0;
function comBtnHover(num){
    const pictures = ['1.png','2.jpeg','3.jpeg','4.png','5.jpeg','6.jpeg'];
    comPic.innerHTML = "<img src='commerse/" + pictures[num] + "' height = '450px width = '100%'>" ;
    comBtnNum = num;
}

setInterval(()=>{
    comBtnHover(comBtnNum);
    if(comBtnNum<5){
        comBtnNum += 1;
    } else {
        comBtnNum = 0;
    }
}, 2000);