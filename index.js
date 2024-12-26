
document.querySelector('a[href="#about"]').addEventListener('click', function() {

    setTimeout(() => {

        const img = document.querySelector('#about img');
        img.classList.add('slide-away');
        img.addEventListener('transitionend', function() {
            setTimeout(() => {
                img.classList.remove('slide-away');
            }, 1000); 
        }, { once: true });
    }, 100); 
});