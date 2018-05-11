// 日报创建
import React, { Component } from 'react';
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription,
  Cells,
  CellsTitle,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Icon
} from 'react-weui';
import PageTitle from './../../components/PageTitle';
import styles from './workDiary.less';

class WorkDiaryView extends Component {
  state = {
    picker_show: false,
    picker_show2: false,
    picker_value: '',
    picker_value2: '',
    picker_group: [
      {
        items: [
          {
            label: '长城贴瓷砖'
          },
          {
            label: '淘干太平洋',
          },
          {
            label: '长城贴瓷砖'
          },
          {
            label: '淘干太平洋',
          }
        ]
      }
    ],
    picker_fileType: [
      {
        items: [
          {
            label: '班前记录'
          },
          {
            label: '班后记录',
          },
          {
            label: '安全检查记录'
          }
        ]
      }
    ],
  };

  hide(){
    this.setState({
      picker_show: false,
      picker_fileType_show: false
    })
  }
    render() {
        return (
            <div className={styles.divAll}>
              <PageTitle title='HSE日报预览'/>
              <div className={styles.pageTop}>

              </div>
              <Cells>
                <Cell>
                  <CellHeader className={styles.diaryLeftTitle}>
                    合同名称
                  </CellHeader>
                  <CellFooter>
                    这是一个合同
                  </CellFooter>
                </Cell>
              </Cells>
              <Cells>
                <Cell>
                  <CellHeader className={styles.diaryLeftTitle}>
                    日报类型
                  </CellHeader>
                  <CellFooter>
                    这是一个合同
                  </CellFooter>
                </Cell>
                <Cell>
                  <CellHeader className={styles.diaryLeftTitle}>
                    项目负责人
                  </CellHeader>
                  <CellFooter>
                    王麻子
                  </CellFooter>
                </Cell>
              </Cells>
              <Panel>
                <PanelBody>
                  <MediaBox type="text">
                    <MediaBoxBody>
                      <MediaBoxTitle>当日工作任务</MediaBoxTitle>
                      <MediaBoxDescription>
                        昆勘院有限公司在三楼会议室举行座谈会，欢迎中铝国际总裁助理聂玉栋一行2人前来检查指导工作。
                      </MediaBoxDescription>
                    </MediaBoxBody>
                  </MediaBox>
                  <MediaBox type="text">
                    <MediaBoxBody>
                      <MediaBoxTitle>安全注意事项</MediaBoxTitle>
                      <MediaBoxDescription>
                        昆勘院有限公司副总经理周罕从基本情况、能力与业绩等介绍了公司的历史沿革和经营情况，重点汇报了资质和三板块建设情况。
                      </MediaBoxDescription>
                    </MediaBoxBody>
                  </MediaBox>
                </PanelBody>
              </Panel>
              <CellsTitle>班组长检查事项</CellsTitle>
              <Cells>
                <Cell>
                  <CellBody>班组人员是否按劳动保护要求着装 </CellBody>
                  <CellFooter>
                    <Icon value="success" />
                  </CellFooter>
                </Cell>
              </Cells>
              <Cells>
                <Cell>
                  <CellBody>班组人员身体状况是否良好</CellBody>
                  <CellFooter>
                    <Icon value="cancel" />
                  </CellFooter>
                </Cell>
              </Cells>
              <Cells>
                <Cell>
                  <CellBody>作业现场是否存在安全隐患</CellBody>
                  <CellFooter>
                    <Icon value="success" />
                  </CellFooter>
                </Cell>
              </Cells>
              <Cells>
                <Cell>
                  <CellBody>作业环境是否干净整洁</CellBody>
                  <CellFooter>
                    <Icon value="success" />
                  </CellFooter>
                </Cell>
              </Cells>
              <Cells>
                <Cell>
                  <CellBody>设备设施是否运转正常</CellBody>
                  <CellFooter>
                    <Icon value="success" />
                  </CellFooter>
                </Cell>
              </Cells>
            </div>
        );
    }
}

export default WorkDiaryView;
