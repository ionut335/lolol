function f(a,b,c,x){
c=c-x;
let v = -b / (2*a);
let v2 = (a*v*v)+(b*v)+c;
let delta = Math.sqrt((b*b)-(4*a*c));
console.log((-b-delta)/(2*a));
console.log((-b+delta)/(2*a));
console.log(v,v2);
