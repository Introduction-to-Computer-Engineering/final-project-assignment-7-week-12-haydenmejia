//soil sensor automatic ranging 

 
 

//global variables 

let sample: number[] = []; 

let lowAverage: number = 1 

let highAverage: number = 100 

let moistureReading: number = 0 

 
 

//main program 

 
 

//creates 6 rounds of moisture sampling  

for (let sampleRound = 0; sampleRound < 6; sampleRound++) { 

if (sampleRound % 2 == 0) { //true if "index" is a even number 

sampleSoil(4) //argument directs samplSoil function to display Up Arrow 

} else { //true if "index" is odd 

sampleSoil(0) //argument directs samplSoil function to display Down Arrow 

} 

} 

 
 

//averaging of 6 samples into two averages for high and low 

 
 

//Adds the three low readings and divides by three to get an average 

lowAverage = Math.round((sample[0] + sample[2] + sample[4]) / 3) 

 
 

//Adds the three high readings and divides by three to get an average 

highAverage = Math.round((sample[1] + sample[3] + sample[5]) / 3) 

 
 

//displays the unmapped averages for user reference purposes 

basic.showString("low") 

basic.showNumber(lowAverage) 

basic.showString("high") 

basic.showNumber(highAverage) 

 
 

//moisture level program with led level display 

basic.forever(function () { 

pins.digitalWritePin(DigitalPin.P6, 1) //turns power for sensor on 

 
 

//reads data from sensor 

//maps sensor values from "lowAverage" - "highAverage" ranges to new values 0 - 4 

moistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), lowAverage, highAverage, 0, 4) 

 
 
 

//switching between the 5 possible values of moistureReading i.e 0,1..4 

switch (Math.round(moistureReading)) { 

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

 
 

//the main function that handles countdown and sampling used for averaging 

function sampleSoil(direction: number): void { 

 
 

//the countdown loop 

for (let index = 3; index > 0; index--) { 

basic.showArrow(direction) //chooses which direction the arrow points 0 = up, 4 = down 

 
 

//next two lines help with visual timing 

basic.clearScreen() 

basic.pause(100) 

} 

 
 

//sampling phase - shows user that sampling is "beginning" with square-dot icon 

for (let flash = 0; flash < 3; flash++) { //3 total flashes 

basic.showLeds(` 

# # # # # 

# . . . # 

# . # . #  

# . . . # 

# # # # # 

`) 

basic.clearScreen() 

basic.pause(100) 

} 

 
 

basic.pause(10) //for potential processor timing issues 

 
 

//after flashing 3 times, soil moisture sensor measured  

pins.digitalWritePin(DigitalPin.P6, 1) //turns power for sensor ON 

basic.pause(30) //just in case for processor timimg 

sample.push(pins.analogReadPin(AnalogPin.P0)) //****reads data from sensor*** then appends the data to the "sample" array  

pins.digitalWritePin(DigitalPin.P6, 0) //turns OFF sensor 

 
 
 

basic.pause(200) 

basic.showIcon(IconNames.Happy) //makes user feel happy and let's them know they are changing moisture levels to measure 

basic.pause(500) 

 
 

} 

 
 
