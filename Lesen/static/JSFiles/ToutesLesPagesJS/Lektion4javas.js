
        var g;
        var h;
        var i;
        var j;
        var k;
        function submit001() {
            b = input001.value;
            c = input002.value;
            d = input003.value;
            e = input004.value;
            f = input005.value;
            if (b == "Donnerstag" || b == "Donnerstag") {
                g = 1;
                input001.value = b;
                check001.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input001.value = b;
                check001.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (c == "Auslandsemester" || c == "Auslandsemester") {
                h = 1
                input002.value = c;
                check002.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input002.value = c;
                check002.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (d == "Deutschland" || d == "Deutschland") {
                i = 1;
                input003.value = d;
                check003.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input003.value = d;
                check003.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (e == "Italienisch" || e == "Italienisch") {
                j = 1;
                input004.value = e;
                check004.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input004.value = e;
                check004.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (f == "30 Jahren" || f == "30 Jahren") {
                k = 1;
                input005.value = f;
                check005.innerHTML = "<text class=button002>" + "✔" + "</text>";
            } else {
                input005.value = f;
                check005.innerHTML = "<text class=button002>" + "✖" + "</text>";
            }

            if (g == 1 && h == 1 && i == 1 && j == 1 && k == 1) {
                message001.innerHTML = "Sehr gut ! du bist unglaublich.";
                disappear001.innerHTML = "";
                reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Wiederholen</button></div>";
            }
        }

            function repeat001() {
                location.reload();
            }
  