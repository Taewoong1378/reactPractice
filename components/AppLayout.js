import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link href="/"><a>노드버드</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/profile"><a>프로필</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/signup"><a>회원가입</a></Link>
                    </Menu.Item>
                </Menu>
                {/* 모바일에서는 xs, 테블릿에서는 md
                총 24개의 컬럼으로 구성돼있는데 xs={24}를 하면 24개의 칼럼, 즉 100%를 다 차지하겠다는 말이다
                화면이 커지면 6/24 = 25%, 12/24 = 50%, 6/24 = 25%를 각각 차지하겠다는 말이다
                gutter는 컬럼들이 너무 서로 붙어있으면 쫌 그렇기 때문에 컬럼 사이에 간격을 주는 것이다.                
                target="blank"만 사용하면 보안위협이 있기 때문에 반드시 rel="noreferrer noopener"를 같이 써준다 */}
                <Row gutter={8}>
                    <Col xs={24} md={6}>
                        왼쪽 메뉴
                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        오른쪽 메뉴
                    </Col>
                </Row>
                {children}
            </div>
        </div>
    );
};


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
// props로 넘어오는 애들은 이 propTypes로 검사를 한 번 해주는 것이 좋다. children은 node(리액트의 node) 타입을 가지고 있다. 화면에 그릴 수 있는 모든 것들이 node이다.

// <AppLayout>
// 이 사이에 들어가는 것이 children으로 전달된다.
// </AppLayout>

export default AppLayout;
