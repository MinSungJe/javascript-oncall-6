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
    this.#setInitialWorkers();
    this.#checkDuplicateWorker();
  }

  #setInitialWorkers() {
    this.working.days.forEach((day) => {
      if (day.isDayOff) day.setWorker(this.weekendWork.getNextWorker());
      else day.setWorker(this.weekdayWork.getNextWorker());
    });
  }

  #checkDuplicateWorker() {
    let previousWorker = '';

    for (let dayIndex = 0; dayIndex < this.working.days.length; dayIndex++) {
      const currentWorker = this.working.days[dayIndex].worker;
      if (previousWorker !== currentWorker) {
        previousWorker = currentWorker;
        continue;
      }

      this.#changeWorker(dayIndex);
      previousWorker = this.working.days[dayIndex].worker;
    }
  }

  #changeWorker(dayIndex) {
    const worker = this.working.days[dayIndex].worker;
    const isDayoff = this.working.days[dayIndex].isDayOff;
    const { closeIndex, closeWorker } = this.#getCloseWorker(dayIndex, isDayoff);
    this.working.days[dayIndex].worker = closeWorker;
    if (closeIndex !== -1) this.working.days[closeIndex].worker = worker;
  }

  #getCloseWorker(dayIndex, isDayOff) {
    let closeIndex = -1;
    let closeWorker = '';

    for (let index = dayIndex + 1; index < this.working.days.length; index++) {
      if (this.working.days[index].isDayOff !== isDayOff) continue;
      closeIndex = index;
      closeWorker = this.working.days[closeIndex].worker;
      return { closeIndex, closeWorker };
    }

    return {
      closeIndex: -1,
      closeWorker: this.#getNextWorker(isDayOff),
    };
  }

  #getNextWorker(isDayOff) {
    if (isDayOff) return this.weekendWork.getNextWorkerByName(this.working.days[dayIndex].worker);
    return this.weekdayWork.getNextWorkerByName(this.working.days[dayIndex].worker);
  }
}

export default WorkingService;
