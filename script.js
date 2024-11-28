//Question 1
 
function countCharacters(){

    let A = 0;
    let D = 0;
    let S = "AbaDd";

    for(let i=0 ; i<S.length ; i++){
        if(S[i]==="A") {
            A++;
        }    
        else if (S[i] === "D"){
            D++;
        }    
    }
    console.log(A,D);
}
countCharacters();

//Question 2

function countHead(){

    let result ={};
    let S = "prepbytes";

    for(let i=0 ; i<S.length ; i++){
        let ch=S.charAt(i);
        if (!result[ch]){
            result[ch] = 1;
        }else{
            result[ch] += 1;
        }
    }
    console.log(result);
}      

countHead();       

//Question 3


function countVowels(){
    let S = "prepbytes";
    let Vowels = "aeiouAEIOU";
    let result = 0;

    for(let i=0 ; i<S.length ; i++){
        for(let j=0 ; j<S.length ; j++){
            if(S[i] === Vowels[j]){
                result++;
            }
        }
    }
    console.log(result);
}

countVowels();

//Question 4

function concatenateStrings(){
    let S1 = "prep";
    let S2 = "bytes";
    let S3 = S1.concat(S2);

    console.log(S3);
}

concatenateStrings();

//Question 5

function findLength(){
    let str = "CeDqe";
    let result = 0;

    for(No of str){
        if(No !== ""){
            result++;
        }
    }
    console.log(result);
}    

findLength();

//Question 6

let G1 = "ADDAAADDDDD";
let G2 = "ADDAAADD";

function gameWinner(S){
    let A = 0;
    let D = 0;

    for(let char of S){
        if(char === 'A'){
            A++;
        }else if(char === 'D'){
            D++;
        }
    }

if(A > D){
    return "Aditya";
}else if(D > A){
    return "Danish";
}else{
    return "Draw";
}
}

console.log(gameWinner(G1));
console.log(gameWinner(G2));

//Question 7

function joinStrings(){
    let S = "Prepbytes";
    let P = "Technologies";
    let join = S.concat(P);

    console.log(join);
}

joinStrings();

//Question 8

function plainCheck(){
    let N1 = "Naman";
    let Palin = "";
    let N2 = "naman";
    for(let i=N1.length-1 ; i>=0 ; i--){
        Palin = Palin + N1[i];
    } 
    if(N1 === Palin){
        console.log("true");
    }else{
        console.log("false");
    }
    let N3 = "Naman";
    let Pal = "";
    let N4 = "naman";
    for(let i=N4.length-1 ; i>=0 ; i--){
        Pal = Pal + N4[i];
    } 
    if(N4 === Pal){
        console.log("true");
    }else{
        console.log("false");
    }
}

plainCheck();

//Question 9

function reverseString(){
    let Str = "I am utkarsh raj";
    let newStr = "";
    
    for (let i=Str.length-1; i>=0 ; i--){
        newStr += Str[i];
    }
    console.log(newStr);
}

reverseString();

//Question 10

function stringMatch(){
    let S1 = "Prebytes";
    let S2 = "Prebytes";
    if(S1 === S2){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

stringMatch();

//Question 11

function Replace(){
    let s1 = "Hi,I am You.You prepbytes";
    let s2 = s1.replaceAll(" You.You","");
    console.log(s2);
}

Replace();

//Question 12

function splitTheString(){
    let Str = "I am utkarsh raj";
    let Split = Str.split("");
    console.log(Split);
}

splitTheString();

//Question 13

function countVowels(){
    let S = "prepbytes";
    let S1 = 0;
    let S2 = 0;
    let vowels = "aeiouAeiou";

    for(let i=0 ; i<S.length ; i++){
        if(vowels.includes(S[i])){
            S1++;
        }else{
            S2++;
        }
    }
    console.log(S1,S2);
}

countVowels();