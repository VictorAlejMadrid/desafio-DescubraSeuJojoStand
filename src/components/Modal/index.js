import "./Modal.css";

function Modal(props) {
    function clickHandler() {
        props.close(false);
    }

    return (
        <div className="modal">
            <div className="card">
                <h2>Seu stand é: <strong>{props.finalAnswer[0]}!</strong></h2>
                <img src={props.finalAnswer[2]} />
                <p>{props.finalAnswer[1]}</p>
                <button title="Fechar" onClick={clickHandler}> X </button>
            </div>
        </div>
    );
}

export default Modal;