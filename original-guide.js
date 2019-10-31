basic.forever(function () {   //function that wraps the leds in a continious cycle
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(4000)                      
    pins.digitalWritePin(DigitalPin.P0, 0) 
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(4000)
    pins.digitalWritePin(DigitalPin.P1, 0)    //the pins are changing from one LED to the next changing the LED every 4 seconds.
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(4000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(1000)
})
