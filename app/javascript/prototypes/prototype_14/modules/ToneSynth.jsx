import React, { Component } from 'react'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet'
import SC_Slider from '../components/SC_Slider'


export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange, name } = this.props
    const options = ['sine', 'square', 'sawtooth', 'triangle', 'fatsine', 'fattriangle', 'fmsine', 'fmsquare', 'fmtriangle', 'amsine', 'amsawtooth', 'amtriangle']

    return (
      <div className="ToneSynth">
      <SC_ToggleButtonSet
        name={name}
        options={options}
        value={settings.synth.oscillator.type}
        property="synthType"
        handleChange={handleValueChange}
      />

      <SC_Slider
        // name="Synth Envelope Attack"
        min={0}
        max={10}
        step={0.01}
        value={settings.synth.envelope.attack}
        property="synthEnvelopeAttack"
        handleChange={handleValueChange}
      />

      <SC_Slider
        // name="Synth Envelope Decay"
        min={0}
        max={10}
        step={0.01}
        value={settings.synth.envelope.decay}
        property="synthEnvelopeDecay"
        handleChange={handleValueChange}
      />

      <SC_Slider
        // name="Synth Envelope Sustain"
        min={0}
        max={1}
        step={0.01}
        value={settings.synth.envelope.sustain}
        property="synthEnvelopeSustain"
        handleChange={handleValueChange}
      />

      <SC_Slider
        // name="Synth Envelope Release"
        min={0}
        max={10}
        step={0.01}
        value={settings.synth.envelope.release}
        property="synthEnvelopeRelease"
        handleChange={handleValueChange}
      />

      <SC_Slider
        // name="pingPongDelay wet"
        min={0}
        max={1}
        step={0.01}
        value={settings.pingPongDelay.wet}
        property="pingPongDelayWet"
        handleChange={handleValueChange}
      />

      <SC_Slider
        // name="chorus wet"
        min={0}
        max={1}
        step={0.01}
        value={settings.chorus.wet}
        property="chorusWet"
        handleChange={handleValueChange}
      />
    </div>)
  }
}
