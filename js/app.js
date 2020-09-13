const appState = {
    previousRoutes: [],
    previousParameters: [],
    route: 'index',
    parameters: [],
};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.app').addEventListener('click', event => {
        if (event.target.dataset.route != undefined) {
            Controller.controller(event.target.getAttribute('data-route'));
        }
    });
    View.render('.app', 'app_header');
    View.render('.app', 'app_main');
    Controller.controller(appState.route);
});

// Пример обьекта процесса с временными отрезками
// {
//     name: "Раны в ДМ",
//     description: "Раны в ДМ за понедельник",
//     timeIntervals: [
//         {
//             id: 1,
//             name: "Первый ран",
//             description: "Описание этого рана. Что-то произошло и тд.",
//             from: 0,
//             to: 1,
//         },
//         {
//             id: 2,
//             name: "Второй ран",
//             description: "Описание этого рана. Что-то произошло и тд.",
//             from: 0,
//             to: 1,
//         },
//     ],
//     time_created: 0,
//     time_modified: 0,
//     total: {
//         work_time: 0,
//         all_time: 0,
//     },
// }
