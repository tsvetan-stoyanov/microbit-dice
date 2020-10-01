input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    dice = randint(1, 6)
    start = dice * (dice - 1) + 1
    for (let index = 0; index < dice; index++) {
        led.plot(list[start - 1], list[start])
        start += 2
    }
})
let start = 0
let dice = 0
let list: number[] = []
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
list = [2, 2, 1, 2, 3, 2, 1, 3, 2, 2, 3, 1, 1, 1, 3, 1, 1, 3, 3, 3, 1, 1, 3, 1, 1, 3, 3, 3, 2, 2, 1, 1, 3, 1, 1, 3, 3, 3, 2, 1, 2, 3]
