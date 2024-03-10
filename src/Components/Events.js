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
        const response = await fetch("/Events.json");
        const jsonData = await response.json();
        console.log(jsonData);
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
    </div>
    <div className="EventSection">
          {events ? (
            <ul class="Eventlistitem">
              {filteredData.map((item) => (
                <li key={item.id}>
                  <div class={`card text-bg-${randomColorGenerator(
                    colorArray
                  )} mb-3`} style={{width: "18rem",height:"14rem"}}>
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">
                        {item.description}<br/>
                        Date:  {item.date}
                      </p>
                      <a href={`${item.link}`} class="btn btn-primary" style={{bottom:"0px",backgroundColor:""}}>
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
