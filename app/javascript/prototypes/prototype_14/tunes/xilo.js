const channel = {
  volume: -10,
  mute: false
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A3',
      duration: '4n',
      velocity: 0.8
    },
    {
      time: '0:1:0',
      noteName: 'A3',
      duration: '4n',
      velocity: 0.4
    },
    {
      time: '0:2:0',
      noteName: 'A3',
      duration: '4n',
      velocity: 0.8
    },
    {
      time: '0:3:0',
      noteName: 'A3',
      duration: '4n',
      velocity: 0.4
    }

  ],
  duration: '1m'
}

export { channel, sequence }
