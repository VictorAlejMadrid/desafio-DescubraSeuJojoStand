import "./Choice.css";

const Choice = (props) => {
    const onClick = (event) => {
        event.preventDefault();
        props.aoClicar();
    };

    return (
        <div className="choice">
            <input draggable="false" src={props.image} type="image" onClick={onClick}></input>
            <label>{props.label}</label>
        </div>
    );
};

export default Choice;