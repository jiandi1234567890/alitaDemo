import { connect } from 'dva';
import React, { Component } from 'react';
import {Row, Col, Card, Radio} from "antd";
import styles from './index.less';

@connect(({ summonerskills }) => ({ summonerskills }))
class Page extends Component{
  state = {
    select: 80104

  };

  render() {
    const {
      summonerskills: { summonerskill, select = 80104 },
      dispatch,
    } = this.props;

    const selectItem = e => {
      dispatch({type:"summonerskills/save", payload:{
         select: e.summoner_id
      }})
    }
   
    return (<div className={styles.userCenter}>
      <div >
      <Row>
      {summonerskill.map(item => (   
        <Col key={item.summoner_id} span={5} className={styles.skillsitem} onClick={()=>{selectItem(item)}}>
          <img src={'https://game.gtimg.cn/images/yxzj/img201606/summoner/' + item.summoner_id + '.jpg'}/>
          <p>{item.summoner_name}</p>
        </Col>
      ))}
      </Row>
      </div>
      <div>
        {summonerskill.filter(item => item.summoner_id === select ).map(item =>(
          <div>
          <img src={'https://game.gtimg.cn/images/yxzj/img201606/summoner/' + item.summoner_id + '-big.jpg'}/>
          <h3>{item.summoner_name}</h3>
          <p>{item.summoner_rank}</p>
          <p>{item.summoner_description}</p>
          </div>
        ))}
      </div>
    </div>);
  }
}

export default Page;
