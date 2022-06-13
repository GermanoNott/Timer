import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay
} from './elements.js'

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const sound = Sound()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

Events({ controls, timer, sound })
