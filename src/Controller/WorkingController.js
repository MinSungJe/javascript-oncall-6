import WeekdayWork from '../Model/WeekdayWork.js';
import WeekendWork from '../Model/WeekendWork.js';
import Working from '../Model/Working.js';
import WorkingService from '../Service/WorkingService.js';
import loopWhileValid from '../Util/loopWhileValid.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';

class WorkingController {
  async run() {
    const working = await loopWhileValid(this.getWorking);
    const { weekdayWork, weekendWork } = await loopWhileValid(this.getWorks);

    const workingService = new WorkingService(working, weekdayWork, weekendWork);
    workingService.setWorkers();

    OutputView.printWorking(working);
  }

  async getWorking() {
    const assignInput = await InputView.getAssign();
    const working = new Working(assignInput);
    return working;
  }

  async getWorks() {
    const weekdayWorkInput = await InputView.getWeekdayWorkers();
    const weekdayWork = new WeekdayWork(weekdayWorkInput);
    const weekendWorkInput = await InputView.getWeekendWorkers();
    const weekendWork = new WeekendWork(weekendWorkInput, weekdayWork.workerList);

    return { weekdayWork, weekendWork };
  }
}

export default WorkingController;
