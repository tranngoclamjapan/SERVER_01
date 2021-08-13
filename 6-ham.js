function tinhtong(a,b) {
    return a+b;
}

var x = tinhtong(5,4)
console.log(x);


//

function hello() {
    console.log("Wellcome");
}

function goiHam(fn) {
    fn();
}
goiHam(hello)


//

var tong = function () {
    console.log("Lap trinh Nodejs");
}
tong();