function check() {
var c1=0;
var q5=document.quiz1.Wer3.value;
var q6=document.quiz1.Wer4.value;
var q7=document.quiz1.Wer5.value;
var q8=document.quiz1.Welche1.value;
var result1=document.getElementById('result1');
var resulttt=document.getElementById('resulttt');
var result22=document.getElementById('result22');
var result33=document.getElementById('result33');
var result44=document.getElementById('result44');

	

    if(q5=="Jolana"){c1++; resulttt.textContent=`✔`; }
	else resulttt.textContent=`❌`;

	if(q6=="Thomas"){c1++; result22.textContent=`✔`; }
	else result22.textContent=`❌`;

	if(q7=="Thomas"){c1++; result33.textContent=`✔`; }
	else result33.textContent=`❌`;

	if(q8=="Beine"){c1++;  result44.textContent=`✔`; }
	else result44.textContent=`❌`;	
	
	if (c1<=3) {

		result1.textContent=`You ve got ${c1*5}/20. Try Again!`;
	}
	else {

		result1.textContent=`you ve got ${c1*5}/20. Excellent!`;
	}
}