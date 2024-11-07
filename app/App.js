// import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { WordMumblesController } from "./controllers/WordMumblesController.js";
const USE_ROUTER = false

class App {

  HomeController = new HomeController()
  WordMumblesController = new WordMumblesController()

  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

const app = new App()
// @ts-ignore
window.app = app
