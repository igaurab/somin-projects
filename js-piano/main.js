const sa = document.querySelector('.sa')
const re  = document.querySelector('.re')
const ga = document.querySelector('.ga')
const ma = document.querySelector('.ma')
const pa = document.querySelector('.pa')
const dha = document.querySelector('.dha')
const ni = document.querySelector('.ni')

const sa1 = document.querySelector('#sa')
const re1 = document.querySelector('#re')
const ga1 = document.querySelector('#ga')
const ma1 = document.querySelector('#ma')
const pa1 = document.querySelector('#pa')
const dha1 = document.querySelector('#dha')
const ni1 = document.querySelector('#ni')


const sa2 = document.querySelector('.sa2')
const re2 = document.querySelector('.re2')
const ma2 = document.querySelector('.ma2')
const pa2 = document.querySelector('.pa2')
const dha2 = document.querySelector('.dha2')


const Db = document.querySelector('#Db')
const Ab  = document.querySelector('#Ab') 
const Eb  = document.querySelector('#Eb') 
const Gb = document.querySelector('#Gb')
const Bb = document.querySelector('#Bb')



sa2.addEventListener('click' , () =>{
    Db.play()
})
re2.addEventListener('click' , () =>{
    Eb.play()
})
ma2.addEventListener('click' , () =>{
    Gb.play()
})
pa2.addEventListener('click' , () =>{
    Ab.play()
})
dha2.addEventListener('click' , () =>{
    Bb.play()
})

sa.addEventListener('click' , () =>{
    sa1.play()
})
re.addEventListener('click' , () =>{
    re1.play()
})
ga.addEventListener('click' , () =>{
    ga1.play()
})
ma.addEventListener('click' , () =>{
    ma1.play()
})
pa.addEventListener('click' , () =>{
    pa1.play()
})
dha.addEventListener('click' , () =>{
    dha1.play()
})
ni.addEventListener('click' , () =>{
    ni1.play()
})
