document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category-title');

    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = category.parentElement;

            // Toggle active class to show/hide the sub-dropdown
            parent.classList.toggle('active');
        });
    });
});
