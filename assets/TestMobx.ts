import { RootStore } from "./RootStore";
import { Todo } from "./Todo";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  protected onLoad(): void {
    const myTodo = new Todo({ text: "buy some coffee" });

    // this is now allowed and properly wrapped in two respective actions
    myTodo.setText("buy some milk");
    myTodo.setDone(true);

    const root = new RootStore({ text: "aa", done: false });
    root.setDone(1 as any); // Uncaught Error: TypeCheckError: [/done] Expected a value of type <boolean> but got the value <1> instead
  }
}
