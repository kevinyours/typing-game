import Controller from "./controller";

export default class NotFoundController extends Controller {
 constructor() {
  super();

  this.bindEvent();
  this.render();
 }

 bindEvent() {
  this.$notice.writeText({ type: "summary", text: "Page Not Found." });
  this.$notice.emptyText({ type: "title" });
  this.$notice.emptyText({ type: "info" });
  this.$primaryBtn.setText("Home");
  this.$primaryBtn.setNavigate("/");
 }

 render() {
  this.$timer.unmount();
  this.$score.unmount();
  this.$input.unmount();
  this.$primaryBtn.mount();
 }
}
