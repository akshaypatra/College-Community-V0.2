import React from "react";
import { useEffect, useState } from "react";



export default function Annoucements() {


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
        // const response=await fetch('/Announcement.json');
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const jsonData = await response.json();
        const jsonData=[
          {
              "id":"1",
              "title":"Reminder",
              "annoucement":"TA 1 marks declared",
              "date":"4/02/24"
          },
          {
              "id":"2",
              "title":"Reminder",
              "annoucement":"The deadline for Fall semester course registration is approaching. Ensure you've finalized your course selections by [deadline date]. Late registrations will not be accepted.",
              "date":"5/02/24"
          },
          {
              "id":"3",
              "title":"Scholarship Alert!",
              "annoucement": " Applications are now open for the [Name] Scholarship. Eligible students can apply by [deadline date]. Visit the college website for more details and application instructions.",
              "date":"6/02/24"
          },
          {
              "id":"4",
              "title":"Job Opportunity",
              "annoucement":" Local tech company [Company Name] is offering internships for Computer Science majors. Gain real-world experience and apply your skills! Check the career services website for application details.",
              "date":"7/02/24"
          },
          {
              "id":"5",
              "title":"Final Exam Schedule Released",
              "annoucement":" The timetable for the upcoming final exams is now available. Plan your study schedule accordingly. Be sure to check the dates, times, and locations on the college portal.",
              "date":"8/02/24"
          },
          {
              "id":"6",
              "title":"Important Update",
              "annoucement": " Changes to the Grading System - Starting next semester, there will be modifications to the grading system. Please review the updated policies on the college website.",
              "date":"9/02/24"
          },
          {
              "id":"7",
              "title":"Career Development Workshop",
              "annoucement":" Join us for a workshop on resume building and interview skills. Industry professionals will share insights to help you succeed in your job search. Register on the college events page.",
              "date":"10/02/24"
          },
          {
              "id":"8",
              "title":"Art Club Meeting",
              "annoucement":" The Art Club invites all students to our weekly meeting this Friday. Bring your creativity and join us for an afternoon of painting and artistic expression. Room details on the club notice board.",
              "date":"11/02/24"
          },
          {
              "id":"9",
              "title":"Library Closure",
              "annoucement":" The college library will be closed for maintenance on [date]. Plan your study sessions accordingly. We apologize for any inconvenience.",
              "date":"12/02/24"
          },
          {
              "id":"10",
              "title":"COVID-19 Vaccination Drive",
              "annoucement":" The college is organizing a vaccination drive on [date]. Protect yourself and your community. Register for your vaccine slot on the college health portal.",
              "date":"15/02/24"
          }
      ];
        //console.log(jsonData);
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
    <h1>Announcements</h1>
      <input 
                type="text"
                className="AnnoucementSearch"
                placeholder="  Search Announcements"
                value={searchTerm}
                onChange={handleSearch}
            />
    </div>
      
      <div className="AnnoucementSection">
        {announcements ? (
          <ul className="annoucementlistitem">
            {filteredData.map((item) => (
              <li key={item.id}>
                <div
                  className={`card text-bg-${randomColorGenerator(
                    colorArray
                  )} mb-3`}
                  style={{
                    width: "18rem",
                    height: "18rem",
                    borderRadius: "10px",
                  }}
                >
                  <div className="card-header">{item.date}</div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.annoucement}</p>
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
