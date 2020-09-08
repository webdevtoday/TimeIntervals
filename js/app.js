document.addEventListener("DOMContentLoaded", function () {

});

let Processes = {
    get: {
        list: function() { return "Processes.get.list();"; },
        process: function(process_name) {
            // process name || process id
            return `Processes.get.process(${process_name})`;
        },
    },
    set: {
        process: function() {
            return "Processes.set.process()";
        },
    }
};