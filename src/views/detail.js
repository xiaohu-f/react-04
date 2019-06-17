import React from 'react';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount () {
    // console.log( this.props)
    const { id } = this.props.match.params
    fetch ('http://www.daxunxun.com/detail?id='+ id).then(res => res.json()).then(data => {
      // console.log(data)
      this.setState({
        data: data[0]
      })
      // console.log(this.state.data)
    })
  }

  goback() {
    this.props.history.go(-1)
  }

  render () {
    return (
      <div className = 'container'>
        <div className = "box">
          <header className="header">
            <button onClick = {this.goback.bind(this)}>返回</button>
          </header>
          <div className="content">{this.state.data.title}</div>
        </div>
        <footer className = "footer">详情底部</footer>
      </div>
    )
  }
}

export default Com;