import React, { Component } from "react";
import PropTypes from "prop-types";
// import axios from "axios";
let index1 = 0,
  index2 = 0;
class Item extends Component {
  constructor(props) {
    super(props);
    this.handlClick = this.handlClick.bind(this);
  }
  //   componentWillMount() {
  //     //   axios.post(); //有问题 reactNactive 中有问题

  //     console.log("componentWillMount --- 将会渲染1");
  //   }
  componentDidMount() {
    console.log("3componentDidMount --- 将会渲染2");
    // axios
    //   .post("https://web-api.juejin.im/v3/web/wbbr/bgeda")
    //   .then((res) => {
    //     console.log(`请求成功，数据${JSON.stringify(res)}`);
    //   })
    //   .catch((err) => {
    //     console.log(`请求失败，${err}`);
    //   }); //在这儿写
  }
  componentWillUnmount() {
    console.log("4componentWillUnmount --- 卸载dom");
  }
  shouldComponentUpdate(nextProps, next) {
    console.log("shouldComponentUpdate--", index1++);
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("2componentDidUpdate");
  }
  componentDidCatch() {
    console.log("componentDidCatch");
  }
  render() {
    console.log("1render--", index2++);
    return (
      <li onClick={this.handlClick}>
        {this.props.avname}--{this.props.content}
      </li>
    );
  }
  handlClick(e) {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}
Item.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
};
Item.defaultProps = {
  avname: "松岛枫",
};
export default Item;
