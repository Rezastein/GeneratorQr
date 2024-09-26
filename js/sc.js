document.getElementById("pushdata").onclick = function (e) {
  let name = document.getElementById("names").value;
  let domi = document.getElementById("domi").value;
  let notelp = document.getElementById("numbers").value;
  let agent = document.getElementById("agent").value;
  let qr =
    name +
    "-" +
    domi +
    "-" +
    notelp +
    "-" +
    agent +
    " (MENDAPATKAN PROMO DISKON 10 JUTA GRAND LAUNCHING)";
  genQr(qr);
};
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");

function genQr(inputText) {
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputText;
}
