import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter
} from 'react-weui';
import IconEx from './../icon/reportA.png';


class WorkList extends Component {
  render() {
    return (
        <div className="cell workList">
            <Cells>
                <Cell href="#" access>
                    <CellHeader>
                        <img src={IconEx} alt="" style={{display: `block`, width: `32px`, marginRight: `5px`}}/>
                    </CellHeader>
                    <CellBody>
                        工程管理
                    </CellBody>
                </Cell>
                <Cell href="#" access>
                    <CellHeader>
                        <img src={IconEx} alt="" style={{display: `block`, width: `32px`, marginRight: `5px`}}/>
                    </CellHeader>
                    <CellBody>
                      <Link to='/workdiary'>项目HSE记录</Link>
                    </CellBody>
                    <CellFooter>
                        项目周报日报
                    </CellFooter>
                </Cell>
            </Cells>
            <CellsTitle>其他</CellsTitle>
            <Cells>
                <Cell href="#" access>
                    <CellHeader>
                        <img src={IconEx} alt="" style={{display: `block`, width: `32px`, marginRight: `5px`}}/>
                    </CellHeader>
                    <CellBody>
                        打卡
                    </CellBody>
                    <CellFooter>
                    </CellFooter>
                </Cell>
                <Cell href="#" access>
                    <CellHeader>
                        <img src={IconEx} alt="" style={{display: `block`, width: `32px`, marginRight: `5px`}}/>
                    </CellHeader>
                    <CellBody>
                        审批
                    </CellBody>
                    <CellFooter>
                        行政审批
                    </CellFooter>
                </Cell>
                <Cell href="#" access>
                    <CellHeader>
                        <img src={IconEx} alt="" style={{display: `block`, width: `32px`, marginRight: `5px`}}/>
                    </CellHeader>
                    <CellBody>
                        汇报
                    </CellBody>
                    <CellFooter>
                    </CellFooter>
                </Cell>
                <Cell href="#" access>
                    <CellHeader>
                        <img src={IconEx} alt="" style={{display: `block`, width: `32px`, marginRight: `5px`}}/>
                    </CellHeader>
                    <CellBody>
                        公告
                    </CellBody>
                    <CellFooter>
                    </CellFooter>
                </Cell>
            </Cells>
        </div>
    );
  }
}

export default WorkList;
