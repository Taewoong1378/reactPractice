import React, { useMemo } from 'react';
import { List, Button, Card } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';

const ListItemWrapper = styled(List.Item)`
    margin-top: 20;
`;

const FollowList = ({ header, data }) => {

    const listStyled = useMemo(() => ({ marginBottom: 20 }), []);
    const grid = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
    const style = useMemo(() => ({ textAlign: 'center', margin: '10px 0' }), []);

    return (
        <List
            style={listStyled}
            grid={grid}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={style}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <ListItemWrapper>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </ListItemWrapper>
            )}
        />
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default FollowList;