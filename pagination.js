document.addEventListener('DOMContentLoaded', function () {
    const exercisesPerPage = 5;
    const exercisesList = document.getElementById('exercises-list');
    const exercises = Array.from(exercisesList.children);
    const totalPages = Math.ceil(exercises.length / exercisesPerPage);
    const pagination = document.getElementById('pagination');

    function showPage(page) {
        exercises.forEach((exercise, index) => {
            exercise.style.display = (index >= (page - 1) * exercisesPerPage && index < page * exercisesPerPage) ? 'block' : 'none';
        });
    }

    function createPagination() {
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.className = 'page-item';
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', (e) => {
                e.preventDefault();
                showPage(i);
                document.querySelector('.page-item.active')?.classList.remove('active');
                li.classList.add('active');
            });
            pagination.appendChild(li);
        }
        pagination.firstChild.classList.add('active');
    }

    showPage(1);
    createPagination();
});