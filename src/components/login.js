import React, { Component } from "react";
import { Link } from "react-router-dom";

var data = [
    {
        identifyno:"",
        identifytype:"",
        name:"",
        age:"",
        dateofbirth:"",
        married:""
    }
]
export default class Login extends Component {
    storeIdentify = event => {
        data[0].identifyno = event.target.value;
    }
    storeType = event => {
        data[0].identifytype = event.target.value;
    }
    storeName = event => {
        data[0].name = event.target.value;
    }
    storeAge = event => {
        data[0].age = event.target.value;
    }
    storeDob = event => {
        data[0].dateofbirth = event.target.value;
    }
    storeMarried = event => {
        data[0].married = event.target.value;
    }
    render() {
        return (
            <form>

                <h3>Register</h3>

                <div className="form-group">
                    <label>Identify No</label>
                    <input type="text" className="form-control" placeholder="" onChange={this.storeIdentify} />
                </div>
<br/>
                <div className="form-group">
                <label>Identify Type</label><br/>
                <select onChange={this.genderhandler} defaultValue="Select Gender" onChange={this.storeType}>
                        <option defaultValue>Select Type</option>
                        <option value="KTP">KTP</option>
                        <option value="Passport">Passport</option>
                    </select>
                </div>
<br/>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="" onChange={this.storeName} />
                </div>
<br/>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Enter email"  onChange={this.storeAge}/>
                </div>
<br/>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" placeholder="Enter email" onChange={this.storeDob} />
                </div>
<br/>

                <div className="form-group">
                <label>Married</label><br/>
                <select onChange={this.genderhandler} defaultValue="Select Gender" onChange={this.storeMarried}>
                        <option defaultValue>Select Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
<br/>
                <button>
                <Link to={{
                    pathname:"sign-up",
                    data: data
                }}>Submit</Link>
                </button>
                {/* <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button> */}
               
            </form>
        );
    }
}