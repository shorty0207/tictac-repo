let main = document.querySelector('#main')


let colors = []
let realColors = [1,2,3,4,5,6,7,8]

generateColor()
makeSquares ()

function makeSquares (){
    for (let i = 0; i < 16; i++) {


        let randomColor = Math.floor( Math.random() * colors.length)
        main.innerHTML += `
        <div class="btn" id="${colors[randomColor]}" onclick="boxClicked(event,${i})"> </div>`
        colors = colors.filter((item, index) => index !==randomColor)

    }
}

function boxClicked (event,i){


    console.log(i)
}

function generateColor() {
    for(let x = 0; x < 8; x++){
        let randomColor = "#"+((1<<24)*Math.random()|0).toString(16)
        colors.push(randomColor)
    }
    colors = [...colors,...colors]
    console.log(colors)
}























