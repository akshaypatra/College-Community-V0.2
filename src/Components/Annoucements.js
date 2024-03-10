import React from "react";
import { useEffect, useState } from "react";



export default function Annoicements() {


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
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];


  //fetching annoucements
  const [announcements, setAnnouncements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("/Annoucements.json");
        const jsonData = await response.json();
        console.log(jsonData);
        setAnnouncements(jsonData);
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

    const filteredResults = announcements.filter((item) =>
    Object.values(item).some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(term)
    )
    );

    setFilteredData(filteredResults);
};

  return (
    <>
    <div className="AnnoucementsectionHeader">
    <h1>Annoucements</h1>
      <input 
                type="text"
                className="AnnoucementSearch"
                placeholder="  Search Annoucements"
                value={searchTerm}
                onChange={handleSearch}
            />
    </div>
      
      <div className="AnnoucementSection">
        {announcements ? (
          <ul class="annoucementlistitem">
            {filteredData.map((item) => (
              <li key={item.id}>
                <div
                  class={`card text-bg-${randomColorGenerator(
                    colorArray
                  )} mb-3`}
                  style={{
                    width: "18rem",
                    height: "18rem",
                    borderRadius: "10px",
                  }}
                >
                  <div class="card-header">{item.date}</div>
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.annoucement}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
}
