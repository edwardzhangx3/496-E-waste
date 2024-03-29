import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {

    render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Team</h1>
              <Row>
                <Col sm={4} md={4} lg={4}></Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/Edward_profile.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Edward"
                    description="Web Developer/Researcher"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/Angel_profile.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Angel"
                    description="Researcher"
                  />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm={4} md={4} lg={4}></Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/Andrew_profile.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Andrew"
                    description="Researcher"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/Elisa_profile.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Elisa"
                    description="Researcher"
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}

