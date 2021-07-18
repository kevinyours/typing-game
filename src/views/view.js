import CONSTANTS from "../constants";

export default class View {
 constructor(element) {
  if (!element) throw new Error("HTML element is empty");

  this.element = element;
  this.eventHandlers = {};
  return this;
 }

 on(event, handler) {
  this._addEvent(event, handler);
  this.element.addEventListener(event, handler);
  return this;
 }

 _addEvent(event, handler) {
  this.destroy(event);
  this.eventHandlers[event] = handler;
 }

 _getEvent(event) {
  return this.eventHandlers[event];
 }

 _removeEvent(event) {
  delete this.eventHandlers[event];
 }

 destroy(event) {
  this.element.removeEventListener(event, this._getEvent(event));
  this._removeEvent(event);
  return this;
 }

 destroyAll() {
  Object.keys(this.eventHandlers).forEach(event => this.destroy(event));
  return this;
 }

 emit(event, data) {
  this.element.dispatchEvent(new CustomEvent(event, { detail: data }));
  return this;
 }

 show() {
  this.element.style.visibility = CONSTANTS.VISIBLE;
 }

 hide() {
  this.element.style.visibility = CONSTANTS.HIDDEN;
 }
}
