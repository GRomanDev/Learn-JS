function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
            elem.style.top = pos + 'px';
        }
    }
}

document.querySelector('.btn').addEventListener('click', myAnimation);