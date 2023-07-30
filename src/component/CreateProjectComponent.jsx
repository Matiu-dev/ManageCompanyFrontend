import React, { Component } from 'react';
import { request, setAuthToken } from '../services/axioshelper';

class CreateProjectComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
          title: "",
          description: "",
          tags: ""
        }
    }

    onChangeHandler = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      console.log(name + " " + value);
      this.setState({[name]: value});
    }

    onSubmitCreateProject = (e) => {

      e.preventDefault();
      request("POST", 
        "/createProject",
        { title: this.state.title, description: this.state.description, tags: this.state.tags }
        ).then((response) => {
            
        }).catch((error) => {
            
      });
    }

    render() {
        return (
            <div>
                <section class="section">
    <div class="row">
      <div class="col">

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">General Form Elements</h5>


            <form onSubmit={this.onSubmitCreateProject}>

              <div class="row mb-3">
                <label for="projectTitle" class="col-sm-2 col-form-label">Project title</label>
                <div class="col-sm-10">
                  <input type="text" field="*{title}" name="title"  class="form-control" onChange={this.onChangeHandler}></input>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <textarea field="*{description}" name="description" class="form-control" onChange={this.onChangeHandler}></textarea>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputPassword" class="col-sm-2 col-form-label">Tags</label>
                <div class="col-sm-10">
                  <textarea field="*{tags}" name="tags" class="form-control" onChange={this.onChangeHandler}></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">Stwórz projekt</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </section>
            </div>
        );
    }
}

export default CreateProjectComponent;