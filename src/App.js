import React, { Component } from "react";
import "./App.css";
import Comp1 from "./Comp1";

class App extends Component {
  // state contains images to be displayed and keep track on pass the state of "score"
  state = {
    images: [

      {
        "id": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcl6NpHubUkHPjcXF3BG9nnuDfEnt-qzoAChKnHzuJW0fUU3Cm",
        "count": 0
      },
      {
        "id": 2,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_orp9UPUc9DnB-RFWOKuUYxAfSb2_TS_OJFSPkF0Ek7LUgnnM",
        "count": 0
      },

      {
        "id": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2BUY3QiI1jbI_d5emCY5JKqkbysjDce1ydjojd92MecKK4eW",
        "count": 0
      },
      {
        "id": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQr5d3rhx1m1BmWyceZ8PYIABfvnBaqe7mGlouiNe4rJa28fhf",
        "count": 0
      },
      {
        "id": 5,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLv6VXOOFBkTzH8_5Qry-CL142g-R2hxNcArYY5NiZRGqXPSM",
        "count": 0
      },
      {
        "id": 6,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsEsXbH4wO7WHURStNmu9WI-WUJ7KCloLBZfQho505nOoDqzT",
        "count": 0
      },
      {
        "id": 7,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiE5gyJQ-_7cD3ENWEcUiI02sM4dk3hjuWZc55rHqcfeQxWrFPw",
        "count": 0
      },
      {
        "id": 8,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl4mKu_YKy0I0MvxOm7DP5tIRN-rdB51myQ0cPbcdWA_PaCODjQ",
        "count": 0
      },

      {
        "id": 9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCJXttE4CZg0JklcM9XztxnjFJp2MKRw7w2Z3wAzy_XIAGfUt",
        "count": 0
      },
      {
        "id": 10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-78BHzq3SbaY4Xs0eF3b63vOlTAxC0lHryPipgSP9zPI38af",
        "count": 0
      },

      {
        "id": 11,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnouaDmrmctpzUJzOpi_mpwineqJMUuoMW8tzlvLi0pH0g03JsAw",
        "count": 0
      },

      {
        "id": 12,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepZ_hoHi7nX3Tjp8L4YAX4n9jch8h68R49iVky5jASNCwws6sIw",
        "count": 0
      }
    ],

    score: 0

  };

  onClick = (id) => {
    console.log("clicked");
    console.log(this.state.images.indexOf(id));


    // check which image was clicked and increment the count in the case use picks a different image
    if (this.state.images.indexOf(id) === -1) {
      this.setState({
        images: this.state.images.concat(id),
        count: this.state.count + 1,
      })

      console.log(this.state.images.count);

      // shuffle images
      this.setState({
        images: this.state.images.sort(function (a, b) { return 0.5 - Math.random() })
      })
    }

  }

  // onClick = event => {
  //   console.log(event.target);
  //   this.setState({
  //     images: this.state.images.sort(function (a, b) { return 0.5 - Math.random() })
  //   })
  // }

  // create a function to end the game, clean the memory to start over and show highest score
  render() {
    return (
      <div>
        {this.state.images.map(index => (
          // pass the onClick function down
          <Comp1 title={index} click={this.onClick} />
        ))}
      </div>
    );
  }
}

export default App;
