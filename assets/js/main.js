alert("Hola calculemos tu promedio!")


let h1 = prompt('Ingrese nota 1 de HTML: ')
h1 = parseFloat(h1)
document.getElementById('HTML-N1').textContent = h1.toFixed(1)

let h2 = prompt('Ingrese nota 2 de HTML: ')
h2 = parseFloat(h2)
document.getElementById('HTML-N2').textContent = h2.toFixed(1)

let h3 = prompt('Ingrese nota 3 de HTML: ')
h3 = parseFloat(h3)
document.getElementById('HTML-N3').textContent = h3.toFixed(1)

let c1 = prompt('Ingrese nota 1 de CSS: ')
c1 = parseFloat(c1)
document.getElementById('CSS-N1').textContent = c1.toFixed(1)

let c2 = prompt('Ingrese nota 2 de CSS: ')
c2 = parseFloat(c2)
document.getElementById('CSS-N2').textContent = c2.toFixed(1)

let c3 = prompt('Ingrese nota 3 de CSS: ')
c3 = parseFloat(c3)
document.getElementById('CSS-N3').textContent = c3.toFixed(1)

let j1 = prompt('Ingrese nota 1 de JavaScript: ')
j1 = parseFloat(j1)
document.getElementById('JS-N1').textContent = j1.toFixed(1)

let j2 = prompt('Ingrese nota 2 de JavaScript: ')
j2 = parseFloat(j2)
document.getElementById('JS-N2').textContent = j2.toFixed(1)

let j3 = prompt('Ingrese nota 3 de JavaScript: ')
j3 = parseFloat(j3)
document.getElementById('JS-N3').textContent = j3.toFixed(1)
    
var promhtml = (h1 + h2 + h3) / 3
promhtml = parseFloat(promhtml)
document.getElementById('HTML-prom').textContent = promhtml.toFixed(1)

var promcss = (c1 + c2 + c3) / 3
promcss = parseFloat(promcss)
document.getElementById('CSS-prom').textContent = promcss.toFixed(1)

var promjs = (j1 + j2 + j3) / 3
promjs = parseFloat(promjs)
document.getElementById('JS-prom').textContent = promjs.toFixed(1)

var promf = (promhtml + promcss + promjs) / 3
promf = parseFloat(promf)


/* 
--Esta parte no funcionó--
if(promf >= 4) {
    alert('Felicidades! Aprobaste con: ' promf)
} else{
    alert('intentalo de nuevo')
}
*/