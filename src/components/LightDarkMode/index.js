// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {btnText: 'Light Mode', className: 'dark-mode'}

  onChangeTextAndMode = () => {
    const {btnText, className} = this.state
    if (btnText === 'Light Mode' && className === 'dark-mode') {
      this.setState({btnText: 'Dark Mode', className: 'light-mode'})
    } else {
      this.setState({btnText: 'Light Mode', className: 'dark-mode'})
    }
  }

  render() {
    const {btnText, className} = this.state

    return (
      <div className="container">
        <div className={className}>
          <h1>Click To Change Mode</h1>
          <div>
            <button className="button" onClick={this.onChangeTextAndMode}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
