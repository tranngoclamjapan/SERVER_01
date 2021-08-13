// let square = (a, b, h) => (a + b) * h /2;
// console.log('Dien tich: ' + square(2, 3, 2));


let add = (a, b, cb) => {
    setTimeout(() => {
        if(typeof a != 'number' || typeof b != 'number') {
            
            return cb(new Error('Tham so phai la kieu number'));
        }
        cb(undefined, a + b);
    }, 1000);
}

let multipli = function(a, b, cb) {
    setTimeout(function() {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai la kieu number'), undefined);
        }
        cb(undefined, a*b);
    }, 1000);
}

let divise = function(a, b, cb) {
    setTimeout(function() {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai la kieu number'), undefined)
        }
        if (b==0) {
            return cb(new Error('So bi chia phai khac 0'), undefined)
        }
        cb(undefined, a/b)
    }, 1000);
}

divise(5, 5, (err, result)=> {
    if(err) return console.log(err);
    console.log(result);
  
    
})

// let dientich = (a, b, h, cb) => {
//     add(a, b, (err, result) => {
//         if(err) return cb(err);
//             multipli(result, h, (err, result) => {
//                 if(err) return cb(err);
//                     divise(result,2, (err, result) => {
//                         if(err) return cb(err);
//                          cb(undefined, result);
//                     })
//             })
//     })
// }

// dientich(2, 3, 2, (err, result) => {
//     if(err) return console.log(err + '');
//     console.log('Dien tich' , result);
// })