// Increases the first number by 1
input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
    basic.pause(500)
    basic.clearScreen()
})
// Shows both numbers
input.onButtonPressed(Button.AB, function () {
    if (_3 > 0 && _4 > 0) {
        basic.showNumber(_2)
        basic.pause(200)
        basic.showNumber(_1)
        basic.clearScreen()
    } else {
        basic.showNumber(_1)
        basic.pause(200)
        basic.showNumber(_2)
        basic.pause(1000)
        basic.clearScreen()
    }
})
// Increases the second number by 1
input.onButtonPressed(Button.B, function () {
    _2 += 1
    basic.showNumber(_2)
    basic.pause(500)
    basic.clearScreen()
})
// Shows both numbers in reverse order
input.onGesture(Gesture.Shake, function () {
    _3 = _1
    _4 = _2
})
// Sets both numbers to 0
let _2 = 0
let _1 = 0
let _4 = 0
let _3 = 0
_1 = 0
_2 = 0
_3 = 0
_4 = 0
