function calc(){
let a=parseFloat(document.getElementById('a').value)||0;
let b=parseFloat(document.getElementById('b').value)||0;
let c=parseFloat(document.getElementById('c').value)||0;

let score = (a + b + c) / 3;

let issues = "";
if(a < 50) issues += "Poor usability detected.<br>";
if(b < 50) issues += "UI inconsistency issues.<br>";
if(c < 50) issues += "Accessibility problems.<br>";

let level = score > 80 ? "Excellent UX 🚀" :
            score > 50 ? "Average UX ⚖️" :
            "Poor UX ⚠️";

document.getElementById('result').innerHTML =
"UX Score: " + score.toFixed(2) + "<br><br>" + level + "<br><br>" + issues;
}
