let signal = 0
basic.clearScreen()
basic.forever(function on_forever() {
    if (input.rotation(Rotation.Roll) > 30) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    
    let signal = pins.digitalReadPin(DigitalPin.P2)
    if (signal == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # # # #
            . # # # .
            . . # . .
        `)
    }
    
})
