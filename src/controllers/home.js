import CONSTANTS from "../constants";
import Controller from "./controller";
import Model from "../models/model";

export default class HomeController extends Controller {
 constructor(model = new Model()) {
  super();

  this.status = CONSTANTS.READY;
  this.actions = model;

  this.bindEvent();
  this.render();
 }

 bindEvent() {
  this.initElements();
  this.$primaryBtn.setText("Ready");
  this.$primaryBtn.disabled(false);
  this.$primaryBtn.removeNavigate();
  this.$primaryBtn.on(CONSTANTS.NAV, e => this.handleEvent());
 }

 initElements() {
  this.$timer.setPrefix(" ");
  this.$timer.setSuffix("Sec");
  this.$score.reset(0);
  this.$score.setPrefix("Score: ");
  this.$score.setSuffix("");
  this.$notice.writeText({ type: "summary", text: "Typing Game" });
  this.$notice.emptyText({ type: "title" });
  this.$notice.emptyText({ type: "info" });
 }

 readyForInitEvent() {
  this.status = CONSTANTS.INIT;
  this.$notice.writeText({ type: "summary", text: "Initialize" });
  this.$primaryBtn.setText("Initialize");
 }

 prepareNextEvent() {
  this.actions.load();
  this.status = CONSTANTS.START;
  this.$notice.writeText({ type: "summary", text: "Start" });
  this.$primaryBtn.setText("Start");
 }

 goToGameEvent() {
  this.$primaryBtn.destroy(CONSTANTS.NAV);
  this.$primaryBtn.setNavigate("/quiz");
 }

 handleEvent() {
  this.$primaryBtn.disabled(true);
  setTimeout(() => this.$primaryBtn.disabled(false), 500);

  switch (this.status) {
   case CONSTANTS.READY:
    this.readyForInitEvent();
    break;

   case CONSTANTS.INIT:
    this.prepareNextEvent();
    break;

   case CONSTANTS.START:
   default:
    this.goToGameEvent();
    break;
  }
 }

 render() {
  this.$timer.mount();
  this.$score.mount();
  this.$input.unmount();
  this.$notice.mount();
  this.$primaryBtn.mount();
 }
}
