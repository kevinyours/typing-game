import { DUMMY } from "../mock";
import observable from "./observable";

export const INITIAL_STATE = {
 data: [],
 cursor: Number.MAX_SAFE_INTEGER,
 quiz: {
  word: "",
  remain: 10,
 },
 score: {
  credit: 0,
  time: 0,
  cnt: 0,
 },
};

let instance = null;

export default class Model {
 constructor(initialState = INITIAL_STATE) {
  if (instance) return instance;

  this.state = observable(initialState);
  instance = this;
  return instance;
 }

 get useObserver() {
  return this.state.addListener;
 }

 init() {
  this.state.cursor = Number.MAX_SAFE_INTEGER;
  this.state.score = {
   credit: 0,
   time: 0,
   cnt: 0,
  };

  return this;
 }

 load() {
  this.state.data = DUMMY;
  this.state.score = {
   credit: 0,
   time: 0,
   cnt: 0,
  };
  this.switch();

  return this;
 }

 switch() {
  if (this.state.cursor === 0) return false;

  const nextQuiz = this.state.data.pop();
  this.state.cursor = this.state.data.length;
  this.state.quiz = {
   word: nextQuiz.text,
   remain: nextQuiz.second,
  };

  return true;
 }

 update(t) {
  const { credit, time, cnt } = this.state.score;
  this.state.score = {
   credit: credit + 1,
   time: time + (this.state.quiz.remain - t),
   cnt: cnt + 1,
  };
 }
}
