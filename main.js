// function capslocker(){
//     const textarea = document.getElementById('text');
//     textarea.value = textarea.value.toUpperCase();
// }

// function result(){
//     const hasil = document.getElementById('text').value;
//     alert(hasil);
// }

// function clear(){
//     const textarea = document.getElementById('text');
//     textarea.select();
//     textarea.value = '';
//     alert("Text has been cleared");
// }

// function copy(){
//     const textarea = document.getElementById('text');
//     textarea.select();
//     document.execCommand("copy");
//     alert("Text copied to clipboard");
// }

// function start(){
//     const start = document.getElementById('start');
//     start.style.display = 'none';
// }


let submitBtn = document.getElementById('submitBtn');
console.log(submitBtn);

function AngryConvert() {
    let textawal = document.getElementById('userInput').value;
    let angryText = textawal.toUpperCase();


    document.getElementById('result').innerText = angryText;
    console.log(angryText);

}

submitBtn.addEventListener('click', AngryConvert)

function copy(){
     const textarea = document.getElementById('COPY');
     textarea.select();
    document.execCommand("copy");
     alert("Text copied to clipboard");
 }

