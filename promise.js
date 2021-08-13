let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if(typeof a != 'number' || typeof b != 'number'){
                return reject(new Error ('Tham so phai la number'))
            }
            resolve (a + b)
        }, 1000);
    })
}

let mutiply = function(a, b) {
    return new Promise( function(resolve, reject){
    if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error ('Tham so phai la number'));
    }
    resolve (a * b);
    })
}
    
let devide = function(a, b) {
    return new Promise (function (resolve, reject){
        if (typeof a != 'number' || typeof b != 'number') {
            return reject (new Error ('Tham so phai la number'));
        }
        if (b==0) {
            return reject (new Error ('Tham so phai khac 0'))
        }
        resolve (a / b);
    })
}

// mutiply (2,3)
//     .then(function (result) {console.log(result)}, function (err) {console.log(err)})

// let dienTich = function(a, b, h) {
//     return add(a, b)
//     // .then(function(res){console.log(res)})
//     .then(res => mutiply(res, h))
//     // .then(function(res){mutiply(res, h)})
//     // .then(function(result){console.log(result)})
//     .then(function(result){return devide(result, 2)})
//     // .then(function(square){ console.log('Dien tich: ' + square) })
//     // .catch(function(err){console.log (err)})
// }

let dienTich = async function (a, b, h) {
    try {
        let ab = await add(a, b);
        let abh = await mutiply(ab, h);
        let square = await devide(abh, 2);
        return Promise.resolve(square);
    }
    catch (e) { 
        return Promise.reject (e);
    }
}

dienTich ('3', 5, 6) 
    .then(function(result){console.log('Dien tich: ' + result)})
    .catch(function(err){console.log(err + '')})

// devide (3, 0)
//     .then(result =>console.log(result))
//     .catch(err => console.log(err + ''))