let redSound = new Audio("Sound/Red.wav");
let blueSound = new Audio("Sound/Blue.wav");
let yellowSound = new Audio("Sound/Yellow.wav");
let greenSound = new Audio("Sound/Green.wav");
let failSound = new Audio("Sound/Fail2.wav");

let orderQueue = [];
let currentQueue = [];

function delay(milsec)
{
 return new Promise(resolve => {
    setTimeout(resolve, milsec);
 });
}



function gameStart()
{ 
    
    orderQueue = []; 
    gameRun()

}

async function gameRun()
{

    let numberRandom;

    if (currentQueue.length == 0);
    {

        numberRandom = Math.round(Math.random() * 100);
        
        if (numberRandom < 26)
        {
            orderQueue.push("Red");
        }
        else if (numberRandom < 51)
        {
            orderQueue.push("Blue")
        }
        else if (numberRandom < 76)
        {
            orderQueue.push("Yellow")
        }
        else
        {
            orderQueue.push("Green")
        }
        
        console.log(orderQueue)
        let orderQueueSize = orderQueue.length

        for (let x = 0; x < orderQueueSize; x++)
        {
            if (orderQueue[x] == "Red")
            {
                const elementRed = document.querySelector('.red');

                await delay(400)
                elementRed.style.backgroundColor = '#680606';

                redSound.play();

                await delay(400)
                elementRed.style.backgroundColor = 'red';
                currentQueue.push("Red")
                
            }

            else if (orderQueue[x] == "Blue")
            {
                const elementBlue = document.querySelector('.blue');

                await delay(400)
                elementBlue.style.backgroundColor = '#0b0b66';
                
                blueSound.play();

                await delay(400)
                elementBlue.style.backgroundColor = 'blue';
                currentQueue.push("Blue")

            }

            else if (orderQueue[x] == "Yellow")
            {
                const elementYellow = document.querySelector('.yellow');

                await delay(400)
                elementYellow.style.backgroundColor = '#8b8b08';
                
                yellowSound.play();
                
                await delay(400)
                elementYellow.style.backgroundColor = 'yellow';
                currentQueue.push("Yellow")

            }

            else if (orderQueue[x] == "Green")
            {
                const elementGreen = document.querySelector('.green');

                await delay(400)
                elementGreen.style.backgroundColor = '#0a530a';
                
                greenSound.play();
                
                await delay(400)
                elementGreen.style.backgroundColor = 'green';

                currentQueue.push("Green")

            }
        }
    }
    

}


async function userPlay(userInput)
{  
    
    if (currentQueue.length != 0)
    {

        if (userInput == 'Red' && currentQueue[0] == 'Red')
        {
            const elementRed = document.querySelector('.red');

            await delay(200)
            elementRed.style.backgroundColor = '#680606';

            redSound.play();

            await delay(200)
            elementRed.style.backgroundColor = 'red';

            currentQueue = currentQueue.slice(1);
        }

        else if (userInput == 'Blue' && currentQueue[0] == 'Blue')
        {
            const elementBlue = document.querySelector('.blue');

            await delay(200)
            elementBlue.style.backgroundColor = '#0b0b66';
            
            blueSound.play();

            await delay(200)
            elementBlue.style.backgroundColor = 'blue';

            currentQueue = currentQueue.slice(1);
        }

        else if (userInput == 'Yellow' && currentQueue[0] == 'Yellow')
        {
            const elementYellow = document.querySelector('.yellow');

            await delay(200)
            elementYellow.style.backgroundColor = '#8b8b08';
            
            yellowSound.play();
            
            await delay(200)
            elementYellow.style.backgroundColor = 'yellow';

            currentQueue = currentQueue.slice(1);
        }

        else if (userInput == 'Green' && currentQueue[0] == 'Green')
        {
            const elementGreen = document.querySelector('.green');

            await delay(200)
            elementGreen.style.backgroundColor = '#0a530a';
            
            greenSound.play();
            
            await delay(200)
            elementGreen.style.backgroundColor = 'green';

            currentQueue = currentQueue.slice(1);
        }

        else
        {
            await delay(200)
            failSound.play();
            await delay(200)
            alert("Failed");
            orderQueue = [];
            currentQueue = [];
        }

        if (currentQueue.length == 0 && orderQueue.length == 5)
        {
            orderQueue = [];
            alert("Success");
        }
        else if (currentQueue.length == 0 && (orderQueue.length != 5 && orderQueue.length != 0))
        {
            
            gameRun();
            
        };

    }

}