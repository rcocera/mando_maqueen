radio.onReceivedNumber(function (receivedNumber) {
    I2C_LCD1602.ShowString("TRobot:", 0, 1)
    I2C_LCD1602.ShowNumber(receivedNumber, 9, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("START")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("IZQ")
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("STOP")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("DCHA")
    basic.showArrow(ArrowNames.East)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendString("MOTOR")
    basic.showIcon(IconNames.Target)
})
radio.setGroup(33)
I2C_LCD1602.LcdInit(39)
loops.everyInterval(1000, function () {
    I2C_LCD1602.ShowString("TMando:", 0, 0)
    I2C_LCD1602.ShowNumber(input.temperature(), 9, 0)
})
basic.forever(function () {
	
})
