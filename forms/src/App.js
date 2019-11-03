import React, {Component} from 'react';
/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component{
  constructor(){
    super()
    this.state = {
      firistName: "", 
      lastName:"", 
      age: "", 
      gender:"", 
      destination:"",
      isVegan: false,
      isKosher: false, 
      isLactoseFree: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  
  render(){
    return(
      <main>
        <form>
          <input 
            name="firstName"
            value = {this.state.firistName}
            placeholder="First Name"
            onChange = {this.handleChange}
            />
            <br />
            
          <input 
            name = "lastName"
            value = {this.state.lastName}
            placeholder = "Last Name"
            onChange = {this.handleChange}
          />
          <br />
          
          <input 
            name="age"
            value={this.state.age}
            placeholder = "Age"
            onChange = {this.handleChange}
            />
            <br/>
            
          <label>
            <input 
              type = "radio"
              name="gender"
              value = "female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
              /> Female
              <br />
          </label>
          
          <label>
            <input
              type = "radio"
              name = "gender"
              value = "male"
              checked = {this.state.gender === "male"}
              onChange = {this.handleChange}
              />
              <br/>
          </label>
          
          <select name = "destination"
                  value={this.state.destination}
                  onChange={this.handleChange}>
            <option value="">--Please choose a destination-- </option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="kyrgyzstan">Kyrgyzstan</option>
            <option value = "north pole">North Pole</option>
            <option value = "south pole">South Pole</option>
          </select>
          <br/>
          
          <label>
            <input type="checkbox"
                    name="isVegan"
                    checked = {this.state.isVegan}
                    onChange = {this.handleChange}
                    /> Vegan?
          </label>
          <br/>
          
          <label>
            <input name="isKosher"
                   type="checkbox"
                   onChange={this.handleChange}
                   checked={this.state.isKosher} /> Kosher?
          </label>
          <br/>
          <label>
            <input type ="checkbox"
                   name="isLactoseFree"
                   onChange = {this.handleChange}
                   checked={this.state.isLactoseFree} /> Lactose Free?
          </label>
          <br/>
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information</h2>
        <p> Your name: {this.state.firistName} {this.state.lastName}</p>
        <p> Your age: {this.state.age}</p>
        <p> Your gender: {this.state.gender}</p>
        <p> Your destination: {this.state.gender}</p>
        <p> Your dietary restrictions: </p>
        
        <p> Kosher: {this.state.isKosher ? "yes" : "no"}</p>
        <p> Vegan: {this.state.isVegan ? "yes" : "no" }</p>
        <p> Lactose Free: {this.state.isLactoseFree ? "yes" :"no"} </p>
        </main>
    )
  }
  
}
export default App;
