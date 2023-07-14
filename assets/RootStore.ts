import { Model, model, modelAction, tProp, types } from "mobx-keystone";

@model("app/RootStore")
export class RootStore extends Model({
  text: tProp(types.string),
  done: tProp(types.boolean, false),
}) {
  @modelAction
  setDone(done: boolean) {
    this.done = done;
  }
}
