import React, { Component } from  'react';
import Table from './Table'; // Add this line inside the src/App.js file
class App extends Component {
    state = {
     characters: [
            {
                firstName: 'Lary',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',
            },
            {
                firstName: 'Alan',
                lastName: 'Turing',
            },
        ],
    }
}
removeCharacter = (index) => {
    const {characters} = this.state;
    this.setState({
        characters: characters.filter((character, i) => {
            return i !== index;
        }),
    })
}
render() { 
    const { characters } = this.state;
    return (
        <div className="container">
            <Table characterData={characters}
            removeCharacter={this.removeCharacter} />
        </div>
    );
}

export default App;