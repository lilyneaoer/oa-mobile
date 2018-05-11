import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
} from 'react-weui';
import IconEx from './../icon/worksA.png';


class MyWork extends Component {
    render() {
        return (
            <div className="cell workList">
                <Cells>
                    <Cell href="#" access>
                        <CellHeader>
                            <img src={IconEx} alt="" style={{display: `block`, width: `24px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            收藏
                        </CellBody>
                        <CellFooter>
                            &nbsp;
                        </CellFooter>
                    </Cell>
                    <Cell href="#" access>
                        <CellHeader>
                            <img src={IconEx} alt="" style={{display: `block`, width: `24px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            待办
                        </CellBody>
                        <CellFooter>
                            &nbsp;
                        </CellFooter>
                    </Cell>
                    <Cell href="#" access>
                        <CellHeader>
                            <img src={IconEx} alt="" style={{display: `block`, width: `24px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            红包
                        </CellBody>
                        <CellFooter>
                            &nbsp;
                        </CellFooter>
                    </Cell>
                </Cells>
                <Cells>
                    <Cell href="#" access>
                        <CellHeader>
                            <img src={IconEx} alt="" style={{display: `block`, width: `24px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            奖励
                        </CellBody>
                        <CellFooter>
                            &nbsp;
                        </CellFooter>
                    </Cell>
                </Cells>
                <Cells>
                    <Cell href="#" access>
                        <CellHeader>
                            <img src={IconEx} alt="" style={{display: `block`, width: `24px`, marginRight: `5px`}}/>
                        </CellHeader>
                        <CellBody>
                            设置
                        </CellBody>
                        <CellFooter>
                            &nbsp;
                        </CellFooter>
                    </Cell>
                </Cells>
            </div>
        );
    }
}

export default MyWork;
