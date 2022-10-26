import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass.js'
import * as melodySettings from './tunes/melody.js'
import * as drumsSettings from './tunes/drums.js'
import * as xiloSettings from './tunes/xilo.js'
import * as maracasSettings from './tunes/maracas.js'
import * as tambourineSettings from './tunes/tambourine.js'

import ToneSynth from './modules/ToneSynth.jsx'
import Channel from './modules/Channel.jsx'

import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'

let bassSynth
let bassChorus
let bassPingPongDelay

let melodySynth
let melodyChorus
let melodyPingPongDelay

let samplerDrumsChannel
let samplerXiloChannel
let samplerMaracasChannel
let samplerTambourineChannel

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bassSettings,
      melodySettings,
      drumsSettings,
      xiloSettings,
      maracasSettings,
      tambourineSettings
    }
  }

  handleStart = () => {
    const { bassSettings, melodySettings, drumsSettings, xiloSettings, maracasSettings, tambourineSettings } = this.state

    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth)
    bassChorus = new Tone.Chorus(bassSettings.chorus).start()

    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()

    bassSynth.chain(bassChorus, bassPingPongDelay)

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)

    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = true
    //
    //
    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()

    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination()

    melodySynth.chain(melodyChorus, melodyPingPongDelay)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)

    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = true
    //
    //


    const samplerDrums = new Tone.Sampler({
      urls: {
        A1: '00001-Linn-9000-BassDrumrum1.mp3',
        A2: '00017-Linn-9000-Snare.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(['A1', 'A2', 'A1', 'A2'], 0.5)
      // }
    })
    samplerDrumsChannel = new Tone.Channel(drumsSettings.channel).toDestination()

    samplerDrums.chain(samplerDrumsChannel)

    const drumsPart = new Tone.Part((time, note) => {
      samplerDrums.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequence.steps).start(0)

    drumsPart.loopEnd = drumsSettings.sequence.duration
    drumsPart.loop = true


    const samplerXilo = new Tone.Sampler({
      urls: {
        A1: 'xilo.mp3',
      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(['A1', 'A2', 'A1', 'A2'], 0.5)
      // }
    })
    samplerXiloChannel = new Tone.Channel(xiloSettings.channel).toDestination()

    samplerXilo.chain(samplerXiloChannel)

    const xiloPart = new Tone.Part((time, note) => {
      samplerXilo.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, xiloSettings.sequence.steps).start(0)

    xiloPart.loopEnd = xiloSettings.sequence.duration
    xiloPart.loop = true


    const samplerMaracas = new Tone.Sampler({
      urls: {
        A1: 'maracas.mp3',
      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(['A1', 'A2', 'A1', 'A2'], 0.5)
      // }
    })
    samplerMaracasChannel = new Tone.Channel(maracasSettings.channel).toDestination()

    samplerMaracas.chain(samplerMaracasChannel)

    const maracasPart = new Tone.Part((time, note) => {
      samplerMaracas.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, maracasSettings.sequence.steps).start(0)

    maracasPart.loopEnd = maracasSettings.sequence.duration
    maracasPart.loop = true


    const samplerTambourine = new Tone.Sampler({
      urls: {
        A1: 'tambourine.mp3',
      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(['A1', 'A2', 'A1', 'A2'], 0.5)
      // }
    })
    samplerTambourineChannel = new Tone.Channel(tambourineSettings.channel).toDestination()

    samplerTambourine.chain(samplerTambourineChannel)

    const tambourinePart = new Tone.Part((time, note) => {
      samplerTambourine.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, tambourineSettings.sequence.steps).start(0)

    tambourinePart.loopEnd = tambourineSettings.sequence.duration
    tambourinePart.loop = true


    Tone.Transport.start()

  }

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    }

    this.setState({
      melodySettings
    })
  }

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      bassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      bassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      bassSettings.chorus.wet = value
    }

    this.setState({
      bassSettings
    })
  }

  handleDrumsValueChange = (property, value) => {
    const { drumsSettings } = this.state

    if (property === 'channelVolume') {
      samplerDrumsChannel.volume.value = value
      drumsSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerDrumsChannel.mute = value
      drumsSettings.channel.mute = value
    }

    this.setState({
      drumsSettings
    })
  }

  handleXiloValueChange = (property, value) => {
    const { xiloSettings } = this.state

    if (property === 'channelVolume') {
      samplerXiloChannel.volume.value = value
      xiloSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerXiloChannel.mute = value
      xiloSettings.channel.mute = value
    }

    this.setState({
      xiloSettings
    })
  }

  handleMaracasValueChange = (property, value) => {
    const { maracasSettings } = this.state

    if (property === 'channelVolume') {
      samplerMaracasChannel.volume.value = value
      maracasSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerMaracasChannel.mute = value
      maracasSettings.channel.mute = value
    }

    this.setState({
      maracasSettings
    })
  }

  handleTambourineValueChange = (property, value) => {
    const { tambourineSettings } = this.state

    if (property === 'channelVolume') {
      samplerTambourineChannel.volume.value = value
      tambourineSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerTambourineChannel.mute = value
      tambourineSettings.channel.mute = value
    }

    this.setState({
      tambourineSettings
    })
  }

  render() {
    const { melodySettings, bassSettings, drumsSettings, xiloSettings, maracasSettings, tambourineSettings } = this.state

    return (
      <div className="Container">
        <SC_Button
          text="dada synth start"
          handleClick={this.handleStart}
        />

        <div className="display">
        <div className="synths">
        <div className="melodySynth">
        <ToneSynth
          name="lead synth type"
          settings={melodySettings}
          handleValueChange={this.handleMelodyValueChange}
        />
        </div>

        <div className="bassSynth">
        <ToneSynth
          name="bass synth type"
          settings={bassSettings}
          handleValueChange={this.handleBassValueChange}
        />
        </div>
        </div>

        <div className="channels">
        <div className="drums">
        <Channel
          name='drums'
          settings={drumsSettings}
          handleValueChange={this.handleDrumsValueChange}
        />
        </div>

        <div className="xilo">
        <Channel
          name='xilo'
          settings={xiloSettings}
          handleValueChange={this.handleXiloValueChange}
        />
        </div>

        <div className="maracas">
        <Channel
          name='maracas'
          settings={maracasSettings}
          handleValueChange={this.handleMaracasValueChange}
        />
        </div>

        <div className="tambourine">
        <Channel
          name='tambourine'
          settings={tambourineSettings}
          handleValueChange={this.handleTambourineValueChange}
        />
        </div>
        </div>
        </div>
      </div>
    )
  }
}
