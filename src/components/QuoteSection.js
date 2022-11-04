import React from "react";

import '../cssdirectory/Container.css';


class QuoteSection extends React.Component{
    render() {
        return (
            <div class = "card">
                <div className="container">
                    <p>{this.props.quotelist.quote}</p>
                            <div align="right">
                               <strong> {this.props.quotelist.author_id.username} </strong>
                            </div>

                </div>
    </div>
        )
    }
}

export default QuoteSection