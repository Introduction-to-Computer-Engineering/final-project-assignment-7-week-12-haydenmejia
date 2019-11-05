//manual-calibration of soil sensor 
//Soil moisture sensor for Microbit 
let moistureReading: number = 0 //initializing variable 
basic.forever(function () { //our sampling loop 
pins.digitalWritePin(DigitalPin.P6, 1) //turns power for sensor on 
moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 10, 750, 0, 4) //reads data from sensor and maps value ranges to 0 - 4 
// moistureReading = 4 //for prototyping without sensor 
//basic.showNumber(Math.round(moistureReading)) //display moisture value 
// basic.pause(500) 
// basic.clearScreen() 
switch (Math.round(moistureReading)) { //switching between the 5 possible values of moistureReading 
case 0: 
basic.showIcon(IconNames.Chessboard) //displays checkerboard meaning no reading or dry 
basic.pause(100) 
basic.clearScreen() 
break; 
case 1: 
for (let x = 0; x < 5; x++) { 
led.plotBrightness(x, 4, 255) //displays single bar 
} 
break; 
case 2: 
for (let y = 4; y > 2; y--) { //displays 2 bars 
for (let x = 0; x < 5; x++) { 
led.plotBrightness(x, y, 255) 
} 
} 
break; 
case 3: 
for (let y = 4; y > 1; y--) { //displays 3 bars 
for (let x = 0; x < 5; x++) { 
led.plotBrightness(x, y, 255) 
} 
} 
break; 
case 4: 
for (let y = 4; y > 0; y--) { //displays 4 bars 
for (let x = 0; x < 5; x++) { 
led.plotBrightness(x, y, 255) 
} 
} 
break; 
} 
pins.digitalWritePin(DigitalPin.P6, 0) //turns off sensor 
basic.pause(2000) //pauses before repeating the soil sampling 
basic.clearScreen() //clears display before next sampling round 
}) 

 
 

 
