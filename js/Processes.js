const Processes = {
    list: [
        {
            id: 1,
            name: 'Тестовый сайт',
            description: 'Хочу отслеживать сколько чистого времени занимает разработка сайта.',
            timeIntervals: [
                {
                    id: 1,
                    name: 'Работа с HTML',
                    description: 'Добавил начальную разметку и начал работу над шапкой',
                    from: 0,
                    to: 1,
                },
                {
                    id: 2,
                    name: 'Шапка',
                    description: 'Залип в шапке, разметил элементы шапки и наполнил их классами.',
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
        {
            id: 2,
            name: 'ПН ДМ',
            description: 'Раны.',
            timeIntervals: [
                {
                    id: 1,
                    name: 'Ран1',
                    description: '',
                    from: 0,
                    to: 1,
                },
                {
                    id: 2,
                    name: 'Ран2',
                    description: '',
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
        list: function () {
            return Processes.list;
        },
        process: function (process_id) {
            return `Processes.get.process(${process_id})`;
        },
    },
    set: {
        process: function (process) {
            Processes.list.push(process);
            return process;
        },
    },
};
