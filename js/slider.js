(function() {
    const sliders = [...document.querySelectorAll('.developers_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentDevelopers = document.querySelector('.developers_body--show').dataset.id;
        value = Number(currentDevelopers);
        value += add;

        sliders[Number(currentDevelopers) - 1].classList.remove('developers_body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('developers_body--show');
    }
})();