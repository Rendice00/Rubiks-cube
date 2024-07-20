
let box = document.querySelector('.box')

    const color = ['#009b48 ', '#0046ad ', '#ff5800 ', '#b71234 ', '#ffffff ', '#ffd500 '];

    const directions = ['front', 'back', 'left', 'right', 'top', 'bottom']

    for (var i of directions) {
        let direction = document.createElement('div')
        box.appendChild(direction)
        direction.classList.add(i)

        direction.setAttribute('style', `--clr:${color[directions.indexOf(i)]}`)

        for (let j = 0; j < 9; j++) {
            let span = document.createElement('span')
            direction.appendChild(span)
        }
        direction.querySelector('span').setAttribute('style', `--clr:${color[directions.indexOf(i)]}`)
    }
    rotateCube(-220,-100)
    isKeyDown = false;
    document.documentElement.addEventListener('mousedown', function (e) {
        isKeyDown = true;
        rotateCube(e.clientX, e.clientY)
    });


    document.documentElement.addEventListener('mouseup', function (e) {
        isKeyDown = false;
    });

    document.documentElement.addEventListener('mousemove', function (e) {
        isKeyDown && rotateCube(e.clientX, e.clientY)
    })
    function rotateCube(x, y) {
        console.log(x, y)
        let Xvalue = x/2 + 100
        let Yvalue = y/2 + 100
        box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`
    }