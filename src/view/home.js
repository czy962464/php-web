import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }
  
  render() {
    return (
      <div>
        <a href='detail'>去detail</a>
        <button onClick={() => this.props.history.push('detail')}>通过函数跳转</button>
      </div>
    )
  }
  componentDidMount(){
    axios.get('http://127.0.0.1/test/1.php')
    .then(function (response) {
      console.log(response)
    })
  }
}