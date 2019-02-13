import React from 'react'

export default class Option extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const header = this.props.header;
        const list = this.props.list;
        return (
            <div className="row mb-3">
                <div className="col-2">
                    <h5>{header}</h5>
                </div>
                <div className="col-10">
                    <ul className="list-group list-group-flush">
                        {list.map((e) => <li className="list-group-item" style={{cursor: 'pointer'}}>{e}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
