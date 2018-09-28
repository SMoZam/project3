import React, { Component } from 'react';
import axios from "axios";

import api from "../api.js";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            homeData: []
        };
    }

    componentDidMount() {
        axios.get("http://dev.paulettepaulette.com/admin/wp-json/wp/v2/home_page")
            // api.get("/home-page")
            .then(response => {
                console.log("react response", response.data)
                this.setState({ homeData: response.data })
            })
    }


    render() {

        let { homeData } = this.state

        console.log(homeData)
        return (
            <div>
                {/* <a className="button is-black">Black</a> */}
                {homeData.map(oneEl => {
                    return (
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={oneEl.acf.slider_image_1.url} alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1> {oneEl.acf.slider_titre_1}</h1>
                                        <p>{oneEl.acf.slider_text_1}</p>
                                        <button> <a href={oneEl.acf.slider_button_1.url} > {oneEl.acf.slider_button_1.title}  </a> </button>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={oneEl.acf.slider_image_2.url} alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1> {oneEl.acf.slider_titre_2}</h1>
                                        <p>{oneEl.acf.slider_text_2}</p>
                                        <button> <a href={oneEl.acf.slider_button_2.url} > {oneEl.acf.slider_button_2.title}  </a> </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={oneEl.acf.slider_image_3.url} alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1> {oneEl.acf.slider_titre_3}</h1>
                                        <p>{oneEl.acf.slider_text_3}</p>
                                        <button> <a href={oneEl.acf.slider_button_3.url} > {oneEl.acf.slider_button_3.title}  </a> </button>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>

                    )
                })

                }
                {/*  */}


            </div>
        );
    }
}

export default HomePage;