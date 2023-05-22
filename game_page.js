var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;


function send()
{
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
   
    var question_word = "<h4 id='word_display'> Q. " +no1+" x "+no2+"=?</h4>";
    var input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
    var check_btn = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
    var row = question_word + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";
function check()
{
    
    answer = no1 * no2;
    console.log(answer);
    pa = document.getElementById("input_check_box").value;
    console.log(pa);
    if(answer == pa) 
    {
        console.log(pa);
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") 
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } 
    else 
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") 
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } 
    else 
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}