import React, { Component } from 'react';
import $ from "jquery";
export default class Gallery extends Component {
  render() {

    this.componentDidMount= ()=>{
        $(document).ready(function($) {
 
            $('#myCarousel').carousel({
                    interval: 5000
            });
     
            //Handles the carousel thumbnails
            $('[id^=carousel-selector-]').click(function () {
            var id_selector = $(this).attr("id");
            try {
                var id = /-(\d+)$/.exec(id_selector)[1];
                console.log(id_selector, id);
                $('#myCarousel').carousel(parseInt(id));
            } catch (e) {
                console.log('Regex failed!', e);
            }
        });
            
            $('#myCarousel').on('slid.bs.carousel', function (e) {
                     var id = $('.item.active').data('slide-number');
                    $('#carousel-text').html($('#slide-content-'+id).html());
            });
    });
    }
    return (
      <div>
        <div className="container">
        <h1>Gallery</h1>
    <div id="main_area">
        <div className="row">
            <div className="col-sm-6" id="slider-thumbs">
                
                <ul className="hide-bullets">
                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-0">
                            <img src="/images/Sample11.jpg"/>
                        </a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-1"><img className="ra" src="/images/download (1).jpg"/></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-2"><img src="/images/images (1).jpg" /></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-3"><img src="/images/images (3).jpg"/></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-4"><img src="/images/images (4).jpg"/></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-5"><img src="/images/img1.jpg" /></a>
                    </li>
                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-6"><img src="/images/img2.jpg" /></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-7"><img src="/images/img3.jpg" /></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-8"><img src="/images/img4.jpg" /></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-9"><img src="/images/img5.jpg" /></a>
                    </li>
                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-10"><img src="/images/img6.jpg" /></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-11"><img src="/images/Sample1.jpg"/></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-12"><img src="/images/Sample2.jpg"/></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-13"><img src="/images/Sample3.jpg" /></a>
                    </li>
                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-14"><img src="/images/Sample4.jpg"/></a>
                    </li>

                    <li className="col-sm-3">
                        <a className="thumbnail" id="carousel-selector-15"><img src="/images/Sample5.jpg"/></a>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6">
                <div className="col-xs-12" id="slider">
                    
                    <div className="row">
                        <div className="col-sm-12" id="carousel-bounding-box">
                            <div className="carousel slide" id="myCarousel">
                                
                                <div className="carousel-inner">
                                    <div className="active item" data-slide-number="0">
                                        <img src="/images/Sample11.jpg"/></div>

                                    <div className="item" data-slide-number="1">
                                        <img src="/images/images (1).jpg"/></div>

                                    <div className="item" data-slide-number="2">
                                        <img src="/images/images (3).jpg"/></div>

                                    <div className="item" data-slide-number="3">
                                        <img src="/images/images (4).jpg"/></div>

                                    <div className="item" data-slide-number="4">
                                        <img src="/images/img1.jpg" /></div>

                                    <div className="item" data-slide-number="5">
                                        <img src="/images/img2.jpg"/></div>
                                    
                                    <div className="item" data-slide-number="6">
                                        <img src="/images/img3.jpg"/></div>
                                    
                                    <div className="item" data-slide-number="7">
                                        <img src="/images/img4.jpg"/></div>
                                    
                                    <div className="item" data-slide-number="8">
                                        <img src="/images/img5.jpg"/></div>
                                    
                                    <div className="item" data-slide-number="9">
                                        <img src="/images/img6.jpg"/></div>
                                    
                                    <div className="item" data-slide-number="10">
                                        <img src="/images/Sample1.jpg"/></div>
                                    
                                    <div className="item" data-slide-number="11">
                                        <img src="/images/Sample2.jpg"/></div>
                                    
                                    <div className="item" data-slide-number="12">
                                        <img src="/images/Sample3.jpg"/></div>

                                    <div className="item" data-slide-number="13">
                                        <img src="/images/Sample4.jpg"/></div>

                                    <div className="item" data-slide-number="14">
                                        <img src="/images/Sample5.jpg"/></div>

                                    <div className="item" data-slide-number="15">
                                        <img src="http://placehold.it/470x480&text=15"/></div>
                                </div>
                                
                                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    </div>
</div>
      </div>
    )
  }
}
