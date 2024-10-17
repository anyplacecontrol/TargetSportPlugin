import React from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: null, errorInfo: null}
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

    window.logger.error(error.toString(), errorInfo.componentStack, 'ErrorBoundary')

    setTimeout(async () => {
      window.location.reload(true)
    }, 5000)
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className={`content`}>
          {/* <HeaderLogo /> */}

          <h2>Something went wrong.</h2>
          <br />
          <div style={{whiteSpace: 'pre-wrap'}}>
            {this.state.error && this.state.error.toString()} <br /> {this.state.errorInfo.componentStack}
          </div>
        </div>
      )
    }
    // Normally, just render children
    else return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
}
