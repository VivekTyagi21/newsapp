import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <>
        <footer className="footer my-container bg-dark text-white py-3 px-4">
        <div className="text-center">
            <a
            href="https://coreui.io"
            className="text-success text-decoration-none fw-bold"
            >
            CoreUI
            </a>

            <span className="ms-2">&copy; 2026 NewsMonkey</span>
        </div>

        <div className="text-center mt-2">
            <span className="fw-bold">Powered by </span>

            <a
            href="https://coreui.io"
            className="text-danger text-decoration-none fw-bold"
            >
            News Monkey
            </a>
        </div>
        </footer>
        </>
      
    )
  }
}

export default Footer
