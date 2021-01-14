function check() {
var c5=0;

var q21=document.quiz5.Wer15.value;
var q22=document.quiz5.Wer16.value;
var q23=document.quiz5.Wer17.value;
var q24=document.quiz5.Welche5.value;
var result5=document.getElementById('result5');
var resulttttttt=document.getElementById('resulttttttt');
var result222222=document.getElementById('result222222');
var result333333=document.getElementById('result333333');
var result444444=document.getElementById('result444444');


	if(q21=="Afrika"){c5++; resulttttttt.textContent=`✔`; }
	else resulttttttt.textContent=`❌`;
	if(q22=="Indien"){c5++; result222222.textContent=`✔`; }
	else result222222.textContent=`❌`;
	if(q23=="Irland"){c5++; result333333.textContent=`✔`; }
	else result333333.textContent=`❌`;

	if(q24=="MickeyMouse"){c5++; result444444.textContent=`✔`; }
	else result444444.textContent=`❌`;	
	if (c5<=3) {

		result5.textContent=`You ve got ${c5*5}/20. Try Again!`;
	}
	else {

		result5.textContent=`you ve got ${c5*5}/20. Excellent!`;
	}

}





