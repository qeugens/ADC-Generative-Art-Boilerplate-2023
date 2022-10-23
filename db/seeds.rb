@prototypes_data = [
  {
    name: 'First module / First prototype'
  },
  {
    name: 'First oscillator'
  },
  {
    name: 'First homework'
  },
  {
    name: 'Oscillator with React components'
  },
  {
    name: 'Tone js basics'
  },
  {
    name: 'Tone js homework/1'
  },
  {
    name: 'Tone js homework/2'
  },
  {
    name: 'Tone js homework/3'
  },
  {
    name: 'Tone.js with UI'
  },
  {
    name: 'Tone.js with UI, better change function'
  },
  {
    name: 'Tone.js with UI, two synths'
  },
  {
    name: 'Tone.js with UI, composition'
  },
  {
    name: 'Tone.js with UI, sampler'
  },
  {
    name: 'My synth'
  },
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
