import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";
import Item from "./item";
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      show: true,
      list: ["拔罐", "针灸"],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="addInput">增加服务</label>
          <input
            id="addInput"
            className="input"
            value={this.state.inputValue}
            onChange={this.onInputChange.bind(this)}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                // <li
                //   key={index + item}
                //   onClick={this.deleteItem.bind(this, index)}
                //   dangerouslySetInnerHTML={{ __html: item }}
                // >
                // </li>
                <CSSTransition
                  key={index + item}
                  // in={this.state.show}
                  timeout={1000}
                  unmountOnExit
                  appear={true}
                  classNames="boss-text"
                >
                  <Item
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                  ></Item>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ul>
      </Fragment>
    );
  }
  onInputChange(e) {
    // console.log(this, e.target.value);
    this.setState({
      // inputValue: e.target.value,
      inputValue: this.input.value,
    });
    // this.state.inputValue = e.target.value;
  }
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
  }
  deleteItem(index) {
    // console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}
