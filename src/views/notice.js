import View from "./view";
import "./notice.scss";

export default class Notice extends View {
 constructor($p) {
  super($p);
 }

 _getElement(elementName) {
  switch (elementName) {
   case "title":
    return this.element.querySelector(".title");

   case "info":
    return this.element.querySelector(".info");

   case "summary":
   default:
    return this.element.querySelector(".summary");
  }
 }

 writeText({ type, text }) {
  const element = this._getElement(type);
  element.innerText = text;
 }

 emptyText({ type }) {
  const element = this._getElement(type);
  element.innerText = null;
 }

 mount() {
  this.show();
 }

 unmount() {
  this.hide();
 }
}
