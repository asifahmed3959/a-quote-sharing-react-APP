import React from "react";
import QuoteSection from "./QuoteSection";


class QuoteList extends React.Component{
    render(){
        return (
        <ul>
            {this.props.quotelist.map(quotelist => (
            <QuoteSection
                key={quotelist._id}
                quotelist={quotelist}
            />
        ))}
        </ul>
        )
    }
}

export default QuoteList