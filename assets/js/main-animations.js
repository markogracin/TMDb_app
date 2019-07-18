// On load animations
function animations() {
    let head = document.querySelector('.section-head');
    let body = document.querySelector('.section-body');

    if (head) {
        setTimeout(function () {
            head.classList.add('show');
        }, 500);

        window.addEventListener("scroll", function () {
            let scrollTOp = window.pageYOffset;
            head.style.transform = 'translateY(' + scrollTOp * 0.5 + 'px' + ')';
            head.style.opacity = 1 - scrollTOp / 300;
        })
    }

    if (body) {
        setTimeout(function () {
            body.classList.add('show');
        }, 500);
    }
}

// On movie click animations
function pageTransitions() {
    let head = document.querySelector('.section-head');
    let body = document.querySelector('.section-body');

    head.setAttribute(
        'style', 'transform: translateY(-5px); opacity: 0; transition: .5s cubic-bezier(0.77, 0, 0.175, 1)'
    );

    body.setAttribute(
        'style', 'transform: translateY(-5px); opacity: 0; transition: .5s cubic-bezier(0.77, 0, 0.175, 1)'
    );
}

module.exports = {
    animations: animations,
    pageTransitions: pageTransitions
};