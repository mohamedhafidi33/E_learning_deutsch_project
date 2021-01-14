function check() {
var c2=0;
var q9=document.quiz2.Wer6.value;
var q10=document.quiz2.Wer7.value;
var q11=document.quiz2.Wer8.value;
var q12=document.quiz2.Welche2.value;
var result2=document.getElementById('result2');
var resultttt=document.getElementById('resultttt');
var result222=document.getElementById('result222');
var result333=document.getElementById('result333');
var result444=document.getElementById('result444');



    if(q9=="Markus-->Mayrs"){c2++; resultttt.textContent=`✔`; }
	else resultttt.textContent=`❌`;

	if(q10=="Mayrs"){c2++;result222.textContent=`✔`; }
	else result222.textContent=`❌`;

	if(q11=="Tanzen und trinken"){c2++; result333.textContent=`✔`; }
	else result333.textContent=`❌`;

	if(q12=="Am 21 Juni"){c2++; result444.textContent=`✔`; }
	else result444.textContent=`❌`	

	if (c2<=3) {

		result2.textContent=`You ve got ${c2*5}/20. Try Again!`;
	}
	else {

		result2.textContent=`you ve got ${c2*5}/20. Excellent!`;
	}
}