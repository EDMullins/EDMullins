document.addEventListener("DOMContentLoaded", () => {
    console.log("document succesfully loaded");
    document.getElementById('btnClicky').addEventListener('click', btnClicky);
});

function btnClicky () {
    console.log('in btnClicky()')
    document.getElementById('btnClicky').style.transform = 'rotate(15deg)'
}