import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import 'antd/dist/antd.css'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'

export default class App extends Component {
    
    render() {
        return (
            <div>
               <button>点我</button>
               <Button type="primary">主按钮</Button> &nbsp;
               <Button type="primary" icon={<SearchOutlined />}> &nbsp;
                Search
               </Button> &nbsp;
               <WechatOutlined /> &nbsp;
               <DatePicker /> 
            </div>
        )
    }
}
