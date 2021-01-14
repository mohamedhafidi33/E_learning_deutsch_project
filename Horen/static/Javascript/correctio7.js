function check() {

var c6=0;

var q25=document.quiz6.Wer18.value;
var q26=document.quiz6.Wer19.value;
var q27=document.quiz6.Wer20.value;
var q28=document.quiz6.Welche6.value;
var result6=document.getElementById('result6');

var resultttttttt=document.getElementById('resultttttttt');
var result2222222=document.getElementById('result2222222');
var result3333333=document.getElementById('result3333333');
var result4444444=document.getElementById('result4444444');



	if(q25=="35 Euro"){c6++; resultttttttt.textContent=`✔`; }
	else resultttttttt.textContent=`❌`;
	if(q26=="28 Euro"){c6++; result2222222.textContent=`✔`; }
	else result2222222.textContent=`❌`;
	if(q27=="99 Euro"){c6++; result3333333.textContent=`✔`; }
	else result3333333.textContent=`❌`;
	if(q28=="Gesicht und Kopf"){c6++; result4444444.textContent=`✔`; }
	else result4444444.textContent=`❌`;	
	if (c6<=3) {

		result6.textContent=`You ve got ${c6*5}/20. Try Again!`;
	}
	else {

		result6.textContent=`you ve got ${c6*5}/20. Excellent!`;
	}

}