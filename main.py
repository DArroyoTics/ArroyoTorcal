signal = 0
basic.clear_screen()
def on_forever():
     if input.rotation(Rotation.ROLL) > 30:
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digital_write_pin(DigitalPin.P1, 0)
     signal = pins.digital_read_pin(DigitalPin.P2)
     if signal == 1:
         basic.show_leds("""
            . . . . .
            # # . # #
            # # # # #
            . # # # .
            . . # . .
        """)
basic.forever(on_forever)
