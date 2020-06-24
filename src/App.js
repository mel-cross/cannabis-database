import React, { Component } from 'react';
import axios from 'axios';
import Welcome from './Welcome';
// import EffectSelect from './EffectSelect';
import StrainInfo from './StrainInfo';
import "./index.css";

class App extends Component {

  constructor() {
    super();
    // providing initial state
    this.state = {
      isLoading: false,
      // passing an empty array as it's value
      apiInfo: [],
      filteredApiInfo: [],
      effects: [],
      selectedEffect: undefined
      // renderedStrains: []
    };
  }

  saveResponse = (response) => {
    // create a new empty array
    let strains = [];
    let positiveEffects = [];
    // look over every item in the response object and push a unique object to the strains array
    for (let key in response.data) {
      strains.push({
        // copy over the details that aleady existed
        ...response.data[key],

        // add a new property called name and use the key as its value (which represents the name of the strain)
        name: key,
      });
      positiveEffects.push(response.data[key].effects.positive)
    }

    // flat removes the arrays inside of an array and makes it one array
    const flattenedEffects = positiveEffects.flat();
    // ...new Set gets rid of duplicates
    const cleanEffects = [...new Set(flattenedEffects)];

    // setting the API info to a new state
    this.setState({
      apiInfo: strains,
      isLoading: false,
      effects: cleanEffects,
      // renderedStrains: []
    });
  };


  handleInputChange = (event) => {
    const selection = event.target.value

    // filter apiInfo.effect.positive to only have selection 
    const allData = [...this.state.apiInfo];

    const filteredResult = allData.filter((data) => {
      return data.effects.positive.includes(selection)
    });

    // update our apiInfo
    this.setState({
      selectedEffect: selection,
      filteredApiInfo: filteredResult
    });
  }

  getData = () => {
    this.setState({
      isLoading: true,
    });
    
    // calling the API with axios
    axios({
      url: "https://strainapi.evanbusse.com/qAtccGm/strains/search/all",
      method: "GET",
      responseType: "json",
    }).then(this.saveResponse);

  };

  render() {
    return (
      <div className="app">
        <Welcome
          // getData represents props. Within the props of getData, give it the information from the API (all of the strains). (it knows what the APIinfo is from "this"). Now the user can click the button and it will render all the strains.
          getData={this.getData}
        />
        <main>
            {/* displays when page is loading */}
            <div className="preloader">
              {/* ternary operator - fancy if statement */}
              {this.state.isLoading ? <p>loading...</p> : ""}
            </div>

          <section className="effect-select">
            {/* user selected postive efect */}
            {this.state.effects.length > 0 ? (
              <select
                onChange={this.handleInputChange}
                value={this.state.selectedEffect}
              >
                <option disabled value="">Please Select An Option</option>
                {this.state.effects.map((effect) => {
                  return <option value={effect}>{effect}</option>;
                })}
              </select>
            ) : (
              ""
            )}
          </section>

          <section>
            <div className="card-container">
              {/* take all the info from the API and map over it, making every individual item called strain */}
              {this.state.filteredApiInfo.slice(0, 5).map((strain) => {
                return (
                  <StrainInfo
                    // pass the component StrainInfo information from the API by assigning that info to props. name(props)=strain.name
                    name={strain.name}
                    race={strain.race}
                    medicalEffects={strain.effects.medical}
                    negativeEffects={strain.effects.negative}
                    posEffects={strain.effects.positive}
                    flavorsArray={strain.flavors}
                  />
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;