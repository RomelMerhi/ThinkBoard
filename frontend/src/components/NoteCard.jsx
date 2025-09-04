import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";
import { formatDate } from "../lib/utils";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";


const NoteCard = ({ note, setNotes }) => {

const navigate = useNavigate();

  const handleEdit = (e, id) => {
    e.preventDefault();
    navigate(`/${id}`);
  }
const handleDelete = async (e, id) => {
  e.preventDefault();

if(!window.confirm("Are you sure you want to delete this note?")) 
  return;

try{
  await axiosInstance.delete(`/notes/${id}`);
  setNotes((prev)=> prev.filter((note) => note._id !== id)); //prev is "notes" react puts variable in first argument inside callback
  toast.success("Note deleted successfully!");
}
catch(error){
  toast.error("failed to delete note");
  console.log(error)
}

}

  return (
    <Link
      to={`/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h2 className="card-title text-base-content">{note.title}</h2>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">{formatDate(note.createdAt)}</span>
       <div className="flex items-center gap-1">
        <button className="btn btn-ghost btn-xs" onClick={(e) => handleEdit(e, note._id)}>
        <PenSquareIcon className="size-4" />
        </button>
        <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id)}>
            <Trash2Icon className="size-4" />
        </button>
        </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
