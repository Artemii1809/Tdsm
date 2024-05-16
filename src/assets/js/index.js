document.addEventListener('DOMContentLoaded', (Event) => {
    const draggables = document.querySelectorAll('.task')
    const colums = document.querySelectorAll('.kanban__column')

    draggables.forEach(function (item) {
        item.addEventListener('dragstart', function () {
            item.classList.add('dragging');
        })
        item.addEventListener('dragend', function () {
            item.classList.remove('dragging');
        });
        item.getAttribute('draggable');
        item.setAttribute ('draggable', 'true');
        




    })

    colums.forEach(function (item) {
        item.addEventListener('dragover', function (/*всегда есть*/event) {
            event.preventDefault();
            const draggable = document.querySelector('.dragging');
            item.querySelector('.kanban_list').appendChild(draggable);

        })

    })


})


