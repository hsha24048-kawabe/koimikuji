const fortunes=[
    "大吉　💖　素敵な出会いがあるかも！",
    "中吉　☺　少し勇気を出すとよいことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "大凶　😢　残念", 
];

const button = document.getElementById("a");
const result = document.getElementById("b");

button.addEventListener("click", function(){
  const randomNumber = Math.floor(Math.random() * fortunes.length);

　const resultText=fortunes[(randomNumber)];

  result.textContent=fortunes[(randomNumber)];
  if(resultText.includes("大吉")) {
     result.style.color="red";
       }
  else if(resultText.includes("大凶")) {
     result.style.color="blue";
       }
  else if(resultText.includes("中吉")) {
     result.style.color="orange";
       }
  else if(resultText.includes("小吉")) {
     result.style.color="green";
       }
})