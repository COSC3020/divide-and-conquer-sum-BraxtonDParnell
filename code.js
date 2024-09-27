function divideAndConquerSum(a) {

if a.length > 1 {
return divideAndConquerSum(a.slice(0,a.length/2 | 1)) + divideAndConquerSum(a.slice(a.length/2 | 1, a.length));
}

else{
return a[0];
}
}
