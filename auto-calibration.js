//In this auto-calibration project it uses the micro:bit manual-calibration program,  

//but instead it will automatically store the soil moister values.  

//It starts by displaying a south icon, then prompts the users to take three samples of the low and three of the high ranges.  

//The micro:bit auto-calibration will recorded the results.  

//It will take the average of the low and set it to the minimum range. 

// it will also take the high average and set it to the max.  

//It will perform the mapping, exit the calibration,  

//then will display "calibration success," and finally it the program will operate as normal. 

 
 

//These are the variables 

let sensorReader = 0 

let lowSampleA: number = 0 

let lowSampleB: number = 0 

let lowSampleC: number = 0 

let highSampleA: number = 0 

let highSampleB: number = 0 

let highSampleC: number = 0 

let highAverage: number = 0 

let lowAverage: number = 0 

let soilSensor: number = 0 

 
 

//This is the calibration function.  

calibration() 

 
 

//This calibration function takes three low readings and three high readings and places them in 6 different variables. 

function calibration() { 

    while (sensorReader < 6) {//If the sensor is less than 6 the function continues to run. 

 
 

        if (sensorReader == 0) {//If it = 0 it will executes the following code. 

            if (input.buttonIsPressed(Button.A)) {//If A is pressed then the next code will be executed. 

                sensorReader = 1//This changes sensorReader to 1. 

                pins.digitalWritePin(DigitalPin.P6, 1)//Turns on the sensor connected to pin 6. 

                lowSampleA = pins.analogReadPin(AnalogPin.P12)//takes a reading from pin 12 and stores it in lowReadingA variable. 

                basic.showNumber(1)//This displays the number 1 to indicate it is the first reading. 

                pins.digitalWritePin(DigitalPin.P6, 0)//turns off the moisture sensor. 

                basic.pause(1000)//This pauses moistureLevel for 1 second so the user can see it. 

                basic.clearScreen()//This clears the screen for the next moistureLevel 

            } 

            //This displays a down arrow to indicate this is the low level. 

            basic.showLeds(` 

                . . # . . 

                . . # . . 

                # . # . # 

                . # # # . 

                . . # . . 

                `) 

        } 

        if (sensorReader == 1) {//When sensorReader = 1 the fallowing code will execute. 

            if (input.buttonIsPressed(Button.A)) {//When A is press the fallowing code will execute. 

                sensorReader = 2//changes SensorReader1 to = 2 

                pins.digitalWritePin(DigitalPin.P6, 1)//Turns on the moisture sensor connected to pin 6. 

                lowSampleB = pins.analogReadPin(AnalogPin.P12)//Will takes a reading from pin 12 and stores it in the lowReadingB variable. 

                basic.showNumber(2)//This displays the number 2 to indicate it is the second low reading. 

                pins.digitalWritePin(DigitalPin.P6, 0)//Will turns off the moisture sensor. 

                basic.pause(1000)//Will pause for 1 second. 

                basic.clearScreen()//clears the t display. 

            } 

            //This displays a down arrow to indicate this is the low level. 

            basic.showLeds(` 

                . . # . . 

                . . # . . 

                # . # . # 

                . # # # . 

                . . # . . 

                `) 

        } 

        if (sensorReader == 2) { //When SensorReader = 2 the fallowing code is executed. 

            if (input.buttonIsPressed(Button.A)) { //It's only executed if A is pressed. 

                sensorReader = 3 //Then it changes to = 3. 

                pins.digitalWritePin(DigitalPin.P6, 1) //This activates pin 6. 

                lowSampleC = pins.analogReadPin(AnalogPin.P12) //takes a reading from pin 12 and stores it in lowReadingB variable. 

                basic.showNumber(3) //shows the number 3 to tell the user it has taken the third low reading 

                pins.digitalWritePin(DigitalPin.P6, 0)//Will turns off the moisture sensor. 

                basic.pause(1000) //Will pause for 1 second. 

                basic.clearScreen() //clears the display. 

            } 

            //sThis displays a down arrow to indicate this is the low level. 

            basic.showLeds(` 

                . . # . . 

                . . # . . 

                # . # . # 

                . # # # . 

                . . # . . 

                `) 

        } 

        if (sensorReader == 3) { //When sensorReader = 3 the next code is executed. 

            if (input.buttonIsPressed(Button.A)) { //Only if A is pressed will the next code be executed. 

                sensorReader = 4 //changes SensorReaderA to = 4 

                pins.digitalWritePin(DigitalPin.P6, 1) //Activates pin 6. 

                highSampleA = pins.analogReadPin(AnalogPin.P12) // Sets highReadingC variable. 

                basic.showNumber(1)  

                pins.digitalWritePin(DigitalPin.P6, 0) //Will turns off the moisture sensor. 

                basic.pause(1000)//Will pause for 1 second. 

                basic.clearScreen() //clears the display. 

            } 

            //This displays an up arrow to indicate this is the High level. 

            basic.showLeds(` 

                . . # . . 

                . # # # . 

                # . # . # 

                . . # . . 

                . . # . . 

                `) 

        } 

        if (sensorReader == 4) { //When sensorReader = 4 the next code is executed. 

            if (input.buttonIsPressed(Button.A)) { //Only if A is pressed will the next code be executed. 

                sensorReader = 5 //changes SensorReaderA to = 5 

                pins.digitalWritePin(DigitalPin.P6, 1) //Activates pin 6. 

                highSampleB = pins.analogReadPin(AnalogPin.P12) // Sets highReadingB variable. 

                basic.showNumber(2)  

                pins.digitalWritePin(DigitalPin.P6, 0) //Will turns off the moisture sensor. 

                basic.pause(1000)//Will pause for 1 second. 

                basic.clearScreen() //clears the display. 

            } 

            //This displays an up arrow to indicate this is the High level. 

            basic.showLeds(` 

                . . # . . 

                . # # # . 

                # . # . # 

                . . # . . 

                . . # . . 

                `) 

        } 

        if (sensorReader == 5) { //When sensorReader = 5 the next code is executed. 

            if (input.buttonIsPressed(Button.A)) { //Only if A is pressed will the next code be executed. 

                sensorReader = 6 //changes SensorReaderA to = 6 

                pins.digitalWritePin(DigitalPin.P6, 1) //Activates pin 6. 

                highSampleC = pins.analogReadPin(AnalogPin.P12) // Sets highReadingC variable. 

                basic.showNumber(3)  

                pins.digitalWritePin(DigitalPin.P6, 0) //Will turns off the moisture sensor. 

                basic.pause(1000)//Will pause for 1 second. 

                basic.clearScreen() //clears the display. 

            } 

            //This displays an up arrow to indicate this is the High level. 

            basic.showLeds(` 

                . . # . . 

                . # # # . 

                # . # . # 

                . . # . . 

                . . # . . 

                `) 

        } 

        if (sensorReader == 6) { //If SensorReader = 6 next code will execute. 

            basic.showString("Calibration Done") //Displays calibration done. 

            averageLowHigh() //CThis call the function averageLowHigh. 

        } 

    } 

} 

function averageLowHigh() { 

    //This divides the 3 averages of High and Low. 

    lowAverage = (lowSampleA + (lowSampleB + lowSampleC)) / 3 

    highAverage = (highSampleA + (highSampleB + highSampleC)) / 3 

} 

//This is the bar moistureLevel display function. 

function moistureLevel() { 

//displays 4 bars 

    if (Math.round(Math.map(soilSensor, lowAverage, highAverage, 0, 4)) == 4) { 

        for (let y = 4; y > 0; y--) {     

            for (let x = 0; x < 5; x++) { 

                led.plotBrightness(x, y, 255) 

            } 

        } 

//displays 3 bars 

    } else if (Math.round(Math.map(soilSensor, lowAverage, highAverage, 0, 4)) == 3) { 

        for (let y = 4; y > 1; y--) {     

            for (let x = 0; x < 5; x++) { 

                led.plotBrightness(x, y, 255) 

            } 

        } 

    } 

//displays 2 bars 

    else if (Math.round(Math.map(soilSensor, lowAverage, highAverage, 0, 4)) == 2) { 

        for (let y = 4; y > 2; y--) {     

            for (let x = 0; x < 5; x++) { 

                led.plotBrightness(x, y, 255) 

            } 

        } 

    } 

//displays single bar 

    else if (Math.round(Math.map(soilSensor, lowAverage, highAverage, 0, 4)) == 1) { 

        for (let x = 0; x < 5; x++) { 

            led.plotBrightness(x, 4, 255)    

        } 

    } 

//This will clear the screen. 

    else { 

        basic.clearScreen() 

    } 

} 

//Pressing the B button will turn on the soil sensor for 1 second. 

input.onButtonPressed(Button.B, function () { 

    basic.clearScreen()//Clears display 

    pins.digitalWritePin(DigitalPin.P6, 1)//This activates pin 6. 

    basic.pause(1000)//This pauses the display. 

    soilSensor = pins.analogReadPin(AnalogPin.P12)//This activates pin 12 

    pins.digitalWritePin(DigitalPin.P6, 0)// this turns off the soil sensor. 

    moistureLevel()//This displays the level. 

}) 

//pressing A and B will restart the calibration.  

input.onButtonPressed(Button.AB, function () { 

    sensorReader = 0//This sets the sensorReader to 0. 

    calibration()//This call the calibration function. 

}) 
