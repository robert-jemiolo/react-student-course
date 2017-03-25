import React, { Component } from 'react';

import {connect} from 'react-redux';

class UsersList extends Component {
    constructor(){
        super();
        console.log('Construct!');
    }

    renderList(){
        return this.props.list.users.map( (element, index) => <li key={index}>{element}</li> );
    }

    render(){
        console.log( this.props.listaKolorow );
        return <div>
            <ul>
                {this.renderList()}
            </ul>
        </div>
    }
}

export default connect(
    store => ({
        listaKolorow : store.colorsList
    })
)(UsersList);

