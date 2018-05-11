import React from 'react';
import { connect } from 'dva';
import 'weui';
import Wrap from './Wrap';
import 'react-weui/build/packages/react-weui-com.css'
import './basic.less';

function IndexPage() {
  return (
    <Wrap/>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
