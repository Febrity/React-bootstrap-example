import React from 'react'

export default class CardBlock extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const header = this.props.header;
        const list = this.props.list;

        return (

            <div className="card bg-light mb-3">
                <div className="card-header">
                    {header}
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {list.map((e) => <p className="list-group-item" style={{cursor: 'pointer'}}>{e}</p>)}
                    </ul>
                </div>
            </div>
        )
    }
}