import React, { Component } from 'react';
import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarLabel,
} from 'react-weui';
import WorkDiaryIndex from './WorkDiaryIndex';
import WorkDiaryView from './WorkDiaryView';
import WorkDiaryCreate from './WorkDiaryCreate';
import Cate from './Cate';
import PageTitle from './../../components/PageTitle';
import styles from './../../routes/basic.less';
import './../../icon/iconfont';

class WorkDiary extends Component {
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
                    <WorkDiaryIndex/>
                 </div>
                 <div style={{display: this.state.tab === 1 ? null : 'none'}}>
                    <PageTitle title='分类'/>
                    <Cate/>
                 </div>
                 <div style={{display: this.state.tab === 2 ? null : 'none'}}>
                    {/*<PageTitle title='统计'/>*/}
                    <WorkDiaryView/>
                 </div>
                 <div style={{display: this.state.tab === 3 ? null : 'none'}}>
                     <PageTitle title='安全周报'/>
                        <WorkDiaryCreate/>
                 </div>
             </TabBody>
            <TabBar>
                <TabBarItem active={this.state.tab === 0}  onClick={e=>this.setState({tab:0})}>
                    <svg className={styles.icon}>
                        <use xlinkHref="#icon-tijiaochenggong">已提交</use>
                    </svg>
                    <TabBarLabel className={styles.btmTitle}>已提交</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab === 1} onClick={e=>this.setState({tab:1})}>
                  <svg className={styles.icon}>
                        <use xlinkHref="#icon-chakanrizhi">分类</use>
                    </svg>
                    <TabBarLabel>分类</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab === 2}  onClick={e=>this.setState({tab:2})}>
                  <svg className={styles.icon}>
                        <use xlinkHref="#icon-icon1">统计</use>
                    </svg>
                    <TabBarLabel>统计</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab === 3}  onClick={e=>this.setState({tab:3})}>
                  <svg className={styles.icon}>
                        <use xlinkHref="#icon-rizhixitong">安全周报</use>
                    </svg>
                    <TabBarLabel>安全周报</TabBarLabel>
                </TabBarItem>
            </TabBar>
         </Tab>
     </div>
    );
  }
}

export default WorkDiary;
