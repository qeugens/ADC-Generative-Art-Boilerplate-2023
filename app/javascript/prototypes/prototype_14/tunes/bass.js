const synth = {
  volume: -15,
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
    type: 'fmsquare',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const pingPongDelay = {
  wet: 0.4,
  delayTime: 0.25,
  maxDelayTime: 1
}
const chorus = {
    wet: 0.3,
    type: 'sine',
    frequency: 1,
    delayTime: 1,
    depth: 0.7,
    spread: 1
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'C2',
      duration: '1m',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'E2',
      duration: '1m',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'A2',
      duration: '1m',
      velocity: 1
    },
    {
      time: '2:1:0',
      noteName: 'G2',
      duration: '1m',
      velocity: 1
    }

  ],
  duration: '3m'
}

export { synth, chorus, pingPongDelay, sequence }
