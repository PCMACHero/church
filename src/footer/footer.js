import React from 'react'

export default class Footer extends React.Component{
    render(){
        return (
       
<footer className="page-footer font-small indigo lighten-2"  >

    <div className="container">

      <div className="row">
            
        <div className="col-md-12 py-5">
        <div className="">216 S. Reservoir St. Pomona, CA 91766<br/>(909) 623-5515 <br/>info@jesuseslaroca.org</div>
          <div className="mb-5 flex-center">

            <a className="fb-ic">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="tw-ic">
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="gplus-ic">
              <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="li-ic">
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="ins-ic">
              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a className="pin-ic">
              <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
            </a>
          </div>
        </div>

      </div>

    </div>

    <div className="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/">Iglesia Jesus es la Roca</a>
    </div>

  </footer>
                )
    }
    
}

