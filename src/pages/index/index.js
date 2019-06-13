import { connect } from 'dva';
import React, { Component } from 'react';

import styles from './index.less';

@connect(({ index }) => ({ index }))
class Page extends Component{
  state = {};

  render() {
    const {
      index: { },
    } = this.props;
    return <div className={styles.userCenter}>Hello</div>;
  }
}

export default Page;
