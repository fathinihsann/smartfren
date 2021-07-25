import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        const {data} = this.props.location;
        return (
            <form>
                <h3>List Data</h3>
                <div className="form-group">
                    <label>Identify No : {data[0].identifyno}</label><br/>
                    <label>Identify Type : {data[0].identifytype}</label><br/>
                    <label>Name : {data[0].name}</label><br/>
                    <label>Age : {data[0].age}</label><br/>
                    <label>Date of Birth : {data[0].dateofbirth}</label><br/>
                    <label>Married : {data[0].married}</label>
                </div>
            </form>
        );
    }
}