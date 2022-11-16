player1_name=localStorage.getItem("player1");

plater2_name=localStorage.getItem("player2");

player1_score=0;

player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=plater2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHTML="turno para preguntar "+player1_name;
document.getElementById("playerquestion").innerHTML="turnopara responder "+plater2_name;
function enviar(){
palabra=document.getElementById("word").value;
palabra2=palabra.toLowerCase();

console.log(palabra2);
letra1=palabra2.charAt(1);
console.log(letra1);

posición2=Math.floor(palabra2.length/2);
letra2=palabra2.charAt(posición2);
console.log(letra2);

ultposición=palabra2.length-1;
ultletra=palabra2.charAt(ultposición);
console.log(ultletra);

remove_letra1=palabra2.replace(letra1,"_");
console.log(remove_letra1);

remove_letra2=remove_letra1.replace(letra2,"_");
console.log(remove_letra2);

remove_letra3=remove_letra2.replace(ultletra,"_");
console.log(remove_letra3);

question_word="<h4 id='mostrarp'>P. "+remove_letra3+ "</h4>";

input_box='<br>respuesta: <input type="text" placeholder="ESCRIBE TU RESPUESTA=>" id="inputbox">';

boton1='<br><button onclick="check()"class="btn btn-info"id="botón1">COMPROBAR=></button>';

row=question_word+input_box+boton1;

document.getElementById("output").innerHTML=row;

document.getElementById("word").value="";
}
question_turn="player1";

answer_turn="player2";

function check(){
    obtener_respuesta=document.getElementById("inputbox").value;
    
    o_r=obtener_respuesta.toLowerCase();
    console.log(o_r);

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
    }
 
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
    }
 
    document.getElementById("output").innerHTML = "";

}