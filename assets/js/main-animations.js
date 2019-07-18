// On load animations
function animations() {
    let head = document.querySelector('.section-head');
    let body = document.querySelector('.section-body');
    let home = document.querySelector('.home');
    let roulette = document.querySelector('.getRoulette');
    let loadMore = document.querySelector('.loadMore');

    if (head) {
        setTimeout(function () {
            head.classList.add('show');
        }, 500);

        window.addEventListener("scroll", function () {
            let scrollTop = window.pageYOffset;
            head.style.transform = 'translateY(' + scrollTop * 0.5 + 'px' + ')';
            head.style.opacity = 1 - scrollTop / 300;
        })
    }

    if (body) {
        setTimeout(function () {
            body.classList.add('show');
        }, 500);
    }

    if (home) {
        window.addEventListener("scroll", function () {
            let scrollTop = window.pageYOffset;
            if (scrollTop > 500) {
                roulette.classList.add('show');
                loadMore.classList.add('show');
            } else {
                roulette.classList.remove('show');
                loadMore.classList.remove('show');
            }
        })
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