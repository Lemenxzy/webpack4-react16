/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/22
 Time: 11:16
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './Button.scss'
import PropTypes from 'prop-types'
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        //样式定义
        let stylestr = '';
        if (this.props.type && typeof this.props.type !== 'undefined'){
            switch (this.props.type){
                case 'primary':
                    stylestr = style.primary;
                    break;
                case 'success':
                    stylestr = style.success;
                    break;
                case 'info':
                    stylestr = style.info;
                    break;
                case 'warning':
                    stylestr = style.warning;
                    break;
                case 'danger':
                    stylestr = style.danger;
                    break;
                default:
                    break;
            }
        }else{
            stylestr = style.default;
        }

        return (
            <button type="button" className = {style.button + ' ' + stylestr }>
                <span>{this.props.children}</span>
            </button>
        )

    }
}

Button.defaultProps = {
    children : '按钮'
};

// 参数类型
Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
    ])
};




export default Button
