//#PRNG (pseudo-random numbers generator)
const prng=(digit=5)=>{
	const e=prng,x=10**digit;
	return ((((2147483646 & (e.seed=e.imul(48271,e.seed|0)))/2147483647)*x)|0)/x
};
prng.seed=2147483646+Date.now();//seed;
prng.imul=Math.imul;
/*
console.log(prng());
console.log(prng());
console.log(prng());
console.log(prng());
console.log(prng());


Il numero 2147483647 è l'ottavo numero primo di Mersenne.
La primalità del numero, esprimibile come 2^{31}-1,
è stata scoperta da Eulero nel 1772.
Fino al 1867 tale numero era il più grande numero primo noto
2147483647 è il valore massimo che può assumere un numero intero (con segno) a 32 bit.
-
16807
48271(4968th prime)
% Modulus (Division Remainder)
*/
