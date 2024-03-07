import { useState } from "react";
import Choice from "../Choice";
import "./Form.css"

const Form = (props) => {
    const [choiceQuestion1, setChoice1] = useState();
    const [choiceQuestion2, setChoice2] = useState();
    const [choiceQuestion3, setChoice3] = useState();
    const [choiceQuestion4, setChoice4] = useState();
    const [choiceQuestion5, setChoice5] = useState();
    const answers = [choiceQuestion1, choiceQuestion2, choiceQuestion3, choiceQuestion4, choiceQuestion5];

    const onClick = () => {
        let finalConclusion = [];
        let hasUndefined = false;
        let a = 0;
        let b = 0;
        let c = 0;
        let d = 0;

        answers.every((letter) => {
            switch (letter) {
                case 'A':
                    a += 1;
                    return true;
                case 'B':
                    b += 1;
                    return true;
                case 'C':
                    c += 1;
                    return true;
                case 'D':
                    d += 1;
                    return true;
                default:
                    hasUndefined = true;
                    return false;
            }
        });

        if (a > b && a > c && a > d) {
            finalConclusion[0] = "Star Platinum";
            finalConclusion[1] = "Velocidade e precisão incríveis, com a habilidade de parar o tempo.";
            finalConclusion[2] = "./images/stands/Star-Platinum.png";
        } else if (b > a && b > c && b > d) {
            finalConclusion[0] = "Silver Chariot";
            finalConclusion[1] = "Alta agilidade e um espadachim mestre, com a habilidade de criar duplicatas de si mesmo.";
            finalConclusion[2] = "./images/stands/Silver-Chariot.png"
        } else if (c > a && c > b && c > d) {
            finalConclusion[0] = "The world";
            finalConclusion[1] = "Similar ao Star Platinum em força e velocidade, com a capacidade adicional de parar o tempo por mais tempo.";
            finalConclusion[2] = "./images/stands/The World.png"
        } else if (d > a && d > b && d > c) {
            finalConclusion[0] = "Echoes";
            finalConclusion[1] = "Pode produzir sons que afetam fisicamente o mundo ao seu redor, com diferentes atos que evoluem e ganham novas habilidades.";
            finalConclusion[2] = "./images/stands/Echoes.png";
        } else {
            if (hasUndefined) {
                finalConclusion[0] = 'Ainda não foi definido!';
                finalConclusion[1] = "Feche a aba e escolha uma opção em todas as perguntas!";
                finalConclusion[2] = "./images/stands/decepcao.png"
            } else {
                finalConclusion[0] = "Crazy Diamond";
                finalConclusion[1] = "Possui a habilidade de reparar ou restaurar objetos e seres vivos ao seu estado original.";
                finalConclusion[2] = "./images/stands/CrazyDiamond.png";
            }
        }

        props.openModal(true);
        props.sendToParent(finalConclusion);
        setChoice1();
        setChoice2();
        setChoice3();
        setChoice4();
        setChoice5();
    }

    return (
        <div className="questions">
            <div className="question">
                <h2>1. Qual sua comida favorita?</h2>
                <Choice aoClicar={() => { setChoice1('A') }} image="./images/question-images/pizza.png" label="Pizza" />
                <Choice aoClicar={() => { setChoice1('B') }} image="./images/question-images/sushi.png" label="Sushi" />
                <Choice aoClicar={() => { setChoice1('C') }} image="./images/question-images/hamburguer.png" label="Hambuguer" />
                <Choice aoClicar={() => { setChoice1('D') }} image="./images/question-images/salad.png" label="Salada" />
            </div>
            <div className="question">
                <h2>2. Qual sua atividade de lazer preferida?</h2>
                <Choice aoClicar={() => { setChoice2('A') }} image="./images/question-images/read.png" label="Ler" />
                <Choice aoClicar={() => { setChoice2('B') }} image="./images/question-images/sports.png" label="Praticar esportes" />
                <Choice aoClicar={() => { setChoice2('C') }} image="./images/question-images/videogame.png" label="Jogar videogames" />
                <Choice aoClicar={() => { setChoice2('D') }} image="./images/question-images/meditation.png" label="Meditar" />
            </div>
            <div className="question">
                <h2>3. Escolha um superpoder: </h2>
                <Choice aoClicar={() => { setChoice3('A') }} image="./images/question-images/flying.png" label="Voar" />
                <Choice aoClicar={() => { setChoice3('B') }} image="./images/question-images/invisible.png" label="Invisibilidade" />
                <Choice aoClicar={() => { setChoice3('C') }} image="./images/question-images/strong.png" label="Super força" />
                <Choice aoClicar={() => { setChoice3('D') }} image="./images/question-images/brain.png" label="Ler mentes" />
            </div>
            <div className="question">
                <h2>4. Qual seu animal favorito?</h2>
                <Choice aoClicar={() => { setChoice4('A') }} image="./images/question-images/dog.png" label="Cachorro" />
                <Choice aoClicar={() => { setChoice4('B') }} image="./images/question-images/cat.png" label="Gato" />
                <Choice aoClicar={() => { setChoice4('C') }} image="./images/question-images/aguia.png" label="Gavião" />
                <Choice aoClicar={() => { setChoice4('D') }} image="./images/question-images/sapo.png" label="Sapo" />
            </div>
            <div className="question">
                <h2>5. Escolha um elemento:</h2>
                <Choice aoClicar={() => { setChoice5('A') }} image="./images/question-images/fire.png" label="Fogo" />
                <Choice aoClicar={() => { setChoice5('B') }} image="./images/question-images/water.png" label="Água" />
                <Choice aoClicar={() => { setChoice5('C') }} image="./images/question-images/air.png" label="Ar" />
                <Choice aoClicar={() => { setChoice5('D') }} image="./images/question-images/dirt.png" label="Terra" />
            </div>
            <button onClick={onClick}>Quero ver meu stand!</button>
        </div>
    );
}

export default Form;