import { useEffect, useState } from "react";
import List from "./List";
import { v4 as uid } from "uuid";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage);
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      showAlter(true, "Enter valid value", "danger");
    } else if (text && isEdit) {
      setList(
        list.map((el) => (el.id === editId ? { ...el, title: text } : el))
      );
      showAlter(true, "Item changed successfully", "success");
      setText("");
      setEditId(null);
      setIsEdit(false);
    } else {
      const newItem = { id: uid(), title: text };
      setList([...list, newItem]);
      showAlter(true, "Item added to list successfully", "success");
      setText("");
    }
  };

  const showAlter = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlter(true, "Item removed!", "danger");
    setList(list.filter((el) => el.id !== id));
  };

  const editItem = (id) => {
    const item = list.find((el) => el.id === id);
    setText(item.title);
    setEditId(item.id);
    setIsEdit(true);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="w-full h-screen">
      <div className="main-container">
        <div className="flex w-full items-center justify-center">
          <div className="w-[700px] h-auto px-10 mx-auto py-5 flex justify-center items-center flex-col gap-10 bg-white rounded-lg drop-shadow-2xl">
            {alert.show && <Alert {...alert} removeAlert={showAlter} />}
            <div>
              <h1 className="text-2xl text-gray-600 font-extrabold capitalize tracking-wider">
                grocery bud
              </h1>
            </div>
            <div className="flex flex-col w-full gap-5 md:gap-0 md:flex-row justify-around">
              <input
                type="text"
                placeholder="e.g Eggs"
                className="pl-5 h-[40px] w-full bg-primary outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="bg-secondary px-5 md:px-14 mx-auto h-[40px] text-gray-100 font-extrabold"
                onClick={handleSubmit}
              >
                {isEdit ? "Edit" : "Submit"}
              </button>
            </div>
            <div className="flex flex-col gap-5 w-full items-center">
              {list.map((item) => (
                <List
                  item={item}
                  key={item.id}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
