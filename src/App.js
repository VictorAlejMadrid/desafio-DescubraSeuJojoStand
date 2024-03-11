import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Start from "./components/Start";
import Modal from "./components/Modal";

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [answer, setAnswer] = useState();

  function receiveFromChild(answer) {
    setAnswer(answer);
  }

  return (
    <div className="app">
      <Header />
      <Start />
      <Form sendToParent={receiveFromChild} openModal={setModalVisibility} />
      {isModalVisible ? (
        <Modal finalAnswer={answer} close={() => setModalVisibility(false)} />
      ) : null}
    </div>
  );
}

export default App;