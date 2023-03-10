motion.drive_straight(100)
control.wait_micros(100)
motion.stop()

def on_forever():
    pass
basic.forever(on_forever)
