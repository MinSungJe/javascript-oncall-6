class WorkingService {
  working;
  weekdayWork;
  weekendWork;

  constructor(working, weekdayWork, weekendWork) {
    this.working = working;
    this.weekdayWork = weekdayWork;
    this.weekendWork = weekendWork;
  }

  setWorkers() {
    this.working.days.forEach((day) => {
      if (day.isDayOff) day.setWorker(this.weekendWork.getNextWorker());
      else day.setWorker(this.weekdayWork.getNextWorker());
    });
  }
}

export default WorkingService;
