import React, { Component } from 'react';
import {
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
} from 'react-weui';
const smallIcon = <img alt={''} src='http://img.hb.aicdn.com/999e304358a8cc1ac0cc65d6841ee8e2cf9e2eba17feb-jCrLwp_fw658' style={{width:'32px',height:'32px',marginRight:'5px'}}/>;

class Employee extends Component {
  // constructor () {
  //   super();
  //   this.state={
  //     name:'',
  //     phone:'',
  //     faceImgSrc:'',
  //   }
  // }

  render() {
    const employee = this.props;
    return (
        <Cell href={employee.phone} access>
          <CellHeader>{smallIcon}</CellHeader>
          <CellBody>
            <p>{employee.name}</p>
          </CellBody>
          <CellFooter/>
        </Cell>
    );
  }
}

export default Employee;
