//日报首页
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from './../../components/PageTitle';
import NoteList from './NoteList';
import styles from './workDiary.less';
import './../../icon/iconfont';

class WorkDiaryIndex extends Component {
    render() {
        return (
            <div>
                <PageTitle title='工作日志'/>
                <div className={styles.pageTop}>
                    <Link to='./WorkDiaryCreate'>
                      <div className={styles.iconBox}>
                          <div className={styles.iconWrap}>
                              <svg className={styles.icon_bianji}>
                                  <use xlinkHref="#icon-bianji">新建</use>
                              </svg>
                          </div>
                          <h5>新建日志</h5>
                      </div>
                    </Link>
                    <div className={styles.iconBox}>
                      <div className={styles.iconWrap}>
                        <svg className={styles.icon_bianji}>
                          <use xlinkHref="#icon-wenzhang">草稿</use>
                        </svg>
                      </div>
                      <h5>草稿</h5>
                    </div>
                </div>
                <NoteList/>
            </div>
        );
    }
}

export default WorkDiaryIndex;
