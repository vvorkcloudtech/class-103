import React from 'react';



class Portfolio extends React.Component {
    arr = [
        {
            sectionHeading: "Awesomeness Portfolio.",
            sectionPara: "Below you'll find some of my recent work.",
            image1: {
                image: "https://68.media.tumblr.com/a4a06b925ad2ad936ba2ce6c3343c444/tumblr_nwh4epTtMV1ud7rr3o1_1280.jpg",
                heading4: "Twitch.tv API project",
                para: "Bootstrap and Angularjs"
            },
       
            image2: {
                image: "https://40.media.tumblr.com/a73e79ce9844761d7cdc93d202b5cea1/tumblr_nwh4iomduD1ud7rr3o1_1280.jpg",
                heading4: "Wikipedia Search Engine",
                para: "Bootstrap and jQuery"
            },
        
            image3: {
                image: "https://68.media.tumblr.com/5abea52ea28e9ea20ab995ebd23299a1/tumblr_nwh4iomduD1ud7rr3o2_1280.jpg",
                heading4: "Stainless Steel Calculator",
                para: "SCSS and Vanilla Javascript"
            },
        
            image4: {
                image: "https://40.media.tumblr.com/7512ad23b7e68304a65182988b9c804a/tumblr_nwy76xfEXi1ud7rr3o1_1280.png",
                heading4: "Pomodoro Timer Zipline",
                para: "Bootstrap and Angular.js"
            },
        
            image5: {
                image: "https://68.media.tumblr.com/59b50efb8f7435fef9f87fd871b90d7a/tumblr_nxhm4k1jI81ud7rr3o1_1280.jpg",
                heading4: "Weather App",
                para: "Bootstrap and Vanilla Javascript"
            },
        
            image6: {
                image: "https://68.media.tumblr.com/030b4966650a0d1dac0bbcca6fe572e8/tumblr_nxhm7qz6Y91ud7rr3o1_1280.jpg",
                heading4: "Pacman Tic Tac Toe",
                para: "CSS and jQuery"
            }
        }
    ];

    render() {
        var result = this.arr.map((obj, index) => {

            return (
                <div key={index}>


                    <a name="portfolio"></a>
                    <section id="portfolio" className="bg-light-gray bounds">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading">{obj.sectionHeading}</h2>
                                    <h3 id="below-section" className="section-subheading text-muted">{obj.sectionPara}</h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-6 portfolio-item">
                                    <a href="https://codepen.io/ThiagoFerreir4/full/gpvJOK" target="_blank" className="portfolio-link" data-toggle="modal">
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fa fa-fire fa-3x"></i>
                                            </div>
                                        </div>
                                        <img src={obj.image1.image} className="img-responsive" alt="" />
                                    </a>
                                    <div className="portfolio-caption">
                                        <h4>{obj.image1.heading4}</h4>
                                        <p id="small-text" className="text-muted">{obj.image1.para}</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 portfolio-item portfolio2">
                                    <a href="https://codepen.io/ThiagoFerreir4/full/vOyXre" className="portfolio-link" target="_blank" data-toggle="modal">
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fa fa-fire fa-3x"></i>
                                            </div>
                                        </div>
                                        <img src={obj.image2.image} className="img-responsive" alt="" />
                                    </a>
                                    <div className="portfolio-caption">
                                        <h4>{obj.image2.heading4}</h4>
                                        <p id="small-text" className="text-muted">{obj.image2.para}</p>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 portfolio-item">
                                    <a href="https://codepen.io/ThiagoFerreir4/full/QbKWGO" target="_blank" className="portfolio-link" data-toggle="modal">
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fa fa-fire fa-3x"></i>
                                            </div>
                                        </div>
                                        <img src={obj.image3.image} className="img-responsive" alt="" />
                                    </a>
                                    <div className="portfolio-caption">
                                        <h4>{obj.image3.heading4}</h4>
                                        <p id="small-text" className="text-muted">{obj.image3.para}</p>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 portfolio-item">
                                    <a href="https://codepen.io/ThiagoFerreir4/full/vOaRQz/" target="_blank" className="portfolio-link" data-toggle="modal">
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fa fa-fire fa-3x"></i>
                                            </div>
                                        </div>
                                        <img src={obj.image4.image} className="img-responsive" alt="" />
                                    </a>
                                    <div className="portfolio-caption">
                                        <h4>{obj.image4.heading4}</h4>
                                        <p id="small-text" className="text-muted">{obj.image4.para}</p>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 portfolio-item">
                                    <a href="https://codepen.io/ThiagoFerreir4/full/oXwKJV" target="_blank" className="portfolio-link" data-toggle="modal">
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fa fa-fire fa-3x"></i>
                                            </div>
                                        </div>
                                        <img src={obj.image5.image} className="img-responsive" alt="" />
                                    </a>
                                    <div className="portfolio-caption">
                                        <h4>{obj.image5.heading4}</h4>
                                        <p id="small-text" className="text-muted">{obj.image5.para}</p>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6 portfolio-item">
                                    <a href="https://codepen.io/ThiagoFerreir4/full/EjwGoX/" target="_blank" className="portfolio-link" data-toggle="modal">
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fa fa-fire fa-3x"></i>
                                            </div>
                                        </div>
                                        <img src={obj.image6.image} className="img-responsive" alt="" />
                                    </a>
                                    <div className="portfolio-caption">
                                        <h4>{obj.image6.heading4}</h4>
                                        <p id="small-text" className="text-muted">{obj.image6.para}</p>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </section>
                </div>


            );
        });

        return (
            <div>
                <div> {result} </div>
            </div>
        )
    }

}
export default Portfolio;