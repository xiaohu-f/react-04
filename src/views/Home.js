import React from 'react';
import Prolist from '@/components/componen/Prolist'
import Banner from '@/components/componen/Banner'
import { Tabs} from 'antd-mobile';

class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      Prolist: [],
      bannerlist: [],
      tabs : [
        { title: '1st Tab' },
        { title: '2nd Tab' },
        { title: '3rd Tab' },
        { title: '4th Tab' },
        { title: '5th Tab' },
        { title: '6th Tab' },
        { title: '7th Tab' },
        { title: '8th Tab' },
        { title: '9th Tab' },
      ]
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({
        bannerlist: data
      })
    })
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        Prolist: data
      })
    })
  }

  renderContent (tab) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>
    )
  }

  render () {
    // console.log(this.props)
    return (
      <div className = "box">
        <header className="header">首页头部</header>
        <div className="content">
          <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
            {this.renderContent}
          </Tabs>
          <Banner bannerlist = {this.state.bannerlist}/>
          <Prolist prolist = {this.state.Prolist} {...this.props}/>
        </div>
      </div>
    )
  }
}
export default Com;