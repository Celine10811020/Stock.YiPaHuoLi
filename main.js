function calculate()
{
  inputBuy = document.getElementById("InputBuy").value;
  inputSell = document.getElementById("InputSell").value;
  inputNumber = 1;

  if(inputBuy == "")
  {
    huoLi = 0;
    outputBuy = inputSell;

    while(parseFloat(huoLi) < 0.01)
    {
      if(parseFloat(outputBuy) < 100)
      {
        outputBuy = parseFloat(outputBuy) - 0.5;
      }else
      {
        if(Number.isInteger(outputBuy) == false)
        {
          outputBuy = parseFloat(outputBuy) - 0.5;
        }

        outputBuy = parseFloat(outputBuy) - 1;
      }

      heJiBuy = parseFloat(biLi) * parseFloat(outputBuy) * parseFloat(inputNumber);
      heJiSell = parseFloat(biLi) * parseFloat(inputSell) * parseFloat(inputNumber);

      chaJia = parseFloat(inputSell) - parseFloat(outputBuy);
      shouXu = parseFloat(heJiBuy) + parseFloat(heJiSell);
      shuiJingHe = parseFloat(shuiJing) * parseFloat(inputSell);

      jingDe = parseFloat(chaJia) - parseFloat(shouXu) - parseFloat(shuiJingHe);
      huoLi = parseFloat(jingDe) / parseFloat(outputBuy);
    }

    document.getElementById("JiaGe").innerHTML = "回補價  " + outputBuy.toFixed(1);
    document.getElementById("JingDe").innerHTML = "淨得  " + jingDe.toFixed(3);
    document.getElementById("HuoLi").innerHTML = "獲利  " + huoLi.toFixed(3);

    document.getElementById("JiaGe").style.color = "red";

  }else if(inputSell == "")
  {
    huoLi = 0;
    outputSell = inputBuy;

    while(parseFloat(huoLi) < 0.01)
    {
      if(parseFloat(outputSell) < 100)
      {
        outputSell = parseFloat(outputSell) + 0.5;
      }else
      {
        if(Number.isInteger(outputSell) == false)
        {
          outputSell = parseFloat(outputSell) + 0.5;
        }
        
        outputSell = parseFloat(outputSell) + 1;
      }

      heJiBuy = parseFloat(biLi) * parseFloat(inputBuy) * parseFloat(inputNumber);
      heJiSell = parseFloat(biLi) * parseFloat(outputSell) * parseFloat(inputNumber);

      chaJia = parseFloat(outputSell) - parseFloat(inputBuy);
      shouXu = parseFloat(heJiBuy) + parseFloat(heJiSell);
      shuiJingHe = parseFloat(shuiJing) * parseFloat(outputSell);

      jingDe = parseFloat(chaJia) - parseFloat(shouXu) - parseFloat(shuiJingHe);
      huoLi = parseFloat(jingDe) / parseFloat(inputBuy);
    }

    document.getElementById("JiaGe").innerHTML = "賣出價  " + outputSell.toFixed(1);
    document.getElementById("JingDe").innerHTML = "淨得  " + jingDe.toFixed(3);
    document.getElementById("HuoLi").innerHTML = "獲利  " + huoLi.toFixed(3);

    document.getElementById("JiaGe").style.color = "#008200";
  }

  document.getElementById("JingDe").style.color = "black";
  document.getElementById("HuoLi").style.color = "black";

  console.log(inputBuy);
  console.log(inputSell);
  console.log(inputNumber);
  console.log(heJiBuy);
  console.log(heJiSell);
  console.log(chaJia);
  console.log(shouXu);
  console.log(shuiJingHe);
  console.log(jingDe);
  console.log(huoLi);
}

function clearBuy()
{
   document.getElementById('InputBuy').value = "";
}
function clearSell()
{
   document.getElementById('InputSell').value = "";
}
