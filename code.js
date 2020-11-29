const container = document.querySelector(".container")

let colors = []

function generateGame (){
    container.innerHTML = ""

  //GENERATE COLORS
    for (let i = 0; i < 9; i++) {
        let rnd = "#"+((1<<24)*Math.random()|0).toString(16)

        colors.push(rnd, rnd)
    }

    console.log(colors)

    //GENERATE HTML
    for (let i = 0; i <18 ; i++) {
        let randomIndex = Math.floor(Math.random() * colors.length)

        container.innerHTML +=`
            <span class=" ${colors[randomIndex]}" onclick="clickBox(event)"></span>
           
        `
        colors.splice(randomIndex, 1)
    }
}

generateGame()

let selected = {
    one: null,
    two: null,
    counter: 0
}

function clickBox (event) {
    let color = event.target.className

    if (!event.target.classList.contains('selected')) {

        console.log('works')
        if (selected.counter === 0) {
            selected.one = event.target
            selected.one.style.backgroundColor = color
            selected.one.classList.add("selected")
            return selected.counter++
        }
        if (selected.counter === 1) {
            selected.two = event.target
            selected.two.style.backgroundColor = color
            selected.two.classList.add("selected")
            selected.counter++
            checkColorMatch ()
        }
    }
}


function checkColorMatch () {
    if (selected.one.className === selected.two.className){


        selected.counter = 0
    } else{
        setTimeout(() =>{
            selected.one.classList.remove("selected")
            selected.two.classList.remove("selected")
            selected.one.style.backgroundColor = '#bfc4c8'
            selected.two.style.backgroundColor = '#bfc4c8'
            selected.counter =0
        },1000)

    }
}

























