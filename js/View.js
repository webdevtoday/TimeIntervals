const View = {
    views: {
        app_header: `
            <header class="header">
                <button class="button button_history_back" data-route="history_back">< Back</button>
                <h1 class="header__title" data-route="index">Time Intervals</h1>
            </header>
        `,
        app_main: `
            <main class="main"></main>
        `,
        index: `
            <button class="button button_big_primary app__button" data-route="stored_processes" {{emptyProcesses ? disabled : }}>
                Stored Processes
            </button>
            <button class="button button_big_success app__button" data-route="new_process">
                New Process
            </button>
        `,
        stored_processes: `
            <div class="stored-processes">
                <h2 class="stored-processes__title">Stored Processes</h2>
                
                <ol class="stored-processes__list">
                    <for-li>{{list}}</for-li>
                </ol>
            </div>
        `,
        new_process: `
            <div class="new-process">
                <h2 class="new-process__title">New process</h2>

                <div class="new-process__form">
                <div class="new-process__input">
                    <input type="text" placeholder="Title">
                </div>
                <div class="new-process__input">
                    <textarea placeholder="Description"></textarea>
                </div>
                <div class="new-process__button">
                    <button class="button button_big_success" data-route="create_process">Create process</button>
                </div>
                </div>
            </div>
        `,
        executing_process: `
            <div class="executing-process">
                <h2 class="executing-process__title">{{name}}</h2>
                <p class="executing-process__description">{{description}}</p>
                <p>Created: {{date}}</p>
            </div>
        `,
    },

    paramsRender: function (html, params) {
        if (!params) return html;

        html = html.replace(/<for-li>{{.+?}}<\/for-li>/gim, match => {
            let str = match.replace(/{{(.+?)}}/gim, (match, param) => {
                let str = ``;
                for (elem of params[param]) {
                    str += `<li>${elem.name}</li>`;
                }
                console.log(str);
                return str;
            });
            return str;
        });

        html = html.replace(/{{(.+?)\s*\?\s*(.+?)\s*:\s*(.+?)}}/gim, (match, flag, class1, class2) => {
            return params[flag] ? class1 : class2;
        });

        // Не работает в IE
        // return html.replace(/{{(?<param>.+?)}}/gim, (match, param) => {
        //     return params[param];
        // });
        return html.replace(/{{(.+?)}}/gim, (match, param) => {
            // if (typeof params[param] == 'object') console.log('object');

            return params[param];
        });
    },

    render: function (selector, view_name, params) {
        let startElem = document.querySelector(selector);

        startElem.insertAdjacentHTML('beforeend', this.views[view_name]);
    },

    renderAll: function (selector, view_name, params) {
        let startElem = document.querySelector(selector);

        startElem.innerHTML = this.paramsRender(this.views[view_name], params);
    },
};
