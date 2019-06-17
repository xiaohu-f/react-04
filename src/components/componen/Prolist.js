import React from 'react';

class Com extends React.Component {
  godetail (id) {
    console.log(this.props)
    this.props.history.push('/detail/' + id)
  }

  render () {
    return (
      <ul className = "prolist">
            {
              this.props.prolist.map((item, index) => (
                <li key = {index} onClick = {this.godetail.bind(this, item.id)}>
                  {item.title}
                </li>
              ))
            }
          </ul>
    )
  }
}


export default Com;