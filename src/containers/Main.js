import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchCurrent } from '@/utils/api'
import Loading from '@/components/common/Loading'
import Top from '@/containers/Top'
import * as actions from '@/actions/common'
const styles = {
  container: {
    width: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0'
  },
  main: {
    width: '100%',
    position: 'absolute',
    top: '60px',
    bottom: 0,
    overflow: 'scroll'
  }
}
class Main extends React.Component {
  componentWillMount () {
    this.props.dispatch(actions.fetchCurrentInfoAction((err) => {
      if (err) {
        this.props.history.push('/login')
      }
    }))
    this.props.dispatch(actions.fetchRangInfoAction())
  }
  render () {
    const { ajaxCount } = this.props
    return (
      <div style={styles.container}>
        {ajaxCount && <Loading />}
        <Top />
        <div style={styles.main}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default withRouter(connect(({common}) => common)(Main))
