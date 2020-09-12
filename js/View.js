let View = {
  views: {
    app_header: `
      <header class="header">
        <button class="button button_history_back" data-route="history_back">< Back</button>
        <h1>Time Intervals</h1>
      </header>
    `,
    app_main: `
      <main class="main"></main>
    `,
    index: `
        <button class="button button_big_primary app__button" data-route="stored_processes">
          Stored Processes
        </button>
        <button class="button button_big_success app__button" data-route="new_process">
          New Process
        </button>
      `,
    stored_processes: `
      <h2>Stored Processes</h2>

      <ol>
        <li>Process 1</li>
        <li>Process 2</li>
        <li>Process 3</li>
      </ol>
    `,
    new_process: `
      <h2>New process</h2>
    `,
  },

  render: function (selector, view_name) {
    let startElem = document.querySelector(selector);

    startElem.insertAdjacentHTML('beforeend', this.views[view_name]);
  },
  renderAll: function (selector, view_name) {
    let startElem = document.querySelector(selector);

    startElem.innerHTML = this.views[view_name];
  },
};
