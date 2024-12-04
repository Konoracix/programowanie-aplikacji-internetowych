function oblicz_cene(x, y) {
	var n = document.getElementById("ile").value;
	var suma = 0;

	if (n >= 3) {
		suma = 100 * n;
	} else {
		suma = 150 * n;
	}

	document.querySelector(".five").innerHTML = suma + " zł";
}

function dodaj() {
	let a = document.getElementById("a").value;
	let b = document.getElementById("b").value;

	a = parseInt(a);
	b = parseInt(b);

	document.getElementById("wynik").innerHTML = a + b;
}

function generujPrzedzial() {
	let a = document.getElementById("a").value;
	let b = document.getElementById("b").value;

	a = parseInt(a);
	b = parseInt(b);

	document.getElementById("wynik").innerHTML = " ";

	if (a < b) {
		for (let i = a; i <= b; i++) {
			document.getElementById("wynik").innerHTML += i + ", ";
		}
	} else {
		for (let i = a; i >= b; i--) {
			document.getElementById("wynik").innerHTML += i + ", ";
		}
	}
}
