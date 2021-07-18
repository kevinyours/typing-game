import Controller from "./controller";
import CONSTANTS from "../constants";
import Model from "../models/model";

export default class QuizController extends Controller {
 constructor(model = new Model()) {
  super();

  this.state = model.state;
  this.actions = model;
  this.actions.init();
  this.bindEvent();
  this.render();
  this.unSubscribe = this.actions.useObserver(state => this.reRender(state));
 }

 bindEvent() {
  this.initElements();
  this.prepareNextEvent();
  this.$input.on(CONSTANTS.SUBMIT, e => this.submit(e)).focus();
  this.$primaryBtn.on(CONSTANTS.CLICK, () => this.goToNextEvent());
 }

 initElements() {
  this.$timer.setPrefix("");
  this.$timer.setSuffix("Sec");
  this.$score.setPrefix("Score: ");
  this.$score.setSuffix("");
  this.$notice.emptyText({ type: "title" });
  this.$notice.emptyText({ type: "info" });
  this.$input.disabled(false);
 }

 prepareNextEvent() {
  this.$primaryBtn.disabled(false);
  this.$primaryBtn.setText("Finish");
  this.$primaryBtn.setNavigate("/result");
 }

 goToNextEvent() {
  this.unSubscribe();
  this.$input.destroy(CONSTANTS.SUBMIT);
  this.$primaryBtn.destroy(CONSTANTS.CLICK);
 }

 blockTyping(interval = 500) {
  this.$input.disabled(true);
  setTimeout(() => {
   this.$input.disabled(false).focus();
  }, interval);
 }

 moveOnNextQuiz() {
  if (!this.actions.switch()) {
   this.$notice.unmount();
   this.$input.disabled(true);
   this.$input.unmount();
   this.$primaryBtn.mount();
  }
 }

 submit(e) {
  if (e.detail.value === this.state.quiz.word) {
   this.blockTyping(400);

   if (this.$timer.time > 0) {
    this.actions.update(this.$timer.time);
   }

   this.moveOnNextQuiz();
  }

  this.$input.clear();
 }

 render() {
  this.$timer.mount();
  this.$score.mount();
  this.$notice.mount();
  this.$input.mount();
  this.$primaryBtn.unmount();
 }

 reRender(state) {
  this.$timer.reset(state.quiz.remain);
  this.$timer.tick();
  this.$score.reset(state.score.credit);
  this.$notice.writeText({ type: "summary", text: state.quiz.word });
 }
}
