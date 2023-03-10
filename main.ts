radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motion.driveStraight(50)
        basic.pause(43000)
        motion.stop()
        motion.setPowers(MotorPower.ON)
    }
    if (receivedNumber == 2) {
        motion.turnLeft(50)
        basic.pause(0.22 * 0.35 * 18000)
        motion.stop()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(52)
basic.forever(function () {
    basic.showNumber(40984098)
})
