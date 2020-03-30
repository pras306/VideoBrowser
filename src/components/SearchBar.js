import React from 'react'


class SearchBar extends React.Component{
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onTermSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    render(){        
        return(
            <form className=" ui form" onSubmit={this.onTermSubmit}>
                <div className="field">
                    <input type='text' 
                    placeholder="Search..."
                    onChange={this.onInputChange} />
                </div>
            </form>
        )
    }
}


export default SearchBar;