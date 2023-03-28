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
  {
    name: 'Simple circle generator'
  },
  {
    name: 'Using images'
  },
  {
    name: 'More images, improved data sctructure'
  },
  {
    name: 'The store concept'
  },
  {
    name: 'Using promises'
  },
  {
    name: 'Using store with promises'
  },
  {
    name: 'Cascading promises'
  },
  {
    name: 'Using promises.all'
  },
  {
    name: 'Separated Data Layer'
  },
  {
    name: 'P5 with UI'
  },
  {
    name: 'Previous P5 sketch on HYML'
  },
  {
    name: 'Tiling 1'
  },
  {
    name: 'Tiling 2'
  },
   {
    name: 'Hue Range Slider'
  },
  {
    name: 'Circles'
  },
  {
    name: 'Displacement'
  },
  {
    name: 'Tiling with UI'
  },
  {
    name: 'Questions generation'
  },
  {
    name: 'Images generation'
  },
   {
    name: 'Wanna be my friend huh'
  },
   {
    name: 'Save Image'
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
