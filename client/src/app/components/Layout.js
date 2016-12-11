/**
 * @file demo 整体页面布局
 * @author hancong
 * @date 2016-10-25
 */

import React from 'react';
import {Component} from 'react';
import {Icon, message} from 'antd';
import './style.less';

message.config({
    duration: 2.5
});

export default class Layout extends Component {
	componentWillMount = () => {
        this.props.getUser();
    };
    render() {
        let {children} = this.props;
        return (
            <div className="wrapper">
                <div className="main">{children}</div>
            </div>
        );
    }
}
