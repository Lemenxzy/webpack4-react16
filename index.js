import 'raf/polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import Button from './src/component/Button'
class App extends React.Component {

    render() {
        return <div>
            <Button type="danger">哈哈哈</Button>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById('App'));