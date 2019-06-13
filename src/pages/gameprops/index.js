import { connect } from 'dva';
import React, { Component } from 'react';
import {Row, Col, Card, Radio} from "antd";
import styles from './index.less';
import RadioGroup from 'antd/lib/radio/group';

const gamepropsType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
];

@connect(({ gameprops }) => ({ gameprops }))
class Page extends Component{
  state = {
    filterKey:0
  };
  

  render() {
    const {
      gameprops: { gameprops, filterKey = 0 },
      dispatch,
    } = this.props;
    const onChange = e => {
      dispatch({type:"gameprops/save", payload:{
        filterKey:e.target.value
      }})
  };

    return (<div>
    <Card className={styles.card}>
      <RadioGroup onChange={onChange} value={filterKey}>
        {gamepropsType.map(data =>(
          <Radio value={data.key}>
            {data.value}
          </Radio>
        ))}
      </RadioGroup>
    </Card>
    <Row>
    {gameprops.filter(data => filterKey === 0 || data.item_type === filterKey).reverse().map(data => (   
      <Col key={data.ename} span={3} className={styles.gamepropsitem}>
        <img src={'https://game.gtimg.cn/images/yxzj/img201606/itemimg/' + data.item_id + '.jpg'}/>
        <p>{data.item_name}</p>
      </Col>
    ))}
    </Row>
    </div>);
  }
}

export default Page;
