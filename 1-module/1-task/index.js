function factorial(n) {
  let res = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        res = res * i; 
    return res; 
}

    console.log ( factorial(0) );
    console.log ( factorial(1) );
    console.log ( factorial(3) );
    console.log ( factorial(5) );