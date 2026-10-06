import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import News from './Components/News';
import Footer from './Components/Footer.js'
import { HashRouter as Router, Routes , Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
    this.setProgress = this.setProgress.bind(this);
  }

  setProgress(progress) {
    this.setState({ progress: progress });
  }
  
  apiKey = process.env.REACT_APP_NEWS_API;
  
  render() {
    return (
      <>
      <Router>
      <div>
      <Navbar />
      <LoadingBar
        height= {2.5}
        color="#f11946"
        progress={this.state.progress}
        shadow={true}
      />
      <Routes>
      <Route exact path="/about" element={<News setProgress  = {this.setProgress } apiKey = { this.apiKey }  key='about' pageSize={8} country="us" category="about" />}/>
      <Route exact path="/business" element={<News setProgress  = {this.setProgress } apiKey = { this.apiKey }  key='business' pageSize={8} country="us" category="business" />}/>
      <Route exact path="/entertainment" element={<News setProgress  = {this.setProgress } apiKey = { this.apiKey }  key='entertainment' pageSize={8} country="us" category="entertainment" />}/>
      <Route exact path="/general" element={<News setProgress  = {this.setProgress } apiKey = { this.apiKey }  key='general' pageSize={8} country="us" category="general" />}/>
      <Route exact path="/science" element={<News setProgress  = {this.setProgress } apiKey = { this.apiKey }  key='science' pageSize={8} country="us" category="science" />}/>
      <Route exact path="/sports" element={<News setProgress  = {this.setProgress } apiKey = { this.apiKey }  key ='sports'pageSize={8} country="us" category="sports" />}/>
      <Route exact path="/technology" element={<News setProgress  = {this.setProgress } apiKey = { this.apiKey }  key='technology'pageSize={8} country="us" category="technology" />}/>
      </Routes>
      <Footer />
      </div>
      {/* <h4> Hello what is the update regarding I.T.G.I</h4> */}
      </Router>

      
      
      </>
    )
  }
}

