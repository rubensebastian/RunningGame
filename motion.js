let motionOfArc = () => {
    let counter = 0
    let motion = setInterval(() => {
        if (counter > 800) {
            clearInterval(motion)
            return
        }
        let height = Math.pow(counter / 100 - 4, 2) - 16
        console.log(height)
        counter++
    }, 1)
}

motionOfArc()