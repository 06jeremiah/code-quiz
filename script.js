var startbtn = document.getElementById("#start-btn");
var countDown = document.getElementById("#timer");
var aBtn = document.getElementById("#a-button");
var bBtn = document.getElementById("#b-button");
var cBtn = document.getElementById("#c-button");

var score = 0;
var currentQues = 0;

//List of Questions
var questions =[{
    questions: "where do you place the opening anc closing script tags on the page?",
    aBtn: "between the body tag",
    bBtn: "between the h1 tag",
    cBtn: "between the title tag",
    answer: "aBtn"
},
  {
    questions: "what do you use to define a varibale and it can't be re-declared?",
    aBtn: "else if",
    bBtn: "let",
    cBtn: "const",
    answer: "cBtn"

  }, 
{   
    questions: "which is not JavaScript date type?",
    aBtn: " number",
    bBtn: "string",
    cBtn: "function",
    answer: "cBtn"


}];












startbtn.addEventListener("click", function(){

})
