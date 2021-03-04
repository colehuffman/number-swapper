// Increases the first number by 1
input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
    basic.pause(1000)
    basic.clearScreen()
})
// Shows both numbers
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(_1)
    basic.pause(200)
    basic.showNumber(_2)
    basic.pause(1000)
    basic.clearScreen()
})
// Increases the second number by 1
input.onButtonPressed(Button.B, function () {
    _2 += 1
    basic.showNumber(_2)
    basic.pause(1000)
    basic.clearScreen()
})
// Shows both numbers in reverse order
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(_2)
    basic.pause(200)
    basic.showNumber(_1)
    basic.clearScreen()
})
// Sets both numbers to 0
let _2 = 0
let _1 = 0
_1 = 0
_2 = 0
