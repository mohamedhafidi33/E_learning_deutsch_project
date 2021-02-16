function check() {

var c3=0;

var q13=document.quiz3.Wer9.value;
var q14=document.quiz3.Wer10.value;
var q15=document.quiz3.Wer11.value;
var q16=document.quiz3.Welche3.value;
var result3=document.getElementById('result3');
var resulttttt=document.getElementById('resulttttt');
var result2222=document.getElementById('result2222');
var result3333=document.getElementById('result3333');
var result4444=document.getElementById('result4444');

	if(q13=="1st Stock"){c3++; resulttttt.textContent=`✔`; }
	else resulttttt.textContent=`❌`;

	if(q14=="38"){c3++;result2222.textContent=`✔`; }
	else result2222.textContent=`❌`;

	if(q15=="gelb"){c3++; result3333.textContent=`✔`; }
	else result3333.textContent=`❌`;

	if(q16=="SommerKleid"){c3++; result4444.textContent=`✔`; }
	else result4444.textContent=`❌`;	
	if (c3<=3) {

		result3.textContent=`You ve got ${c3*5}/20. Try Again!`;
	}
	else {

		result3.textContent=`you ve got ${c3*5}/20. Excellent!`;
	}
}