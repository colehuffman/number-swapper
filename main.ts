// Increases #1 by 1
input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
    basic.pause(500)
    basic.clearScreen()
})
/**
 * INSTRUCTIONS FOR OPERATION
 * 
 * -Set both numbers
 * 
 * -Press A+B
 * 
 * -Watch numbers in correct order
 * 
 * -Shake micro bit
 * 
 * -Press A+B again
 * 
 * -Watch numbers in reversed order
 */
input.onButtonPressed(Button.AB, function () {
    // If 3 or 4 are greater than 0, the numbers will display in reversed order. however, if they are not, the numbers will display in the correct order
    if (_3 > 0 || _4 > 0) {
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
// Increases #2 by 1
input.onButtonPressed(Button.B, function () {
    _2 += 1
    basic.showNumber(_2)
    basic.pause(500)
    basic.clearScreen()
})
// Sets 3 and 4 to be equal to 1 and 2,
input.onGesture(Gesture.Shake, function () {
    _3 = _1
    _4 = _2
})
// Sets all variables to 0 on start
let _2 = 0
let _1 = 0
let _4 = 0
let _3 = 0
_1 = 0
_2 = 0
_3 = 0
_4 = 0
