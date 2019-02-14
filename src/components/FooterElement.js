import React from 'react';

export default class FooterElement extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        const description = this.props.description;

        return (
            <div className="col">
                <div className="card">
                    <img className="card-img-top" alt="Какая то картинка"/>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        )
    }

}