import React from 'react';
import Prolist from '@/components/componen/Prolist'


class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      Prolist: []
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        Prolist: data
      })
    })
  }
  render () {
    // console.log(this.props)
    return (
      <div className = "box">
        <header className="header">首页头部</header>
        <div className="content">
          <Prolist prolist = {this.state.Prolist} {...this.props}/>
        </div>
      </div>
    )
  }
}
export default Com;