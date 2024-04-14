import React, { useState } from "react";
import AnnoucementContext from "./announcementContext";

const AnnouncementState = (props) => {
  const host = "http://localhost:4000";

  const announcementInitial = [
    
  ];

  const [announcement, setAnnouncement] = useState(announcementInitial);


  //get all note
  const getAnnouncement = async() => {
    // API call
    const fetchAnnouncements = async () => {
        try {
  
          //using api call to get data
          const response = await fetch(`${host}/api/announcement/fetchallannouncements`, {
            method: "GET",
      
            headers: {
              "Content-Type": "application/json",
              "auth-token":
                localStorage.getItem('token'),
            }
      
            
          });
          const jsonData=await response.json();
          
         
          
          setAnnouncement(jsonData);
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };


  //Add a annoncement
  const addAnnouncement = async(title, description) => {
    // API call
     // eslint-disable-next-line
    const response = await fetch(`${host}/api/announcement/addannouncement`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({title,description}),
    });
    

    // console.log("adding a new annoucement");
    const newAnnoucement = {
      _id: "65e9f6093a1e4720ba33aa78",
      user: "65e9809e30d97fb4a432fb52",
      title: title,
      description: description,
      
      date: "2024-03-07T17:14:49.128Z",
      __v: 0,
    };
    setAnnouncement(announcement.concat(newAnnoucement));
  };



  //delete a announcement
  const deleteAnnouncement =async (id) => {
    //TODO:API call
     // eslint-disable-next-line
    const response = await fetch(`${host}/api/announcement/deleteannouncement/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      }
    });



    //console.log("deleteing the note with id" + id);
    const newAnnoucement = notes.filter((note) => {
      return note._id !== id;
    });
    setAnnouncement(newAnnoucement);
  };



  //edit a annoncement
  const editAnnouncement = async (id, title, description) => {
    //APi call

    const response = await fetch(`${host}/api/announcement/updateannouncement/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({title,description})
    });
     // eslint-disable-next-line
    const json = response.json();
    

    //logic to edit in client
    for (let index = 0; index < announcement.length; index++) {
      const element = announcement[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ announcement, setAnnouncement,getAnnouncement, addAnnouncement, deleteAnnouncement, editAnnouncement }}
    >
      {props.children}
    </NoteContext.Provider>
  );

  };

  // eslint-disable-next-line
  export default AnnoucementContext;
  

