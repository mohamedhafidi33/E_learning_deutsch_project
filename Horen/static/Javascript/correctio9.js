function check() {
	var c8=0;

	

	var q33=document.quiz8.Wer24.value;
	var q34=document.quiz8.Wer25.value;
	var q35=document.quiz8.Wer26.value;
	var q36=document.quiz8.Welche8.value;
	var result8=document.getElementById('result8');
	var resultttttttttt=document.getElementById('resultttttttttt');
    var result222222222=document.getElementById('result222222222');
    var result333333333=document.getElementById('result333333333');
    var result444444444=document.getElementById('result444444444');


if(q33=="Aprikose"){c8++ ;resultttttttttt.textContent=`✔`; }
	else resultttttttttt.textContent=`❌`;

if(q34=="Ribisel"){c8++; result222222222.textContent=`✔`; }
	else result222222222.textContent=`❌`;

if(q35=="Sahne"){c8++; result333333333.textContent=`✔`; }
	else result333333333.textContent=`❌`;

if(q36=="Deutschland"){c8++; result444444444.textContent=`✔`; }
	else result444444444.textContent=`❌`;	
    if (c8<=3) {

		result8.textContent=`You ve got ${c8*5}/20. Try Again!`;
	}
	else {

		result8.textContent=`you ve got ${c8*5}/20. Excellent!`;
	}

}