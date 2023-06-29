let userNum
let userLifes
let quote
let randomNum
let foundnum = false
const numbers = []
function setNum()
{
    while (!userNum)
    {
        userNum = prompt("inserisci un numero")
       
        //inserisco il massimo possibile che l'utente può inserire
        document.getElementById("userNum").setAttribute("max", userNum)
        document.getElementById("userNum").setAttribute("min", 1)
        document.getElementById("userNum").setAttribute("default", 1) 
        console.log(document.getElementById("submittedValue"))
        console.log(userNum)
     
    }
}

function setLifes()
{
    while(!userLifes)
    {
        quote = "scegli tra un numero compreso tra 1 e "
        userLifes = prompt("quante vite vuoi")
        sayLifes(quote, userLifes)
    }
}

function sayLifes(quote, userLifes)
{
    document.getElementById("sayNum").textContent=quote + userNum + " hai " + userLifes + " vite";

}

function checkNumber()
{

}
function setRandomNum()
{
    randomNum = Math.floor(Math.random()*userNum +1)
    console.log(randomNum)
}
//puoi rimpiazzare function() con () =>
document.getElementById("guessedNum").addEventListener("click", function() {
    if(userLifes>0)
    {
        const userNumber = document.getElementById("userNum").value;
        console.log(userNumber);

        // Check if the guessed number is already in the numbers array
        let isNumberAlreadyGuessed = numbers.includes(userNumber);

        if(!isNumberAlreadyGuessed) 
        {
            numbers.push(userNumber); // Add the number to the guessed numbers array only if it's not there yet
        }

        if(userNumber==randomNum)
        {
            document.getElementById("tellWin").textContent = "hai indovinato!"
            userLifes = -1
        }
        else 
        {
            // Decrease userLifes count only if it's a new (wrong) guess
            if(!isNumberAlreadyGuessed) 
            {
                userLifes--
            }

            if (userNumber<randomNum)
            {
                document.getElementById("tellWin").textContent ="stavo pensando ad un numero piu' grande"
            } 
            else
            {
                document.getElementById("tellWin").textContent ="stavo pensando ad un numero piu' piccolo"
            }

            sayLifes(quote,userLifes)

        }

        // Output the guessed numbers (without duplicates - thanks to our array)
        document.getElementById("tellRepeatedNum").textContent = "i numeri scelti sono: "
        
        /*STAMPO TUTTI I I NUMERI E IN BASE ALLA GRANDEZZA SCELGO IL COLORE, IN QUESTO CASO 
        USO UNA VARIABILE CHE ASSUME IL DOCUMENT.GETELEMETBYID DI ALLNUMBERS, E IN BASE AL 
        NUMERO CHE ESCE DECIDE SE COLORARE DI BLU O DI ROSSO IL NUMERO, CREA UNA VARIABILE INTERNA
        CHE ASSUME IL COLORE + IL NUMERO E ALLA FINE VIENE ASSUNTO NELLA VARIABILE CHE SPAZIA
        TUTTI I COLORELEMENT*/
        let allNumbersElement = document.getElementById("allNumbers")
        
        allNumbersElement.innerHTML = ''

        for(let i = 0; i < numbers.length; i++)
        {
            let colorElement


            if(numbers[i] > randomNum)
            {
                colorElement = '<span style = "color:blue">' + numbers[i] + '</span>'
            }
            else
            {
                colorElement = '<span style = "color:red">' + numbers[i] + '</span>'

            }
            allNumbersElement.innerHTML += ' ' + colorElement; 

        }
        
    }
    else
    {
        document.getElementById("tellWin").textContent ="mi dispiace, hai perso, ziopera, il numero a cui pensavo era il " +randomNum
    }
});



//avvio questa funzione appena viene caricata la pagina
document.addEventListener("DOMContentLoaded", setNum)
document.addEventListener("DOMContentLoaded", setLifes)
document.addEventListener("DOMContentLoaded", setRandomNum)

/*
function setLifes()
{
    while(!userLifes)
    {
        quote = "scegli tra un numero compreso tra 1 e ";
        userLifes = prompt("quante vite vuoi");

        // Here, instead of appending userLifes straight away, we append colored HTML span containing userLifes
        document.getElementById("sayNum").innerHTML = quote + userNum + " hai " + "<span style='color:blue'>" + userLifes + "</span>" + " vite";
    }
}

*/







