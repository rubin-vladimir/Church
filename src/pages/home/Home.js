import React, {Component} from "react";
import CarouselBox from "../../components/CarouselBox";
import HomeEvent from "./homeEvent/HomeEvent";
import HomeContent from "./homeContent/HomeContent";
import Blog from "./homeBlog/Blog";
import HomeGallery from "./homeGallery/HomeGallery";
import Footer from "./homeFooter/Footer";



export default class Home extends Component {
    render() {
        return(
            <div>
                <CarouselBox />
                <HomeEvent />
                <HomeContent />
                <Blog />
                <HomeGallery />
                <Footer />
            </div>
        )
    }
}