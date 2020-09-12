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
  create_process: function () {},
  history_back: function () {
    if (appState.previousRoutes.length <= 1) return false;
    appState.previousRoutes.pop();
    this.controller(appState.previousRoutes.pop());
  },
};
