document.addEventListener("DOMContentLoaded", function () {

});

let Processes = {
    list: [
        {
            id: 1,
            name: "Тестовый сайт",
            description: "Хочу отслеживать сколько чистого времени занимает разработка сайта.",
            timeIntervals: [
                {
                    id: 1,
                    name: "Работа с HTML",
                    description: "Добавил начальную разметку и начал работу над шапкой",
                    from: 0,
                    to: 1,
                },
                {
                    id: 2,
                    name: "Шапка",
                    description: "Залип в шапке, разметил элементы шапки и наполнил их классами.",
                    from: 0,
                    to: 1,
                },
            ],
            time_created: 0,
            time_modified: 0,
            total: {
                work_time: 0,
                all_time: 0,
            },
        },
    ],
    get: {
        list: function() { return "Processes.get.list();"; },
        process: function(process_id) {
            return `Processes.get.process(${process_id})`;
        },
    },
    set: {
        process: function() {
            return "Processes.set.process()";
        },
    }
};

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

let Process = {
    create: function() {
        return {
            name: "Раны в ДМ",
            description: "Раны в ДМ за понедельник",
            timeIntervals: [],
            time_created: 0,
            time_modified: 0,
            total: {
                work_time: 0,
                all_time: 0,
            },
        };
    },
};