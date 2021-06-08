import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
      <div className="slider">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 px-0 px-sm-0">
              <div class="bd-example">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/16/19/library.jpg" class="d-block w-100" alt="..." height="650px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Welcome to E-Learners</h5>
                  <p>Feel free to learn and achieve big goals.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://media.istockphoto.com/photos/elementary-school-kids-using-laptops-on-a-class-in-the-classroom-picture-id1144562455?k=6&m=1144562455&s=170667a&w=0&h=DtePDXJG0L2O4682_xppva2-we4SaP5mC-PL8qFuGwQ=" class="d-block w-100" alt="..." height="650px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Welcome to E-Learners</h5>
                  <p>Feel free to learn and achieve big goals.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBib29rc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" class="d-block w-100" alt="..." height="650px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Welcome to E-Learners</h5>
                  <p>Feel free to learn and achieve big goals</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
