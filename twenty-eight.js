input.onButtonPressed(Button.A, function () {    //turning the microbit to sleep mode
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {    //waking the microbit up from sleep and starting where the animation left off
    led.enable(true)
})
input.onGesture(Gesture.Shake, function () {    //the shake gesture diplays screen saver and shows a smiley face on the LEDs
    basic.showString("Screen Saver")
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        # . . . #
        # # # # #
        `)
})
let flip = 0
let acceleration = 11
basic.forever(function () {                      //this function is set for the cascading like leds as they move on the LED board
        for (let bRight = 0; bRight <= 4; bRight++) { //sets the bottom right led matrix
            flip = 4 - bRight
            for (let center = 0; center <= 4; center++) { //centered the led matrix
                led.plot(bRight, flip) 
                basic.pause(acceleration)
                led.plot(flip, bRight)
                basic.pause(acceleration)    //process of the LEDs going in and out of its state
                led.plot(flip - center, flip)
                basic.pause(acceleration)
                led.plot(flip, flip - center)
                basic.pause(acceleration)
            }
        }
        for (let bRight = 0; bRight <= 4; bRight++) {
            flip = 4 - bRight
            for (let center = 0; center <= 4; center++) {
                led.unplot(bRight, flip)
                basic.pause(acceleration)
                led.unplot(flip, bRight)
                basic.pause(acceleration)
                led.unplot(flip - center, flip)
                basic.pause(acceleration)
                led.unplot(flip, flip - center)
                basic.pause(acceleration)
            }
        }
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
