const Process = {
  create: function (process) {
    return {
      id: 0,
      name: process.name,
      description: process.description,
      timeIntervals: [],
      time_created: new Date().getTime(),
      time_modified: 0,
      total: {
        work_time: 0,
        all_time: 0,
      },
    };
  },
};

// New task
// This is new description for new task. Long-long description. I wrote it because I need the long description for my task.
