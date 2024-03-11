import "./Choice.css";

const Choice = ({ atClick, image, label }) => {
    const onClick = (event) => {
        event.preventDefault();
        atClick();
    };

    return (
        <div className="choice">
            <input alt="Representação do item na label" draggable="false" src={image} type="image" onClick={onClick}></input>
            <label>{label}</label>
        </div>
    );
};

export default Choice;