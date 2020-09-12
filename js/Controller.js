let Controller = {
  controller: function (controller_name) {
    if (controller_name !== 'history_back') {
      appState.previousRoutes.push(controller_name);
    }
    this[controller_name]();
  },
  index: function () {
    View.renderAll('main', 'index');
  },
  stored_processes: function () {
    View.renderAll('main', 'stored_processes');
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
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let params = {
      name: processCreated.name,
      description: processCreated.description,
      date: `${new Date(processCreated.time_created).getDate()} ${
        months[new Date(processCreated.time_created).getMonth()]
      } ${new Date(processCreated.time_created).getFullYear()} ${new Date(
        processCreated.time_created,
      ).getHours()}:${new Date(processCreated.time_created).getMinutes()}`,
    };
    View.renderAll('main', 'executing_process', params);
    console.log(processCreated);
  },
  history_back: function () {
    if (appState.previousRoutes.length <= 1) return false;
    appState.previousRoutes.pop();
    this.controller(appState.previousRoutes.pop());
  },
};
