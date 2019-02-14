import React from 'react'
import Option from './Option';
import CardBlock from './CardBlock';
import BitTrain from './BitTrain'
import test from './firstCoach.png'
import test2 from './secondCoach.png'
import FooterElement from "./FooterElement";

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
                                    <BitTrain img={test2}></BitTrain>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <FooterElement description="Тренируйся как профи. Тренируйся с профи"></FooterElement>
                        <FooterElement description="Политика конфиденциальности (отдельная страница)
                            Публичная оферта (отдельная страница)"></FooterElement>
                        <FooterElement description="Наши контакты:
                            +8(800)XXX-XX-XX
                            hello@crosstrain.pro
                            Instagram//"></FooterElement>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Main;