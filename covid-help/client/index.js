const text = document.querySelector('.text')
const btnSubmit = document.querySelector('.btn')


btnSubmit.addEventListener('click' , () =>{
    const location = text.value
    text.value = ''

    window.open(`./display.html/?location=${location}`)
})

/**
 * 
 * 
 * 
 */