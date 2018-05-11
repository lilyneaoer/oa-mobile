import React, { Component } from 'react';
// import { RouterRedux } from 'dva/router';
import { connect } from 'dva';
import {
    Panel,
    PanelBody,
    MediaBox,
    PanelHeader,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';
import Employee from './Employee';
const smallIcon = <img alt={''} src='http://img.hb.aicdn.com/999e304358a8cc1ac0cc65d6841ee8e2cf9e2eba17feb-jCrLwp_fw658' style={{width:'32px',height:'32px',marginRight:'5px'}}/>;

class PhoneBook extends Component {
    render() {
        return (
            <div>
              <Panel>
                <PanelHeader className='phoneTitle'>
                  A
                </PanelHeader>
                <PanelBody>
                  <MediaBox type="small_appmsg">
                    <Cells>
                     <Employee name='张三' phone='13988516252'/>
                     <Employee name='Andy' phone='13988516252'/>
                    </Cells>
                  </MediaBox>
                </PanelBody>
              </Panel>
              <Panel>
                <PanelHeader className='phoneTitle'>
                  J
                </PanelHeader>
                <PanelBody>
                  <MediaBox type="small_appmsg">
                    <Cells>
                      <Cell href="tel:18688888888" access>
                        <CellHeader>{smallIcon}</CellHeader>
                        <CellBody>
                          <p>Jike</p>
                        </CellBody>
                        <CellFooter/>
                      </Cell>
                      <Cell href="tel:18688888888" access>
                        <CellHeader>{smallIcon}</CellHeader>
                        <CellBody>
                          <p>Jim</p>
                        </CellBody>
                        <CellFooter/>
                      </Cell>
                    </Cells>
                  </MediaBox>
                </PanelBody>
              </Panel>
            </div>
        );
    }
}
// function mapStateToProps(state) {
//   return {
//     phonebook:state.phonebook,
//     loading:state.loading.models.phonebook,
//   }
// }
// export default connect(mapStateToProps)(PhoneBook);
export default PhoneBook;

