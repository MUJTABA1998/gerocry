import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const List = ({ item, removeItem, editItem }) => {
  const { id, title } = item;

  return (
    <div
      className="flex justify-between items-center px-5 py-2  bg-primary w-full rounded-sm "
      key={id}
    >
      <div>
        <h2>{title}</h2>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <button className="text-xl text-green-500" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button className="text-xl text-red-500" onClick={() => removeItem(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default List;
