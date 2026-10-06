import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
      let {title, description , imageUrl ,newsUrl,author,date,sourcer } = this.props;
   
      return (
         <>
        
            <div className='my-3'>
            <div className="card" style={{ width: "20rem" }}>
            <img src={!imageUrl?"https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2352x1323+0+123/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F83%2F5b%2F223069d740f8a0887f1aeb468d46%2Fap26264659913202.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{!title?"No Title Given":title}</h5>
                <p className="card-text">{!description?"This component could not be rendered":description}</p>
                <a rel = "noreferrer" href= {newsUrl} target='_blank' className= "btn btn-sm btn-danger"> Read More </a>
                <p className="card-text"><small className="text-normal">By {!author?"No author":author} on {new Date(date).toGMTString()}</small></p>
                <p className="card-text"><small className="text-normal" style={{ fontSize: '15px', color: 'black' ,text: 'Strong'}}>Source of the given news: {sourcer}</small>  </p>

                </div>
            
        </div>
        </div>
        
        </>
    )
  }
}
export default NewsItem;
