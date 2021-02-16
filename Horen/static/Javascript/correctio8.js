function check() {
var c7=0;

var q29=document.quiz7.Wer21.value;
var q30=document.quiz7.Wer22.value;
var q31=document.quiz7.Wer23.value;
var q32=document.quiz7.Welche7.value;
var result7=document.getElementById('result7');
var resulttttttttt=document.getElementById('resulttttttttt');
var result22222222=document.getElementById('result22222222');
var result33333333=document.getElementById('result33333333');
var result44444444=document.getElementById('result44444444');

if(q29=="3,5 Euro"){c7++; resulttttttttt.textContent=`✔`; }
	else resulttttttttt.textContent=`❌`;
if(q30=="2"){c7++; result22222222.textContent=`✔`; }
	else result22222222.textContent=`❌`;
if(q31=="2 Tuben und 1 Packung"){c7++; result33333333.textContent=`✔`; }
	else result33333333.textContent=`❌`;
if(q32=="Geschenkkorb"){c7++; result44444444.textContent=`✔`; }
	else result44444444.textContent=`❌`;		
    if (c7<=3) {

		result7.textContent=`You ve got ${c7*5}/20. Try Again!`;
	}
	else {

		result7.textContent=`you ve got ${c7*5}/20. Excellent!`;
	}

}