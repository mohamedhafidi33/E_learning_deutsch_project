function check() {
	var c=0;
	var q1=document.quiz.Wer.value;
	var q2=document.quiz.Wer1.value;
	var q3=document.quiz.Wer2.value;
	var q4=document.quiz.Welche.value;
	var result=document.getElementById('result');
	var resultt=document.getElementById('resultt');
	var result2=document.getElementById('result2');
	var result3=document.getElementById('result3');
	var result4=document.getElementById('result4');



	if(q1=="Jonas"){c++; resultt.textContent=`✔`; }
	else {resultt.textContent=`❌`;}

	if(q2=="Hanna"){c++; result2.textContent=`✔`; }
	else result2.textContent=`❌`;

	if(q3=="Laura"){c++; result3.textContent=`✔`; }
	else result3.textContent=`❌`;

	if(q4=="Fussbalspielen"){c++; result4.textContent=`✔`; }
	else result4.textContent=`❌`;	
	if (c<=3) {
       
		result.textContent=`You've got ${c*5}/20. Try Again!`;
	}
	else {
         
		result.textContent=`you've got ${c*5}/20. Excellent!`;
	}

	
}
 