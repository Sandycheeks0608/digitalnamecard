input.onButtonPressed(Button.A, function () {
    나이 += 1
})
input.onButtonPressed(Button.AB, function () {
    나이 = 2022 - 생년
})
input.onButtonPressed(Button.B, function () {
    나이 += -1
})
let 생년 = 0
let 나이 = 0
나이 = 0
생년 = 2007
basic.forever(function () {
    basic.showString("Yang")
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.showString("01012345678")
    basic.pause(2000)
    basic.showNumber(나이)
})
