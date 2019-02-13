import React from 'react'
import Option from './Option';
import CardBlock from './CardBlock';
import BitTrain from './BitTrain'
import test from './test.png'
import test2 from './test2.png'

class Main extends React.Component {

    render() {

        return (
            <React.Fragment>
                <div>
                    <div className="row">
                        <div className="col">
                            <CardBlock header="Тренер" list={["Тренер 1", "Тренер 2", "Тренер 3"]}></CardBlock>
                        </div>
                        <div className="col">
                            <CardBlock header="Программа"
                                       list={["Кроссфит", "Воркаут", "Стретчинг(растяжка)", "Бег", "Йога"]}></CardBlock>
                        </div>
                        <div className="col">
                            <CardBlock header="Направление" list={["Сила", "Скорость", "Выносливость"]}></CardBlock>
                        </div>
                        <div className="col">
                            <CardBlock header="Тип"
                                       list={["Набор массы", "Снижение массы", "Поддержание общего тонуса"]}></CardBlock>
                        </div>
                        <div className="col">
                            <CardBlock header="Тренировки"
                                       list={["Моя тренировка 1", "Моя тренировка 2", "Моя тренировка 3"]}></CardBlock>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="card bg-light">
                                <div className="card-header">Опции</div>
                                <div className="card-body">
                                    <Option header="Сложность"
                                            list={["Для начинающих", "Для среднего уровня подготовки", "Для продвинутых"]}></Option>
                                    <Option header="Оборудование"
                                            list={["с оборудованием", "без оборудования"]}></Option>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="card bg-light">
                                <div className="card-header">Фото/превью</div>
                                <div className="card-body">
                                    <BitTrain img={test}></BitTrain>
                                    <BitTrain img={test}></BitTrain>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top" alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Тренируйся как профи. Тренируйся с профи</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top" alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Политика конфиденциальности (отдельная страница)
                                        Публичная оферта (отдельная страница)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img className="card-img-top" alt="Какая то картинка"/>
                                <div className="card-body">
                                    <p className="card-text">Наши контакты:
                                        +8(800)XXX-XX-XX
                                        hello@crosstrain.pro
                                        Instagram//</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Main;