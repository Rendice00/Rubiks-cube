function rotateCube(x, y) {
    console.log(x, y)
    let Xvalue = x/2 + 100
    let Yvalue = y/2 + 100
    box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`
}