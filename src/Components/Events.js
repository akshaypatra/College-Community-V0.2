import React from "react";
import { useEffect, useState } from "react";

export default function Events() {

     //function to generate random string
  const randomColorGenerator = (array) => {
    // Check if the array is empty
    if (array.length === 0) {
      return null; // or any other value to indicate no elements in the array
    }

    let previousIndex = -1;
    let currentIndex;

    do {
      // Generate a random index within the range of the array length
      currentIndex = Math.floor(Math.random() * array.length);
    } while (currentIndex === previousIndex); // Repeat until a different index is generated

    // Update the previous index
    previousIndex = currentIndex;

    // Return the element at the randomly generated index
    return array[currentIndex];
  };


  const colorArray = [
    
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];

  //fetching annoucements
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
    //     const response=await fetch('/Events.json')
    //     if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    //     const jsonData = await response.json();
    const jsonData=[
      {
        "id": "1",
        "title": "Dance Competition",
        "description": "Participate in the persona fest and show your dance skills",
        "date": "2024-03-01",
        "link":"www.google.com"
      },
      {
        "id": "2",
        "title": "Coding Workshop",
        "description": "Join our coding workshop and enhance your programming skills",
        "date": "2024-03-05",
        "link":"www.google.com"
      },
      {
        "id": "3",
        "title": "Career Counseling Session",
        "description": "Explore career options with our expert counselors. Don't miss this opportunity!",
        "date": "2024-03-10",
        "link":"www.google.com"
      },
      {
        "id": "4",
        "title": "Art Exhibition",
        "description": "Visit the art exhibition featuring works from talented students. A celebration of creativity!",
        "date": "2024-03-15",
        "link":"www.google.com"
      },
      {
        "id": "5",
        "title": "Sports Day",
        "description": "Get ready for a day filled with exciting sports activities. Show your team spirit!",
        "date": "2024-03-20",
        "link":"www.google.com"
      },
      {
        "id": "6",
        "title": "Guest Lecture on Science and Technology",
        "description": "Renowned scientists will share their insights. A must-attend for science enthusiasts!",
        "date": "2024-03-25",
        "link":"www.google.com"
      },
      {
        "id": "7",
        "title": "Music Concert",
        "description": "Experience the magic of music at our upcoming concert. Join us for a melodious evening!",
        "date": "2024-03-30",
        "link":"www.google.com"
      },
      {
        "id": "8",
        "title": "Book Club Meeting",
        "description": "Discuss and share your thoughts on the latest book. All book lovers welcome!",
        "date": "2024-04-01",
        "link":"www.google.com"
      },
      {
        "id": "9",
        "title": "Environmental Awareness Campaign",
        "description": "Join us in spreading awareness about environmental issues. Let's make a positive impact!",
        "date": "2024-04-05",
        "link":"www.google.com"
      },
      {
        "id": "10",
        "title": "Science Fair",
        "description": "Explore innovative projects and experiments at our annual science fair. Unleash your curiosity!",
        "date": "2024-04-10",
        "link":"www.google.com"
      }
    ];  
        //console.log(jsonData);
        setEvents(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  //to search items

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResults = events.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(term)
      )
    );

    setFilteredData(filteredResults);
  };
  return (
    <div>
      <div className="EventsectionHeader">
        <h1>Upcoming Events</h1>
        <input
          type="text"
          className="EventSearch"
          placeholder="  Search Events"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          // ref={ref}
          type="button"
          className="btn btn-primary "  //d-none
          style={{justifyContent:"center",marginLeft:"4vw",marginTop:'1vh'}}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Event
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Annoucement
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      // value={note.etitle}
                      aria-describedby="emailHelp"
                      // onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      {" "}
                      Description:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      // value={note.edescription}
                      // onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="link" className="form-label">
                      {" "}
                      Registration Link:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="link"
                      name="link"
                      // value={note.edescription}
                      // onChange={onChange}
                    />
                  </div>
                  
                </form>
              </div>
              <div className="modal-footer">
                <button
                  // ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  //  onClick={handleClick} disabled={note.etitle.length<1 || note.edescription.length<3}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="EventSection">
          {events ? (
            <ul className="Eventlistitem">
              {filteredData.map((item) => (
                <li key={item.id}>
                  <div className={`card text-bg-${randomColorGenerator(
                    colorArray
                  )} mb-3`} style={{width: "18rem",height:"14rem"}}>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        {item.description}<br/>
                        Date:  {item.date}
                      </p>
                      <a href={`${item.link}`} className="btn btn-primary" style={{bottom:"0px",backgroundColor:""}}>
                        Register
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading data...</p>
          )}
        
      </div>
    </div>
  );
}
