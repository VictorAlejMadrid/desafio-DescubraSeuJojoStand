import { useState } from "react";
import Choice from "../Choice";
import "./Form.css"


const Form = ({ sendToParent, openModal }) => {
    const [choices, setChoice] = useState(
        {
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: ""
        }
    );
    const answers = [choices.question1, choices.question2, choices.question3, choices.question4, choices.question5];

    const onClick = () => {
        let finalConclusion = {
            title: "",
            description: "",
            imagePath: ""
        };

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

        if (hasUndefined) {
            finalConclusion.title = 'Ainda não foi definido!';
            finalConclusion.description = "Feche a aba e escolha uma opção em todas as perguntas!";
            finalConclusion.imagePath = "./images/stands/decepcao.png";
        } else {
            if (a > b && a > c && a > d) {
                finalConclusion.title = "Star Platinum";
                finalConclusion.description = "Velocidade e precisão incríveis, com a habilidade de parar o tempo.";
                finalConclusion.imagePath = "./images/stands/Star-Platinum.png";
            } else if (b > a && b > c && b > d) {
                finalConclusion.title = "Silver Chariot";
                finalConclusion.description = "Alta agilidade e um espadachim mestre, com a habilidade de criar duplicatas de si mesmo.";
                finalConclusion.imagePath = "./images/stands/Silver-Chariot.png";
            } else if (c > a && c > b && c > d) {
                finalConclusion.title = "The world";
                finalConclusion.description = "Similar ao Star Platinum em força e velocidade, com a capacidade adicional de parar o tempo por mais tempo.";
                finalConclusion.imagePath = "./images/stands/The World.png";
            } else if (d > a && d > b && d > c) {
                finalConclusion.title = "Echoes";
                finalConclusion.description = "Pode produzir sons que afetam fisicamente o mundo ao seu redor, com diferentes atos que evoluem e ganham novas habilidades.";
                finalConclusion.imagePath = "./images/stands/Echoes.png";
            } else {
                finalConclusion.title = "Crazy Diamond";
                finalConclusion.description = "Possui a habilidade de reparar ou restaurar objetos e seres vivos ao seu estado original.";
                finalConclusion.imagePath = "./images/stands/CrazyDiamond.png";
            }
        }

        openModal(true);
        sendToParent(finalConclusion);
        setChoice({
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: ""
        });
    }

    // Infortunately, I couldn't put the questions list in a separate file.
    // The function used in the "atClick" prop is in this file and I couldn't find
    // a way to use it in a separate file without many bugs appearing.
    const questions = [
        {
            title: "1. Qual sua comida favorita?",
            inputs: [
                {
                    imagePath: "./images/question-images/pizza.png",
                    label: "Pizza",
                    atClick: () => { setChoice({
                        ...choices,
                        question1: 'A'
                    })}
                },
                {
                    imagePath: "./images/question-images/sushi.png",
                    label: "Sushi",
                    atClick: () => {setChoice({
                        ...choices,
                        question1: 'B'
                    })}
                },
                {
                    imagePath: "./images/question-images/hamburguer.png",
                    label: "Hamburguer",
                    atClick: () => {setChoice({
                        ...choices,
                        question1: 'C'
                    })}
                },
                {
                    imagePath: "./images/question-images/salad.png",
                    label: "Salada",
                    atClick: () => {setChoice({
                        ...choices,
                        question1: 'D'
                    })}
                }
            ]
        },
        {
            title: "2. Qual sua atividade de lazer preferida?",
            inputs: [
                {
                    imagePath: "./images/question-images/read.png",
                    label: "Ler",
                    atClick: () => { setChoice({
                        ...choices,
                        question2: 'A'
                    })}
                },
                {
                    imagePath: "./images/question-images/sports.png",
                    label: "Praticar esportes",
                    atClick: () => { setChoice({
                        ...choices,
                        question2: 'B'
                    })}
                },
                {
                    imagePath: "./images/question-images/videogame.png",
                    label: "Jogar videogames",
                    atClick: () => { setChoice({
                        ...choices,
                        question2: 'C'
                    })}
                },
                {
                    imagePath: "./images/question-images/meditation.png",
                    label: "Meditar",
                    atClick: () => { setChoice({
                        ...choices,
                        question2: 'D'
                    })}
                }
            ]
        },
        {
            title: "3. Escolha um superpoder: ",
            inputs: [
                {
                    imagePath: "./images/question-images/flying.png",
                    label: "Voar",
                    atClick: () => { setChoice({
                        ...choices,
                        question3: 'A'
                    })}
                },
                {
                    imagePath: "./images/question-images/invisible.png",
                    label: "Invisibilidade",
                    atClick: () => { setChoice({
                        ...choices,
                        question3: 'B'
                    })}
                },
                {
                    imagePath: "./images/question-images/strong.png",
                    label: "Super força",
                    atClick: () => { setChoice({
                        ...choices,
                        question3: 'C'
                    })}
                },
                {
                    imagePath: "./images/question-images/brain.png",
                    label: "Ler mentes",
                    atClick: () => { setChoice({
                        ...choices,
                        question3: 'D'
                    })}
                }
            ]
        },
        {
            title: "4. Qual seu animal favorito?",
            inputs: [
                {
                    imagePath: "./images/question-images/dog.png",
                    label: "Cachorro",
                    atClick: () => { setChoice({
                        ...choices,
                        question4: 'A'
                    })}
                },
                {
                    imagePath: "./images/question-images/cat.png",
                    label: "Gato",
                    atClick: () => { setChoice({
                        ...choices,
                        question4: 'B'
                    })}
                },
                {
                    imagePath: "./images/question-images/aguia.png",
                    label: "Águia",
                    atClick: () => { setChoice({
                        ...choices,
                        question4: 'C'
                    })}
                },
                {
                    imagePath: "./images/question-images/sapo.png",
                    label: "Sapo",
                    atClick: () => { setChoice({
                        ...choices,
                        question4: 'D'
                    })}
                }
            ]
        },
        { 
            title: "5. Escolha um elemento: ",
            inputs: [
                {
                    imagePath: "./images/question-images/fire.png",
                    label: "Fogo",
                    atClick: () => { setChoice({
                        ...choices,
                        question5: 'A'
                    })}
                },
                {
                    imagePath: "./images/question-images/water.png",
                    label: "Água",
                    atClick: () => { setChoice({
                        ...choices,
                        question5: 'B'
                    })}
                },
                {
                    imagePath: "./images/question-images/air.png",
                    label: "Ar",
                    atClick: () => { setChoice({
                        ...choices,
                        question5: 'C'
                    })}
                },
                {
                    imagePath: "./images/question-images/dirt.png",
                    label: "Terra",
                    atClick: () => { setChoice({
                        ...choices,
                        question5: 'D'
                    })}
                }
            ]
        }
    ]
    
    return (
        <div className="questions">
            {questions.map((item) => {
                return (
                <div className="question">
                    <h2>{item.title}</h2>
                    {item.inputs.map((question) => {
                        return <Choice atClick={question.atClick} image={question.imagePath} label={question.label} />
                    })}
                </div>
                )
            })}
            <button onClick={onClick}>Quero ver meu stand!</button>
        </div>
    );
}

export default Form;