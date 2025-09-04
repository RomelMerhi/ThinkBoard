import React, { use } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";  
import NotesNotFound from "../components/noNotesFound";

const HomePage = () => {
  const [israteLimited, setisRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axiosInstance.get("/notes");
        setNotes(response.data);
        setLoading(false);
        setisRateLimited(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setLoading(false);
        if(error.response?.status===429) {
          setisRateLimited(true);
        }
        else{
          toast.error("failed to load notes");
        }
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {israteLimited && <RateLimitedUI />}

<div className="max-w-7xl mx-auto p-4 mt-6">
  {loading ? (
    <div className="text-center text-primary py-10">Loading notes...</div>
  ) 
  
  : israteLimited ? null : notes.length === 0 ? (
    <NotesNotFound/>
  ) 
  
  : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map(note => (
        <NoteCard key={note._id} note={note} setNotes={setNotes} />
      ))}
    </div>
  )}
</div>

    </div>
  );
};

export default HomePage;
