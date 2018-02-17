function highestCommonFactor(a, b)
{
  if(b === 0)
  {
    return a;
  }
  return highestCommonFactor(b, a%b);
}

function addFraction(num1, den1, num2, den2)
{
  var temp = [0, 0];

  var danswer = den1*den2;

  temp[0] = num1*den2;
  temp[1] = num2*den1;
  var nanswer = temp[0]+temp[1];
  return simplifyFraction(nanswer, danswer);
}

function subtractFraction(num1, den1, num2, den2)
{
  var temp = [0, 0];

  var danswer = den1*den2;

  temp[0] = num1*den2;
  temp[1] = num2*den1;
  var nanswer = temp[0]-temp[1];
  return simplifyFraction(nanswer, danswer);
}

function multiplyFraction(num1, den1, num2, den2)
{
  return [(num1*num2), (den1*den2)];
}

function divideFraction(num1, den1, num2, den2)
{
  return [(num1*den2), (den1*num2)];
}

function simplifyFraction(num1, den1)
{
  var commonMultiple = highestCommonFactor(num1, den1);

  var answer = [(num1/commonMultiple), (den1/commonMultiple)];

  if((answer[0] === 1) && (answer[1] === 1))
    return 1;
  else
    return answer;
}

function add() {
  var input = document.getElementById("add");
  input.className += " selected";
}

function subtract() {
  var input = document.getElementById("subtract");
  input.className += " selected";
}

function multiply() {
  var input = document.getElementById("multiply");
  input.className += " selected";
}

function divide() {
  var input = document.getElementById("divide");
  input.className += " selected";
}

function simplify()
{
  var input = document.getElementById("simplify");
  input.className += " selected";

  Fractions();
}

function Fractions()
{
  var input;
  if (document.getElementById("add").classList.contains("selected"))
  {
    input = "add";
    document.getElementById("add").classList.remove("selected");
  }
  else if(document.getElementById("subtract").classList.contains("selected"))
  {
    input = "subtract";
    document.getElementById("subtract").classList.remove("selected");
  }
  else if(document.getElementById("multiply").classList.contains("selected"))
  {
    input = "multiply";
    document.getElementById("multiply").classList.remove("selected");
  }
  else if(document.getElementById("divide").classList.contains("selected"))
  {
    input = "divide";
    document.getElementById("divide").classList.remove("selected");
  }
  else if(document.getElementById("simplify").classList.contains("selected"))
  {
    input = "simplify";
    document.getElementById("simplify").classList.remove("selected");
  }
  else
  {
      console.log("No button selected");
  }

  var num1 = document.getElementById("num1").value;
  var den1 = document.getElementById("den1").value;
  var num2 = document.getElementById("num2").value;
  var den2 = document.getElementById("den2").value;
  var num3 = document.getElementById("num3").value;
  var den3 = document.getElementById("den3").value;
  if(((!num1)||(!num2)||(!den1)||(!den2)) && (input !== "simplify"))
  {
    console.log("Incorrect amount of numbers provided, please enter two fractions for every calculation, except for simplification");
  }
  else if(input === "simplify")
  {
    var output4 = simplifyFraction(num3, den3);
    console.log(output4);
    if(output4 === 1)
      document.getElementById("answer1").innerHTML = output4;
    else
      document.getElementById("answer1").innerHTML = output4.join("/");
  }
  else
  {
    switch(input)
    {
      case "add":
        //console.log(addFraction(num1, den1, num2, den2));
        var output = addFraction(num1, den1, num2, den2);
        if(output === 1)
        {
          document.getElementById("answer").innerHTML = output;
        }
        else
          document.getElementById("answer").innerHTML = output.join("/");
        break;
      case "subtract":
        var output1 = subtractFraction(num1, den1, num2, den2);
        if(output1 === 1)
        {
          document.getElementById("answer").innerHTML = output1;
        }
        else
          document.getElementById("answer").innerHTML = output1.join("/");
        break;
      case "multiply":
        var output2 = multiplyFraction(num1, den1, num2, den2);
        if(output2[0] === 1 && output2[1] === 1)
        {
          document.getElementById("answer").innerHTML = output2;
        }
        else
          document.getElementById("answer").innerHTML = output2.join("/");
        break;
      case "divide":
        var output3 = divideFraction(num1, den1, num2, den2);
        if(output3[0] === 1 && output3[1] === 1)
        {
          document.getElementById("answer").innerHTML = output3;
        }
        else
          document.getElementById("answer").innerHTML = output3.join("/");
        break;
      default:
        console.log("No input was provided");
        break;
    }
  }
}
