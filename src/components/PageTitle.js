import React, { Component } from 'react';
import { Article } from 'react-weui';
import styles from './../routes/basic.less';

class pageTitle extends Component {
    render() {
        return (
            <div className={styles.pageTitle} title="List">
                <Article>
                    <h2>{this.props.title}</h2>
                </Article>
            </div>
        );
    }
}

export default pageTitle;
