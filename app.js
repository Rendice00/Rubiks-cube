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


        var isKeyDown = false;

        rotateCube(-220,-90)

        document.documentElement.addEventListener('mousedown', function (e) {
            isKeyDown = true;
            rotateCube(e.clientX, e.clientY)
        })


        document.documentElement.addEventListener('mouseup', function (e) {
            isKeyDown = false;
            rotateCube(0,0)
        })

        function rotateCube(x, y) {
            console.log(x, y)
            let Xvalue = Math.floor((x / 4 + 100))
            let Yvalue = Math.floor((y / 4 + 100))
            box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`
        }