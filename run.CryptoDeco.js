function encrypt(_) {
	var __ = "";
	[..._].forEach(___ => __ += String.fromCharCode(~___.charCodeAt(0)));
	show(__);
}

function func() {
	var inp = document.getElementById("in");
	var tinp = inp.value;
	if (tinp === "") {
		alert("You think I am a fool?!");
	} else {
		encrypt(tinp);
	}
}

function show(outp) {
	var en = document.getElementById("en");
	var res = document.getElementById("result");
	en.innerHTML = outp;
	res.style.transform = "scale(1)";
}

function hide() {
	var res = document.getElementById("result");
	res.style.transform = "scale(0)"
}
