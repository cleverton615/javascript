function somar() {
    var vl1 = document.querySelector('input#vl1')
    var vl2 = document.querySelector('input#vl2')
    var res1 = document.querySelector('div#res1')
    var n1 = Number(vl1.value)
    var n2 = Number(vl2.value)
    var s = n1 + n2
    res1.innerHTML = `<strong>${s}</strong>`
}

function multiplicar() {
    var vl3 = document.querySelector('input#vl3')
    var vl4 = document.querySelector('input#vl4')
    var res2 = document.querySelector('div#res2')
    var n3 = Number(vl3.value)
    var n4 = Number(vl4.value)
    var m = (n3 * n4)
    res2.innerHTML = `<strong>${m}</strong>`
}

function dividir() {
    var vl5 = document.querySelector('input#vl5')
    var vl6 = document.querySelector('input#vl6')
    var res3 = document.querySelector('div#res3')
    var n5 = Number(vl5.value)
    var n6 = Number(vl6.value)
    var d = n5 / n6
    res3.innerHTML = `<strong>${d}</strong>`
}

function subtrair() {
    var vl7 = document.querySelector('input#vl7')
    var vl8 = document.querySelector('input#vl8')
    var res4 = document.querySelector('div#res4')
    var n7 = Number(vl7.value)
    var n8 = Number(vl8.value)
    var sub = n7 - n8
    res4.innerHTML = `<strong>${sub}</strong>`
}