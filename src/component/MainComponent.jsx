import { render } from "@testing-library/react";
import * as React from 'react';
import { Link, useHistory } from "react-router-dom";



export default class MainComponent extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">

                    <div class="card-body">
                        <h5 class="card-title">Stwórz projekt</h5>
                        <h6>Tutaj możesz stworzyć swój własny projekt.</h6>
                        <Link to="/createProject">
                            <button  class="btn btn-primary">               
                                    Stwórz projekt
                            </button>
                        </Link>

                    </div>

                </div>
                </div>

                <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">

                    <div class="card-body">
                        <h5 class="card-title">Sprawdź swoje projekty</h5>
                        <h6>Tutaj możesz sprawdzić projekty w których jesteś uczestnikiem.</h6>
                        <Link to="/yourProjects">
                            <button  class="btn btn-primary">               
                                Twoje projekty
                            </button>
                        </Link>
                    </div>

                </div>
                </div>

                <div class="col-xxl-4 col-xl-12">

                <div class="card info-card customers-card">

                    <div class="card-body">
                        <h5 class="card-title">Znajdź projekt</h5>
                        <h6>Tutaj możesz zobaczyć wszystkie projekty.</h6>
                        <Link to="/allProjects">
                            <button  class="btn btn-primary">               
                            Szukaj projektu
                            </button>
                        </Link>
                    </div>
                </div>

                </div>
            </div>
        );
    }
}