function check() {
var c4=0;

var q17=document.quiz4.Wer12.value;
var q18=document.quiz4.Wer13.value;
var q19=document.quiz4.Wer14.value;
var q20=document.quiz4.Welche4.value;
var result4=document.getElementById('result4');
var resultttttt=document.getElementById('resultttttt');
var result22222=document.getElementById('result22222');
var result33333=document.getElementById('result33333');
var result44444=document.getElementById('result44444');

	if(q17=="es ist sonnig"){c4++; resultttttt.textContent=`✔`; }
	else resultttttt.textContent=`❌`;

	if(q18=="es scheint"){c4++;result22222.textContent=`✔`; }
	else result22222.textContent=`❌`;
	if(q19=="Jolana"){c4++; result33333.textContent=`✔`; }
	else result33333.textContent=`❌`;

	if(q20=="bewölkt"){c4++; result44444.textContent=`✔`; }
	else result44444.textContent=`❌`;
			
	if (c4<=3) {

		result4.textContent=`You ve got ${c4*5}/20. Try Again!`;
	}
	else {

		result4.textContent=`you ve got ${c4*5}/20. Excellent!`;
	}
}