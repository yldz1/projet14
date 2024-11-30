function changeText() {
    const paragraph = document.getElementById("text");
    paragraph.innerText = "Paragraf metni değiştirildi!";
}//bu kodda metini değiştir butoonuna basıyorsun ve metni değiştiriyor.

function addHTML() {
    const content = document.getElementById("content");
    content.innerHTML = "<h2>Yeni Başlık</h2><p>Yeni bir paragraf eklendi.</p>";
}

function showinput() {
    const input = document.getElementById("username").value;
    const output = document.getElementById("output");
    output.innerText = "girdiğiniz metin bu olucak beybiler" + input;

}

function changeBackground() {
    const box = document.getElementById("box");
    box.style.backgroundColor = "lightblue";
    box.innerText = "Arka plan değişti!";
}//bu kodlar arka plan rengini değiştirmeye yarıyor ve baya iyiymiş ya beybisi.


function addListItem() {
    const list = document.getElementById("list");
    list.innerHTML += "<li>Yeni Liste Elemanı</li>";
}




