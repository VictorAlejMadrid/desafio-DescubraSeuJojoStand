import "./Modal.css";

function Modal({ finalAnswer, close }) {
    function clickHandler() {
        close(false);
    }

    return (
        <div className="modal">
            <div className="card">
                <h2>Seu stand é: <strong>{finalAnswer.title}!</strong></h2>
                <img src={finalAnswer.imagePath} alt="Imagem do stand final." />
                <p>{finalAnswer.description}</p>
                <button title="Fechar" onClick={clickHandler}> X </button>
            </div>
        </div>
    );
}

export default Modal;