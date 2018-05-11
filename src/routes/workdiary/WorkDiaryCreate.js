// 日报创建
import React, { Component } from 'react';
import {
  Picker, Form, FormCell, CellBody, CellHeader, CellFooter, Switch, Label, Input, CellsTitle, TextArea, Button
} from 'react-weui';
import PageTitle from './../../components/PageTitle';
import styles from './workDiary.less';
import './../../icon/iconfont';

class WorkDiaryCreate extends Component {
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
              <PageTitle title='新建工作日志'/>
              <div className={styles.pageTop}>

              </div>
              <Form>
                <FormCell>
                  <CellHeader>
                    <Label>合同名称</Label>
                  </CellHeader>
                  <CellBody>
                    <Input
                      type="text"
                      onClick={e=>{
                        e.preventDefault()
                        this.setState({picker_show: true})
                      }}
                      placeholder="请选择合同"
                      value={this.state.picker_value}
                      readOnly={true}
                    />
                  </CellBody>
                </FormCell>
              </Form>
              <Picker
                onChange={selected=>{
                  let value = '';
                  selected.forEach( (s, i)=> {
                    value = this.state.picker_group[i]['items'][s].label
                  });
                  this.setState({
                    picker_value: value,
                    picker_show: false
                  })
                }}
                groups={this.state.picker_group}
                show={this.state.picker_show}
                onCancel={e=>this.setState({picker_show: false})}
              />
              <Form>
                <FormCell>
                  <CellHeader>
                    <Label>日报类型</Label>
                  </CellHeader>
                  <CellBody>
                    <Input
                      type="text"
                      onClick={e=>{
                        e.preventDefault()
                        this.setState({picker_show2: true})
                      }}
                      placeholder="请选择日报类型"
                      value={this.state.picker_value2}
                      readOnly={true}
                    />
                  </CellBody>
                </FormCell>
              </Form>
              <Picker
                onChange={selected=>{
                  let value2 = '';
                  selected.forEach( (s, i)=> {
                    value2 = this.state.picker_fileType[i]['items'][s].label
                  });
                  this.setState({
                    picker_value2: value2,
                    picker_show2: false
                  })
                }}
                groups={this.state.picker_fileType}
                show={this.state.picker_show2}
                onCancel={e=>this.setState({picker_show2: false})}
              />
              <Form>
                <FormCell>
                  <CellHeader>
                    <Label>项目负责人</Label>
                  </CellHeader>
                  <CellBody>
                    <Input placeholder="请输入项目负责人"/>
                  </CellBody>
                </FormCell>
                <CellsTitle className={styles.textAreaTitle}>当日工作任务</CellsTitle>
                  <FormCell>
                    <CellBody>
                      <TextArea placeholder="请输入当日工作任务" rows="3" maxlength="200"></TextArea>
                    </CellBody>
                  </FormCell>
                <CellsTitle className={styles.textAreaTitle}>安全注意事项</CellsTitle>
                  <FormCell>
                    <CellBody>
                      <TextArea placeholder="请输入安全注意事项" rows="3" maxlength="200"></TextArea>
                    </CellBody>
                  </FormCell>
                <CellsTitle>检查衣着劳保</CellsTitle>
                  <FormCell>
                    <CellBody>班组人员是否按劳动保护要求着装</CellBody>
                    <CellFooter>
                      <Switch/>
                    </CellFooter>
                  </FormCell>
                <CellsTitle>检查人员情况</CellsTitle>
                <FormCell>
                  <CellBody>班组人员身体状况是否良好</CellBody>
                  <CellFooter>
                    <Switch/>
                  </CellFooter>
                </FormCell>
                <CellsTitle>检查作业环境</CellsTitle>
                <FormCell>
                  <CellBody>作业现场是否存在安全隐患</CellBody>
                  <CellFooter>
                    <Switch/>
                  </CellFooter>
                </FormCell>
                <CellsTitle>检查作业环境</CellsTitle>
                <FormCell>
                  <CellBody>作业环境是否干净整洁</CellBody>
                  <CellFooter>
                    <Switch/>
                  </CellFooter>
                </FormCell>
                <CellsTitle>检查作业工具</CellsTitle>
                <FormCell>
                  <CellBody>作业工器具是否符合作业要求</CellBody>
                  <CellFooter>
                    <Switch/>
                  </CellFooter>
                </FormCell>
                <CellsTitle>检查设备情况</CellsTitle>
                <FormCell>
                  <CellBody>设备设施是否运转正常</CellBody>
                  <CellFooter>
                    <Switch/>
                  </CellFooter>
                </FormCell>
              </Form>
              <div className={styles.button}>
                <Button type="primary">提交</Button>
              </div>
            </div>
        );
    }
}

export default WorkDiaryCreate;
