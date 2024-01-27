var inputBuy;
var inputSell;
var outputBuy;
var outputSell;
var jingDe;
var huoLi;

var biLi = 0.001425;
var heJiBuy;
var heJiSell;
var shuiJing = 0.003;
var shuiJingHe;
var chaJia;
var shouXu;

document.getElementById("Calculate").onclick = function() {calculate()};

document.getElementById("InputBuy").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("Calculate").click();
  }
});
document.getElementById("InputSell").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("Calculate").click();
  }
});

document.getElementById("InputBuy").onclick = function() {clearBuy(); clearSell()};
document.getElementById("InputSell").onclick = function() {clearBuy(); clearSell()};
