const jsQuestions = [
    {
        statement:'my name is',
        options: ['awis', 'qasim', 'ali'],  //1
        correct: 'awis'
    },
    {
        statement:'Which is the correct way to write a comment in JavaScript?',
        options: ['|| ...','<< >>','// ....'],  //2
        correct: '// ....'
    },
    {
        statement:'Which of the following is the correct syntax to redirect a URL using JavaScript?',
        options: ["document.location='http://www.w3docs.com;'","browser.location='http://www.w3docs.com';","window.location='http://www.w3docs.com';"],  //3
        correct: "window.location='http://www.w3docs.com';"
    },
    {
        statement:'Which one of the following is correct?',
        options: ['i =+ 1;','i += 1;','i = i++1;'],   //4
        correct: 'i += 1;'
    },
    {
        statement:'Which array method sorts the elements of an array?',
        options: ['none of them','order()','sort()'],   //5
        correct: 'sort()'
    },
    {
        statement:'How do you get cookies in JavaScript?',
        options: ['window.cookies','location.cookies','document.cookies'],  //6
        correct: 'window.cookies'
    },
    {
        statement:'javascript is used for...',
        options: ['data analyzing','web developement','machine learning'],   //7 
        correct: 'web developement'
    },
    {
        statement:'How do you create a new function in JavaScript?',
        options: ['function myFunction() {}','function:myFunction() {}','function = myFunction() {}'],   //8
        correct: 'function myFunction() {}'
    },
    {
        statement:'How do you create a JavaScript array?',
        options: ['var fruits = {"apple", "banana", "mango"}','var fruits = ["apple", "banana", "mango"]','var fruits = "banana", "apple", "peach";'],   //9
        correct: 'var fruits = ["apple", "banana", "mango"]'
    },
    {
        statement:'we use javascript for web development',
        options: ['true','false'],   //10
        correct: 'true'
    },
    {
        statement:'Which of the following does the pop() method do?',
        options: ['It increments the total length by 1','It prints the first element but no effect on the length','None of the above options'],   //11
        correct: 'None of the above options'
    },
    {
        statement:'The pop() method removes the last item from an array and returns a new array.',
        options: ['true','false'],   //12
        correct: 'false'
    },
    {
        statement:'let arr = [1,2,3,4,5]; arr.slice(0,3);',
        options: ['Returns [4,5]','Returns [1,2,3]','Returns [1,2,3,4]'],   //13
        correct: 'Returns [1,2,3]'
    },
    {
        statement:'Which of the following is used for assigning a value to a variable?',
        options: ['*','@','='],    //14
        correct: '='
    },
    {
        statement:'let student = {age: 15}; which one is key and which one is value',
        options: ['key = 15 , value = age','key = age , value = 15','none'],    //15
        correct: 'key = age , value = 15'
    }
];

let hardQuestions = [
    {
        statement:'my name is',
        options: ['awis', 'qasim', 'ali'],  //1
        correct: 'awis'
    },
    {
        statement:'Which is the correct way to write a comment in JavaScript?',
        options: ['|| ...','<< >>','// ....'],  //2
        correct: '// ....'
    },
    {
        statement:'Which of the following is the correct syntax to redirect a URL using JavaScript?',
        options: ["document.location='http://www.w3docs.com;'","browser.location='http://www.w3docs.com';","window.location='http://www.w3docs.com';"],  //3
        correct: "window.location='http://www.w3docs.com';"
    },
    {
        statement:'Which one of the following is correct?',
        options: ['i =+ 1;','i += 1;','i = i++1;'],   //4
        correct: 'i += 1;'
    },
    {
        statement:'Which array method sorts the elements of an array?',
        options: ['none of them','order()','sort()'],   //5
        correct: 'sort()'
    },
    {
        statement:'How do you get cookies in JavaScript?',
        options: ['window.cookies','location.cookies','document.cookies'],  //6
        correct: 'window.cookies'
    },
    {
        statement:'javascript is used for...',
        options: ['data analyzing','web developement','machine learning'],   //7 
        correct: 'web developement'
    },
    {
        statement:'How do you create a new function in JavaScript?',
        options: ['function myFunction() {}','function:myFunction() {}','function = myFunction() {}'],   //8
        correct: 'function myFunction() {}'
    },
    {
        statement:'How do you create a JavaScript array?',
        options: ['var fruits = {"apple", "banana", "mango"}','var fruits = ["apple", "banana", "mango"]','var fruits = "banana", "apple", "peach";'],   //9
        correct: 'var fruits = ["apple", "banana", "mango"]'
    },
    {
        statement:'we use javascript for web development',
        options: ['true','false'],   //10
        correct: 'true'
    },
    {
        statement:'Which of the following does the pop() method do?',
        options: ['It increments the total length by 1','It prints the first element but no effect on the length','None of the above options'],   //11
        correct: 'None of the above options'
    },
    {
        statement:'The pop() method removes the last item from an array and returns a new array.',
        options: ['true','false'],   //12
        correct: 'false'
    },
    {
        statement:'let arr = [1,2,3,4,5]; arr.slice(0,3);',
        options: ['Returns [4,5]','Returns [1,2,3]','Returns [1,2,3,4]'],   //13
        correct: 'Returns [1,2,3]'
    },
    {
        statement:'Which of the following is used for assigning a value to a variable?',
        options: ['*','@','='],    //14
        correct: '='
    },
    {
        statement:'let student = {age: 15}; which one is key and which one is value',
        options: ['key = 15 , value = age','key = age , value = 15','none'],    //15
        correct: 'key = age , value = 15'
    }
];
let intermediateQuestions = [
    {
        statement:'my name is',
        options: ['awis', 'qasim', 'ali'],  //1
        correct: 'awis'
    },
    {
        statement:'Which is the correct way to write a comment in JavaScript?',
        options: ['|| ...','<< >>','// ....'],  //2
        correct: '// ....'
    },
    {
        statement:'Which of the following is the correct syntax to redirect a URL using JavaScript?',
        options: ["document.location='http://www.w3docs.com;'","browser.location='http://www.w3docs.com';","window.location='http://www.w3docs.com';"],  //3
        correct: "window.location='http://www.w3docs.com';"
    },
    {
        statement:'Which one of the following is correct?',
        options: ['i =+ 1;','i += 1;','i = i++1;'],   //4
        correct: 'i += 1;'
    },
    {
        statement:'Which array method sorts the elements of an array?',
        options: ['none of them','order()','sort()'],   //5
        correct: 'sort()'
    },
    {
        statement:'How do you get cookies in JavaScript?',
        options: ['window.cookies','location.cookies','document.cookies'],  //6
        correct: 'window.cookies'
    },
    {
        statement:'javascript is used for...',
        options: ['data analyzing','web developement','machine learning'],   //7 
        correct: 'web developement'
    },
    {
        statement:'How do you create a new function in JavaScript?',
        options: ['function myFunction() {}','function:myFunction() {}','function = myFunction() {}'],   //8
        correct: 'function myFunction() {}'
    },
    {
        statement:'How do you create a JavaScript array?',
        options: ['var fruits = {"apple", "banana", "mango"}','var fruits = ["apple", "banana", "mango"]','var fruits = "banana", "apple", "peach";'],   //9
        correct: 'var fruits = ["apple", "banana", "mango"]'
    },
    {
        statement:'we use javascript for web development',
        options: ['true','false'],   //10
        correct: 'true'
    },
    {
        statement:'Which of the following does the pop() method do?',
        options: ['It increments the total length by 1','It prints the first element but no effect on the length','None of the above options'],   //11
        correct: 'None of the above options'
    },
    {
        statement:'The pop() method removes the last item from an array and returns a new array.',
        options: ['true','false'],   //12
        correct: 'false'
    },
    {
        statement:'let arr = [1,2,3,4,5]; arr.slice(0,3);',
        options: ['Returns [4,5]','Returns [1,2,3]','Returns [1,2,3,4]'],   //13
        correct: 'Returns [1,2,3]'
    },
    {
        statement:'Which of the following is used for assigning a value to a variable?',
        options: ['*','@','='],    //14
        correct: '='
    },
    {
        statement:'let student = {age: 15}; which one is key and which one is value',
        options: ['key = 15 , value = age','key = age , value = 15','none'],    //15
        correct: 'key = age , value = 15'
    }
];
hardQuestions = intermediateQuestions = jsQuestions;


let usedQuestions = [];

// -----------------------------

function difficulty(event){
    if(event == 'expert'){
        let tempo = jsQuestions;
        jsQuestions = hardQuestions;  
        hardQuestions = tempo;
    }else if(event == 'intermediate'){
        let tempo = jsQuestions;
        jsQuestions = intermediateQuestions;  
        intermediateQuestions = tempo;
    }else if(event == 'beginner'){

    }

    document.getElementById("startQuiz").style.display = 'block';
}


let questions = document.getElementById('questions');
let questionRandom;
let mcq;
let mcqStatement;
let temp;
let mcqOptions = "";
let optionRandom;

for(let i=1; i<= 10; i++){

    questionRandom = Math.floor(Math.random()*jsQuestions.length);

    mcqStatement = `<div class = 'statement'>${i}. ${jsQuestions[questionRandom].statement}</div><br>`;
    
    let mcqOptions = "";

    for(let j = 0; j < jsQuestions[questionRandom].options.length; j++){

        // optionRandom = Math.floor(Math.random()*jsQuestions[questionRandom].options.length);

        mcqOptions += `<input type = "radio" name = "jsQuestionOption${i}" class = "option" value="${jsQuestions[questionRandom].options[j]}">`;
        mcqOptions += `<label for="${jsQuestions[questionRandom].options[j]}">${jsQuestions[questionRandom].options[j]}</label><br>`;
        
        // temp = jsQuestions[questionRandom].options[optionRandom];
        // jsQuestions[questionRandom].options[optionRandom] = jsQuestions[questionRandom].options[options.length-1];
        // jsQuestions[questionRandom].options[options.length-1] = temp;
        // jsQuestions[questionRandom].options.pop();    
    }

    mcq = document.createElement("div");
    mcqOptions.class = "mcq";

    let correctAnswer = `<div class = 'correctAnswer'>correct Answer:<br> <div>${jsQuestions[questionRandom].correct}</div> </div>`

    mcq.innerHTML = mcqStatement + mcqOptions + correctAnswer;

    questions.innerHTML += mcq.innerHTML;

    // it swap random element with last element of array than we can pop it. 
    temp = jsQuestions[questionRandom];
    
    jsQuestions[questionRandom] = jsQuestions[jsQuestions.length-1];
    jsQuestions[jsQuestions.length-1] = temp;
    
    usedQuestions.push(jsQuestions.pop());
    
    

}

function startQuiz(){
    document.getElementById('questions').style.display = 'block';
    document.getElementById('submitAnswers').style.display = 'block';
}

function checkResult(){
   let element = document.getElementsByClassName("correctAnswer");
   for(x of element){
    x.style.display = 'block';
   }


let points = 0;

let answers = document.querySelectorAll(`input[type='radio']:checked`);



    for(x of answers){
        for(let i=0; i<10; i++){
            if(x.defaultValue == usedQuestions[i].correct){

                points++;
            }
    }    
}

document.getElementById("points").innerHTML = `you got ${points} / 10 points`;


}


function unfade() {
    let myelement = document.getElementById("questions");
    var op = 0.1;  // initial opacity
    myelement.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        myelement.style.opacity = op;
        myelement.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
    }, 50);
}
