const a = '10000000000000000000000000'
const b = '20000000000000000000000000'
 const aNum = Number(a)
 const bNum = Number(b)

 const res = (aNum + bNum).toLocaleString()
 console.log('res', res);


 var x= res
 
 if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
 
  console.log('x', x);