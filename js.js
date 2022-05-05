let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    count = 0
canvas.width = 0
canvas.height = 0
function loop2() {
    let input = document.getElementById("number"),
        button = document.getElementById("button"),
        value = input.value
    input.remove()
    button.remove()
    grid = +value,
        width = grid,
        height = grid,
        x = -grid,
        y = -grid,
        dy = grid,
        dx = grid
        canvas.width = document.documentElement.scrollWidth
        canvas.height = document.documentElement.scrollHeight
        requestAnimationFrame(loop);
}
function loop() {
    requestAnimationFrame(loop);
    if (++count < 1) {
        return
    }
    count = 0
    x += dx;
    y += dy;
    if (x >= canvas.width - width) {
        dx = -grid
    }
    if (y >= canvas.height - height) {
        dy = -grid
    }
    if (y <= 0) {
        dy = grid
    }
    if (x <= 0) {
        dx = grid
    }
    context.fillRect(x, y, width, height);
}
