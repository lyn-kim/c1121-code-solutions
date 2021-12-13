console.log('hello, world');

var h1Type = document.querySelector('h1');
console.log('DOM for h1 element:', h1Type);
console.dir(h1Type);

var explanation = document.querySelector('#explanation');
console.log('DOM for element with id attribute of "explanation":', explanation);
console.dir(explanation);

var hint = document.querySelector('.hint');
console.log('DOM for element with class attribute of "hint":', hint);
console.dir(hint);

var pType = document.querySelectorAll('p');
console.log('DOM for all elements of type p:', pType);

var classAtt = document.querySelectorAll('.example-link');
console.log('DOM for elements with class attribute of "exmaple-link":', classAtt);
