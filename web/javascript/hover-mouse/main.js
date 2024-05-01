const cursorImage = document.querySelectorAll('.cursor-image');

cursorImage.forEach((element) => {
    document.addEventListener('mousemove', e => {
        element.style.top = e.offsetY + 'px';
        element.style.left = e.offsetX + 'px';
    });
});
