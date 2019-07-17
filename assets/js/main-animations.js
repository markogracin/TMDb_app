export function animations() {
    let head = document.querySelector('.section-head');
    let body = document.querySelector('.section-body');


    // Animate header if exists
    if(head){
        setTimeout(function () {
            document.querySelector('.section-head')
                .classList.add('show');
        }, 500);

        window.addEventListener("scroll", function(){
            let scrollTOp = window.pageYOffset;
            head.style.transform = 'translateY('+ scrollTOp * 0.5 + 'px' + ')';
            head.style.opacity = 1 - scrollTOp / 300;
        })
    }

    if(body){

    }
}
