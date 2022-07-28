import React, { Component } from "react";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9-fixed.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

const glassesImg = [
  { imgURL: "./img/g1.jpg" },
  { imgURL: "./img/g2.jpg" },
  { imgURL: "./img/g3.jpg" },
  { imgURL: "./img/g4.jpg" },
  { imgURL: "./img/g5.jpg" },
  { imgURL: "./img/g6.jpg" },
  { imgURL: "./img/g7.jpg" },
  { imgURL: "./img/g8.jpg" },
  { imgURL: "./img/g9.jpg" },
];

export default class BaiTapGlasses extends Component {
  state = {
    glassesData: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1-fixed.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    animationState: "animate__animated animate__fadeInDown"
  };

  changeState = (newState, newAnimate) => {
    console.log(newState);
    this.setState({ glassesData: newState, animationState: newAnimate });
  };

  renderGlassesList = () => {
    return glassesImg.map((img, index) => {
      return (
        <div className="col-3 p-3" key={index}>
          <div className="d-flex align-items-center justify-content-center h-100">
            <img
              src={img.imgURL}
              alt="..."
              width={180}
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.changeState(
                  data[index],
                  "animate__animated animate__fadeInDown"
                );
              }}
            />
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="bg-dark bg-opacity-50">
          <h3 className="text-white pt-3">TRY GLASSES APP ONLINE</h3>
          <p className="pb-3 text-white">
            Please open browser larger than 1200px width
          </p>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-6" style={{ position: "relative" }}>
              <img src="./img/model.jpg" alt="" />
              <div>
                <img
                  className={this.state.animationState}
                  onAnimationEnd={() => {
                    this.setState({ animationState: "" });
                    console.log(this.state);
                  }}
                  src={this.state.glassesData["url"]}
                  alt="..."
                  style={{
                    position: "absolute",
                    top: "24%",
                    left: "29.5%",
                    background: "transparent",
                  }}
                  height="auto"
                  width={273}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className="text-center bg-warning bg-opacity-25"
                    style={{ width: 480 }}
                  >
                    <h4 className="pt-2">{this.state.glassesData["name"]}</h4>
                    <p>{this.state.glassesData["desc"]}</p>
                    <p className="mb-0 pb-3">
                      {this.state.glassesData["price"]}$
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src="./img/model.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="container bg-white mt-3">
          <div className="row">{this.renderGlassesList()}</div>
        </div>

        <div style={{ height: 100 }}></div>
        {console.log(this.state)}
      </div>
    );
  }
}
