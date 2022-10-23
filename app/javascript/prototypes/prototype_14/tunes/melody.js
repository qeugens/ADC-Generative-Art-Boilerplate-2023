const synth = {
  volume: 0,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'triangle',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const pingPongDelay = {
  wet: 0.2,
  delayTime: 0.1,
  maxDelayTime: 1
}
const chorus = {
    wet: 0.1,
    type: 'sine',
    frequency: 1,
    delayTime: 1,
    depth: 0.5,
    spread: 0.4
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'F5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'G5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:2',
      noteName: 'A5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'G5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'D5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'E5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'F5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'E5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'C5',
      duration: '4n',
      velocity: 0.7
    },
    {
      time: '2:0:0',
      noteName: 'E5',
      duration: '4n',
      velocity: 0.8
    },
    {
      time: '2:0:2',
      noteName: 'G5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:1:0',
      noteName: 'G5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:2:0',
      noteName: 'F5',
      duration: '4n',
      velocity: 1
    },
  ],
  duration: '3m'
}

export { synth, chorus, pingPongDelay, sequence }
