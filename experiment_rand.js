let desks = [[],[],[],[]]
let pupils = 'abcdefghihjklmnop'.split('')

//pupils.map( x => desks[Math.floor(Math.random(4))].push(x) );
pupils.forEach( (x) => { desks[ Math.floor(Math.random()*4) ].push(x); } );
console.log( desks );

// for(i=0; i<10; i++)
//     console.log( Math.floor(Math.random()*4) );