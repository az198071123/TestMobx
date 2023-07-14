import { computed } from "mobx";
import { Model, model, modelAction, prop } from "mobx-keystone";

// the model decorator marks this class as a model, an object with actions, etc.
// the string identifies this model type and must be unique across your whole application

@model("myCoolApp/Todo")
export class Todo extends Model({
  // here we define the type of the model data, which is observable and snapshotable
  // and also part of the required initialization data of the model
  // in this case we don't use runtime type checking
  text: prop<string>(),
  done: prop(false), // an optional boolean that will default to `false` when the input is `null` or `undefined`
  // if you want to make a property truly optional then use `x: prop<TYPE | undefined>()`
  // if we required runtime type checking we could do this
  // text: tProp(types.string),
  // done: tProp(types.boolean, false),
  // if you want to make a property truly optional then use `x: tProp(types.maybe(TYPE))`
}) {
  // the `modelAction` decorator marks the method as a model action, giving it access
  // to modify any model data and other superpowers such as action
  // middlewares, replication, etc.
  @modelAction
  setDone(done: boolean) {
    this.done = done;
  }

  @modelAction
  setText(text: string) {
    this.text = text;
  }

  @computed
  get asString() {
    return `${!this.done ? "TODO" : "DONE"} ${this.text}`;
  }
}
