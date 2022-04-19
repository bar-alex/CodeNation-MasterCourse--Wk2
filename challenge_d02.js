
const reverse = (text) => text.split('').reverse().join('');

console.log( reverse('test') );


let shoppingList = [
    ['cola', 'fanta', 'tequilla'],
    ['crisps', 'onion rings', 'sticks'],
    ['roses','dandofils','flowers'],
];

console.log( 'no concat: ', shoppingList[1][2]);

let newArray = shoppingList[0].concat( shoppingList[1] ,shoppingList[2] );
console.log( 'concat: ', newArray[5]  );



const dataChecker = (str, rank) => {
    if( str.toLowerCase() == 'codenation')
        if(rank == 1)
            console.log(`'${str}' is still number ${rank}.`);
        else 
            console.log(`'${str}' is number ${rank}, but number 1 would have been better.`);
    else 
        console.log(`Who's '${str}' and why they're number ${rank}?`);
};

dataChecker( 'CodeNation', 1 );
dataChecker( 'CodeNation', 3 );
dataChecker( 'ZeCoders', 1 )