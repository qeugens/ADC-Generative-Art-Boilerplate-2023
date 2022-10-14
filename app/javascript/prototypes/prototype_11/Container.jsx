import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'
import SC_ToggleButtonSet from './SC_ToggleButtonSet'
import SC_Slider from './SC_Slider'

let synth1
let synth2
let chorus1
let pingPongDelay1

export default class Container extends Component {
  constructor(props) {
    super(props)

    const synth1Settings = {
      volume: -20,
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
        type: 'sawtooth',
        modulationType: 'sawtooth',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }
    const synth2Settings = {
      volume: -20,
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
        type: 'sine',
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }

    const chorus1Settings = {
      wet: 0.3,
      type: 'sine',
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    }

    const pingPongDelay1Settings = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

    this.state = {
      synth1Settings,
      synth2Settings,
      chorus1Settings,
      pingPongDelay1Settings
    }
  }

  handleStart = () => {
    const { synth1Settings, synth2Settings, chorus1Settings, pingPongDelay1Settings } = this.state

    synth1 = new Tone.Synth(synth1Settings)
    synth2 = new Tone.Synth(synth2Settings)

    chorus1 = new Tone.Chorus(chorus1Settings).start()

    pingPongDelay1 = new Tone.PingPongDelay(
      pingPongDelay1Settings
    ).toDestination()

    synth1.chain(chorus1, pingPongDelay1)

    const sequence1 = [
      {
        time: '0:0:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:0:2',
        noteName: 'A3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '0:1:0',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:2:0',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:3:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:3:1',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:3:2',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:0:0',
        noteName: 'D3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:0',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:2',
        noteName: 'E4',
        duration: '4n',
        velocity: 0.7
      },
      {
        time: '1:1:3',
        noteName: 'D4',
        duration: '4n',
        velocity: 0.8
      },
      {
        time: '1:2:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:3:0',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:3:2',
        noteName: 'C4',
        duration: '4n',
        velocity: 1
      }
    ]
    const sequence2 = [
      {
        time: '0:0:0',
        noteName: 'C3',
        duration: '1m',
        velocity: 1
      },
      {
        time: '1:0:0',
        noteName: 'G4',
        duration: '1m',
        velocity: 1
      }
    ]

    const part1 = new Tone.Part((time, note) => {
      synth1.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence1).start(0)

    const part2 = new Tone.Part((time, note) => {
      synth2.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence2).start(0)

    part1.loopEnd = '2m'
    part1.loop = true
    Tone.Transport.start()

    part2.loopEnd = '2m'
    part2.loop = true
    Tone.Transport.start()
  }

  handleValueChange = (property, value) => {
    const { synth1Settings, synth2Settings, chorus1Settings, pingPongDelay1Settings } = this.state

    if (property === 'synthType') {
      synth1.oscillator.type = value
      synth1Settings.oscillator.type = value
      synth2Settings.oscillator.type = value
    } else if (property === 'pingPongDelayWet') {
      pingPongDelay1.wet.value = value
      pingPongDelay1Settings.wet = value
    } else if (property === 'chorusWet') {
      chorus1.wet.value = value
      chorus1Settings.wet = value
    }

    this.setState({
      synth1Settings,
      synth2Settings,
      chorus1Settings,
      pingPongDelay1Settings
    })
  }

  render() {
    const { synth1Settings, synth2Settings, chorus1Settings, pingPongDelay1Settings } = this.state

    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleStart}
        />

        <SC_ToggleButtonSet
          name="Type"
          options={options}
          value={synth1Settings.oscillator.type}
          property="synthType"
          handleChange={this.handleValueChange}
        />

        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={pingPongDelay1Settings.wet}
          property="pingPongDelayWet"
          handleChange={this.handleValueChange}
        />

        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={chorus1Settings.wet}
          property="chorusWet"
          handleChange={this.handleValueChange}
        />

        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleStart}
        />

        <SC_ToggleButtonSet
          name="Type"
          options={options}
          value={synth2Settings.oscillator.type}
          property="synthType"
          handleChange={this.handleValueChange}
        />

      </div>
    )
  }
}
