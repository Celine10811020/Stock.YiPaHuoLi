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

    document.getElementById("JiaGeOne").innerHTML = "1.0% 回補價  " + outputBuy.toFixed(1);
    document.getElementById("JingDeOne").innerHTML = "淨得  " + jingDe.toFixed(3);
    document.getElementById("HuoLiOne").innerHTML = "獲利  " + huoLi.toFixed(3);
    document.getElementById("JiaGeOne").style.color = "red";


    huoLi = 0;
    outputBuy = inputSell;

    while(parseFloat(huoLi) < 0.001)
    {
      if(parseFloat(outputBuy) < 100)
      {
        outputBuy = parseFloat(outputBuy) - 0.1;
      }else if(parseFloat(outputBuy) < 500)
      {
        outputBuy = parseFloat(outputBuy) - 0.5;
      }else
      {
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

    document.getElementById("JiaGeTwo").innerHTML = "0.1% 回補價  " + outputBuy.toFixed(1);
    document.getElementById("JingDeTwo").innerHTML = "淨得  " + jingDe.toFixed(3);
    document.getElementById("HuoLiTwo").innerHTML = "獲利  " + huoLi.toFixed(3);

    document.getElementById("JiaGeTwo").style.color = "red";

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

    document.getElementById("JiaGeOne").innerHTML = "1.0% 賣出價  " + outputSell.toFixed(1);
    document.getElementById("JingDeOne").innerHTML = "淨得  " + jingDe.toFixed(3);
    document.getElementById("HuoLiOne").innerHTML = "獲利  " + huoLi.toFixed(3);
    document.getElementById("JiaGeOne").style.color = "#008200";


    huoLi = 0;
    outputSell = inputBuy;

    while(parseFloat(huoLi) < 0.001)
    {
      if(parseFloat(outputSell) < 100)
      {
        outputSell = parseFloat(outputSell) + 0.1;
      }else if(parseFloat(outputSell) < 500)
      {
        outputSell = parseFloat(outputSell) + 0.5;
      }else
      {
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

    document.getElementById("JiaGeTwo").innerHTML = "0.1% 賣出價  " + outputSell.toFixed(1);
    document.getElementById("JingDeTwo").innerHTML = "淨得  " + jingDe.toFixed(3);
    document.getElementById("HuoLiTwo").innerHTML = "獲利  " + huoLi.toFixed(3);

    document.getElementById("JiaGeTwo").style.color = "#008200";
  }

  document.getElementById("JingDeOne").style.color = "black";
  document.getElementById("HuoLiOne").style.color = "black";
  document.getElementById("JingDeTwo").style.color = "black";
  document.getElementById("HuoLiTwo").style.color = "black";

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
