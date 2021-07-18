import Model from "../models/model";
import Controller from "./controller";

export default class ResultController extends Controller {
 constructor(model = new Model()) {
  super();

  this.state = model.state;
  this.score = this.state.score.credit;
  this.avg = this.getAverage(this.state.score.time, this.state.score.cnt);

  this.bindEvent();
  this.render();
 }

 bindEvent() {
  this.$notice.writeText({ type: "title", text: "Mission Complete!" });
  this.$notice.writeText({
   type: "summary",
   text: `Final score is ${this.state.score.credit}.`,
  });
  this.$notice.writeText({
   type: "info",
   text: `Average typing time is ${this.avg || 0} second.`,
  });
  this.$primaryBtn.setText("Retry");
  this.$primaryBtn.setNavigate("/");
 }

 getAverage(time, cnt) {
  return Math.ceil(Number(time) / Number(cnt));
 }

 render() {
  this.$timer.unmount();
  this.$score.unmount();
  this.$input.unmount();
  this.$notice.mount();
  this.$primaryBtn.mount();
 }
}
