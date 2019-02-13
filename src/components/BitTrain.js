import React from 'react'

export default class BitTrain extends React.Component {

    constructor(props){
        super(props)
    }
    render() {

        const img = this.props.img;

        return(
            <div className="row mb-3">
                <div className="col-2">
                    <img src={img} class="img-thumbnail"></img>
                </div>
                <div className="col-10">
                    <ul className="list-group list-group-flush">
                        <p>Описание комплекса тренировок (курса).
                            Дополнительная информация/ сложность, требуемое оборудование
                        </p>
                    </ul>
                </div>
            </div>
        )
    }
}