import React from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
//import "./styles/BestBooks.css";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookarr: [],
    };
  }

  
  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/getbook`)
      .then((result) => {
        this.setState({
          bookarr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div  id="CarouselDiv">
        {this.state.books.length ? (
          <div id="secondaryDiv" style={{ width: "400px" }}>
            <Carousel fade>
              {this.state.bookarr.map((item) => {
                return(
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://play-lh.googleusercontent.com/DmpYQrVcldrDuz5uyATqGbNvTALsJ1Bg3fpXM0p-VsRNM19osEB9-_ByvdjSbTvZQg=w450-h300-rw"
                    alt="Slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.descriptione}</p>
                    <p>{item.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                )
              })}
            </Carousel>
          </div>
        ) : (
          <h3>No Books F :(</h3>
        )}
      </div>
    );
  }
}

export default BestBooks;