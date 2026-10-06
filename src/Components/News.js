import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'



export class News extends Component {
     
     static defaultProps = {
      country : 'us',
      pageSize : 8,
      category : 'general',
     };

     static propTypes = {
      country : propTypes.string,
      pageSize : propTypes.number,
      category : propTypes.string,
     };
    
     constructor(){
                super();
                console.log("Hello I am component from News Component");
                this.state = {
                  articles : [],
                  loading : false,
                  page:1
                }  
              };
      
      async componentDidMount() {
              console.log("cdm");
              this.props.setProgress(0);
              let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
              this.setState({loading:true});
              let data = await fetch(url);
              this.props.setProgress(30);
              let parsedData =  await data.json();
              this.props.setProgress(50);
              console.log(parsedData);
              this.setState({articles: parsedData.articles , totalResults: parsedData.totalResults , loading:false})
              this.props.setProgress(100);

            }
      
      handlePreviousClick = async ()=> {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
              this.setState({loading:true});
              let data = await fetch(url);
              this.props.setProgress(30);
              let parsedData =  await data.json();
              this.props.setProgress(50);
              
              this.setState({
                                page: this.state.page - 1,
                                articles: parsedData.articles,
                                loading:false
              })
              this.props.setProgress(100);
        
                    }
              

      handleNextClick = async () => {
          console.log("Next");
          this.props.setProgress(0);

          if (
            this.state.page + 1 <=
            Math.ceil(this.state.totalResults / this.props.pageSize)
          ) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

            this.setState({ loading: true });

            let data = await fetch(url);
            let parsedData = await data.json();
            this.props.setProgress(30);

            this.setState({
              page: this.state.page + 1,
              articles: parsedData.articles,
              loading: false,
            });
             this.props.setProgress(100);
          }
        };
            

            render()  {
                console.log("render")
                    return (
                        <div className='container my-3'>
                        <h4 style={{ fontSize: '25px', fontFamily: 'Arial' , fontWeight: 'bold' , textAlign: 'center'}}>Daily News Headline</h4>
                        { this.state.loading &&  <Spinner/>}
                        <div className='row'>
                          {this.state.articles.map((element) =>  {
                            return  <div className="col-md-4 my-4" key={element.url}>
                            <NewsItem title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} sourcer={element.source.name}/>
                            </div>
                            })}
                         </div>
                          <div className="container d-flex justify-content-between">
                            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                            <button disabled={this.state.page >=Math.ceil(this.state.totalResults/this.props.pageSize) } className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                           </div>
                        </div>

      
         
        
           

         
           
        
      
     

        
        
        
        
        



         
    )
  }
}


export default News
