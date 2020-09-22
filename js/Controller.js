const Controller = {
    controller: function (controller_name) {
        if (controller_name !== 'history_back') {
            appState.previousRoutes.push(controller_name);
        }
        this[controller_name]();
    },
    index: function () {
        let params = {
            emptyProcesses: Processes.get.list() > 0 ? false : true,
        };
        View.renderAll('main', 'index', params);
    },

    stored_processes: function () {
        let params = {
            list: Processes.get.list(),
        };

        if (params.list.length <= 0) return false;

        View.renderAll('main', 'stored_processes', params);
    },

    new_process: function () {
        View.renderAll('main', 'new_process');
    },

    create_process: function () {
        let name = document.querySelector('.new-process__input input').value;
        let desc = document.querySelector('.new-process__input textarea').value;
        if (!name || !desc) {
            return false;
        }
        let process = {
            name: name,
            description: desc,
        };
        let processCreated = Process.create(process);
        Processes.set.process(processCreated);
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(processCreated.time_created).getDate();
        let month = months[new Date(processCreated.time_created).getMonth()];
        let year = new Date(processCreated.time_created).getFullYear();
        let hours = new Date(processCreated.time_created).getHours();
        let minutes = new Date(processCreated.time_created).getMinutes();
        let params = {
            name: processCreated.name,
            description: processCreated.description,
            date: `${date} ${month} ${year} ${hours}:${minutes}`,
        };
        View.renderAll('main', 'executing_process', params);
    },

    history_back: function () {
        if (appState.previousRoutes.length <= 1) return false;
        appState.previousRoutes.pop();
        this.controller(appState.previousRoutes.pop());
    },
};
