import WorkingController from './Controller/WorkingController.js';

class App {
  async run() {
    const workingController = new WorkingController();
    await workingController.run();
  }
}

export default App;
