function actualizarpuntuación(){
     score=score+1
    document.getElementById("score").innerHTML=score
}
function guardar(){
    localStorage.setItem("score",score);
}
function siguientepagina(){
    window.location="login.html"

}
function adduser(){
    var player1=document.getElementById("player1").value;
    var player2=document.getElementById("player2").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location="gamepage.html"
}
