const handleClickAccordion = () => {
    const title = document.querySelectorAll('.block__title');
    for (let item of title) {
        item.addEventListener('click', e => {
            item.classList.toggle('is-active');
            item.nextElementSibling.classList.toggle('is-active');
        });
    }
}

handleClickAccordion();