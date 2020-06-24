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

        {/* ternary operator - fancy if statement */}
        {this.state.isLoading ? (<p>Data is Loading</p>) : ''}

        {/* <EffectSelect /> */}
        {this.state.effects.length > 0 ? (
          <select 
          onChange={this.handleInputChange}
          value={this.state.selectedEffect}>
            <option value="">Please Select An Option</option>
            {this.state.effects.map((effect) => {
              return (
                <option value={effect}>{effect}</option>
                )})}
          </select>) : ''}

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

        </div>
    );
  }
}

export default App;

// update API to return all strains but only render to the user a max of ##
// Allow user to see data based on type - Sativa, Indica, or Hybrid
// store the user selection in state and update the API call based on the user provided type
// Allow user to see data based on their current symptom
// store the user selection in state. Filter the strains based on the user selection and store the filtered results in state (filteredStrains)
// render the filteredStrains array to the user
