import { useState } from "react";
import Choice from "../Choice";
import "./Form.css"

const Form = () => {
    const [choiceQuestion1, setChoice1] = useState();
    const [choiceQuestion2, setChoice2] = useState();
    const [choiceQuestion3, setChoice3] = useState();
    const respostas = [choiceQuestion1, choiceQuestion2, choiceQuestion3];

    return (
        <div className="questions">
            <div className="question">
                <h2>Qual sua comida favorita?</h2>
                <Choice aoClicar={() => {setChoice1('A')}} image="./images/pizza.png" label="Pizza" letter="A"/>
                <Choice aoClicar={() => {setChoice1('B')}} image="./images/sushi.png" label="Sushi" letter="B"/>
                <Choice aoClicar={() => {setChoice1('C')}} image="./images/hamburguer.png" label="Hambuguer" letter="C"/>
                <Choice aoClicar={() => {setChoice1('D')}} image="./images/salad.png" label="Salada" letter="D"/>
            </div>
            <div className="question">
                <h2>Qual sua atividade de lazer preferida?</h2>
                <Choice aoClicar={() => {setChoice2('A')}} image="./images/read.png" label="Ler" letter="A"/>
                <Choice aoClicar={() => {setChoice2('B')}} image="./images/sports.png" label="Praticar esportes" letter="B"/>
                <Choice aoClicar={() => {setChoice2('C')}} image="./images/videogame.png" label="Jogar videogames" letter="C"/>
                <Choice aoClicar={() => {setChoice2('D')}} image="./images/meditation.png" label="Meditar" letter="D"/>
            </div>
            <div className="question">
                <h2>Escolha um superpoder: </h2>
                <Choice aoClicar={() => {setChoice3('A')}} image="./images/flying.png" label="Voar" letter="A"/>
                <Choice aoClicar={() => {setChoice3('B')}} image="./images/invisible.png" label="Invisibilidade" letter="B"/>
                <Choice aoClicar={() => {setChoice3('C')}} image="./images/strong.png" label="Super força" letter="C"/>
                <Choice aoClicar={() => {setChoice3('D')}} image="./images/brain.png" label="Ler mentes" letter="D"/>
            </div>
            <button>Quero ver meu stand!</button>
        </div>
    );
}

export default Form;