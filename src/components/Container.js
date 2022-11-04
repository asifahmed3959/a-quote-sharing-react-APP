import React from "react";

import Header from "./Header";
import QuoteList from "./QuoteList";

import { Route, Routes } from "react-router-dom"

import '../cssdirectory/Container.css';


class Container extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:4000/api/quotes")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        quotelist: result

                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const {error, isLoaded, quotelist} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div class="row">
                        <div className="column">
                            <QuoteList quotelist={quotelist.slice(0, this.state.quotelist.length / 4)}/>
                        </div>
                        <div className="column">
                            <QuoteList
                                quotelist={this.state.quotelist.slice(this.state.quotelist.length / 4, this.state.quotelist.length / 2)}/>
                        </div>
                        <div className="column">
                            <QuoteList
                                quotelist={this.state.quotelist.slice(this.state.quotelist.length / 2, 3 * this.state.quotelist.length / 4)}/>
                        </div>
                        <div className="column">
                            <QuoteList
                                quotelist={this.state.quotelist.slice(3 * this.state.quotelist.length / 4, this.state.quotelist.length)}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Container