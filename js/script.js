function AbrirLogin() {
    document.getElementById("login").style.display = "block";
  }
  
  function FecharLogin() {
    document.getElementById("login").style.display = "none";
  }

  // parte carrossel
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 5000)

function proximaimg(){
    cont++

    if(cont >5){
      cont = 1  
    }

    document.getElementById('radio'+cont).checked = true
}