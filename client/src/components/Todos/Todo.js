import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  // データ保存
  handleAdd(e) {
    console.log(e.target.title.value);
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.push({ title: e.target.title.value }); // 未保存
    // setStateを使ってstateを上書き
    this.setState({ todo: this.state.todo }); // 保存完了
    // inputのvalueを空に
    e.target.title.value = "";
  }

  // データ削除
  handleRemove(i) {
    // todo配列からi番目から1つ目のデータを除外
    this.state.todo.splice(i, 1);
    // setStateでtodo配列を上書き
    this.setState({ todo: this.state.todo });
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">
          React Todo App
        </h1>
        <TodoForm handleAdd={this.handleAdd} />
        <div className="siimple-rule"></div>
        <TodoList todos={this.state.todo} />
      </div>
    );
  }
}
