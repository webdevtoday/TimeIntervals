let Process = {
  create: function (process) {
    return {
      name: process.name,
      description: process.description,
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
