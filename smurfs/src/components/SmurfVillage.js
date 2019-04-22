import React from 'react'
import {connect} from 'react-redux'
import {getsmurf} from '../actions'
import {addSmurf} from '../actions'
import Smurf from './Smurf.js'

class SmurfVillage extends React.Component {

    state = {
        newSmurf: {
            name: "",
            age: "",
            height: ""
        }
    }

    changeHandler = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.newSmurf);
        this.setState({
            newSmurf:{
                name: "",
                age: "",
                height: ""
            }
        })
    }

  componentDidMount() {
    this.props.getsmurf();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.smurfs.map((smurf, id) => (
            <Smurf key={id} smurf={smurf} />
          ))}
        </div>
        <div>
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    placeholder="Name"
                    onChange={this.changeHandler}
                    value={this.state.newSmurf.name}
                    name="name"
                />
                <input 
                    type="text"
                    placeholder="Age"
                    onChange={this.changeHandler}
                    value={this.state.newSmurf.age}
                    name="age"
                />
                <input 
                    type="text"
                    placeholder="Height"
                    onChange={this.changeHandler}
                    value={this.state.newSmurf.height}
                    name="height"
                />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getsmurf, addSmurf }
)(SmurfVillage);
