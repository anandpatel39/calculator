function gethistory(){
    return document.getElementById("history-value").innerText;

}
// alert(gethistory());
function printhistory(number){
     document.getElementById("history-value").innerText = (number);



}
// printhistory("3+2");
function getoutput(){
    return document.getElementById("output-value").innerText;

}
function printoutput(number){
    document.getElementById("output-value").innerText = formatenumber(number);
}
function formatenumber(number){
    if(number == "-")
    return "";
 let n = Number(number);
 let value = n.toLocaleString("en");
 return value;
}
// printoutput("1226565");
function reversenumber(number){
    return Number(number.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        // alert("The bottom clicked: " + this.id);
        if(this.id == "clear"){
            printhistory("");
            printoutput("");

        }else
        if(this.id =="backspace"){
            var output = reversenumber(getoutput()).toString();
            if(output){
                output = output.substring(0,output.length-1);
                printoutput(output);
            }
        }
        else if(this.id =="sqrt"){
            var output = reversenumber(getoutput()); 
            printoutput(Math.sqrt(output));
            printhistory("sqrt("+output+")");
        }
        else if(this.id =="log"){
            var output = reversenumber(getoutput()); 
            printoutput(Math.log(output));
            printhistory("log("+output+")");
        }
        else{
            var output = getoutput();
            var history = gethistory();
            if(output==""&& history!=""){
                if(isNaN(history[history.length-1]))
                history = history.substring(0,history.length-1);

            }
            if(output!= ""||history!= ""){
                output = reversenumber(output);
                history = history+output;
                if(this.id == "="){
                    var result = eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else{
                    history =history+this.id;
                    printhistory(history);
                    printoutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click', function(){
        // alert("The bottom clicked: " + this.id);
        var output = reversenumber(getoutput());
        if(output!=NaN){
            output = output+this.id;
            printoutput(output);
        }
    });
}
