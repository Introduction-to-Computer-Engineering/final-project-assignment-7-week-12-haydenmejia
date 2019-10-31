//enable-matrix
//turns LEDs on and off in succession using pins 0,1,2
//Led Matrix

basic.showIcon(IconNames.Heart)//displays heart icon on led matrix
basic.forever(function () {   //function that wraps the leds in a continious cycle
    pins.digitalWritePin(DigitalPin.P0, 1)  //turns on pin 0
    basic.pause(250)                       //.25 sec on
    pins.digitalWritePin(DigitalPin.P0, 0)  //turns off pin 0
    basic.pause(250)                       //.25 sec off
    pins.digitalWritePin(DigitalPin.P1, 1)  //turns on pin 1
    basic.pause(250)
    pins.digitalWritePin(DigitalPin.P1, 0)  //turns off pin 1 
    basic.pause(250)
    pins.digitalWritePin(DigitalPin.P2, 1)  //turns on pin 2
    basic.pause(250)
    pins.digitalWritePin(DigitalPin.P2, 0)  //turns off pin 2
    basic.pause(250)

})
