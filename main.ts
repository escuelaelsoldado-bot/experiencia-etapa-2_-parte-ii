basic.forever(function () {
    if (input.lightLevel() > 60) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.stopAllSounds()
    }
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showIcon(IconNames.Meh)
})
