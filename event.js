document.getElementById("click").addEventListener('click', () => { document.getElementById('yourImageId').style.display = 'block';
    setTimeout(() => {document.getElementById('yourImageId').style.display = 'none';},500)
}
);


document.getElementById('bigbutton').addEventListener('click', () => { document.getElementById('bigbuttonimg').src = 'image/pinkbutton.png',
document.getElementById('tekst').innerText = 'Ups Zepsuł Się';})

