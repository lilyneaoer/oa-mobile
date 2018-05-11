import React, { Component } from 'react';
import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarLabel,
} from 'react-weui';
import PageTitle from './../components/PageTitle';
import WorkList from './../components/WorkList';
import MsgList from './../components/MsgList';
import PhoneBook from './home/PhoneBook';
import MyInfo from './../components/MyInfo';
import MyWork from './../components/MyWork';
import styles from './../routes/basic.less';
import './../routes/fix.css';
import './../icon/iconfont';

class Wrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        };
    }
  render() {
    return (
     <div className={styles.Wrap}>
         <Tab>
             <TabBody>
                 <div style={{display: this.state.tab === 0 ? null : 'none'}}>
                     <PageTitle title='消息'/>
                     <MsgList/>
                 </div>
                 <div style={{display: this.state.tab === 1 ? null : 'none'}}>
                     <PageTitle title='通讯录'/>
                     <PhoneBook/>
                 </div>
                 <div style={{display: this.state.tab === 2 ? null : 'none'}}>
                     <PageTitle title='工作台'/>
                     <WorkList/>
                 </div>
                 <div style={{display: this.state.tab === 3 ? null : 'none'}}>
                     <PageTitle title='我'/>
                     <MyInfo/>
                     <MyWork/>
                 </div>
             </TabBody>
            <TabBar>
                <TabBarItem active={this.state.tab === 0}  onClick={e=>this.setState({tab:0})}>
                    <svg className={styles.icon}>
                        <use xlinkHref="#icon-xiaoxi">消息</use>
                    </svg>
                    <TabBarLabel className={styles.btmTitle}>消息</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab === 1} onClick={e=>this.setState({tab:1})}>
                  <svg className={styles.icon}>
                        <use xlinkHref="#icon-zuzhijiagou">通讯录</use>
                    </svg>
                    <TabBarLabel>通讯录</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab === 2}  onClick={e=>this.setState({tab:2})}>
                  <svg className={styles.icon}>
                        <use xlinkHref="#icon-gongzuoon">工作台</use>
                    </svg>
                    <TabBarLabel>工作台</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab === 3}  onClick={e=>this.setState({tab:3})}>
                  <svg className={styles.icon}>
                        <use xlinkHref="#icon-wo">我</use>
                    </svg>
                    <TabBarLabel>我</TabBarLabel>
                </TabBarItem>
            </TabBar>
         </Tab>
     </div>
    );
  }
}

export default Wrap;
