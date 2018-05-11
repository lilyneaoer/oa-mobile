import React, { Component } from 'react';
import { Grids } from 'react-weui';
import IconSrc from './../../icon/reportA.png';
import './../../icon/iconfont';

const data = Array(9).fill({
  icon: <img alt={''} src={IconSrc}/>,
  label: '报表名称',
  href: '',
});
class Cate extends Component {
  render () {
    return (
      <Grids data={data}/>
    );
  }
}

export default Cate;
