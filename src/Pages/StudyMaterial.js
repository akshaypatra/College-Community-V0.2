import React from "react";
import { useState, useEffect } from "react";

const StudyMaterial = () => {
  //fetching annoucements
  const [material, setMaterial] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const jsonData = [
          {
            id: "1",
            Subject: "Computer Networks",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1AeC1Y7mj_yh0Ui77kF-PNEOl6jZgNA_g",
          },
          {
            id: "2",
            Subject: "Theory of Computation",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1D4ib4-ZINOeWVuPyTbpDtbAHRcN0Ym8Y",
          },
          {
            id: "3",
            Subject: "Integral Calculus and Transform techniques",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1ShGTtoxCzIggqf8P-pVJRdOlVpJ_okuA",
          },
          {
            id: "4",
            Subject: "Software  Engineering and Project Managament",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/15p8Xc_zhjlKFcx1nfBZsOn7qOkbdeeRb",
          },
          {
            id: "5",
            Subject: "Advance data structures",
            description: "five units",
            Link: "https://drive.google.com/drive/folders/1i0VIdJInykUtirqwEsy7SY4W3xoaCmmD",
          },
        ];
        //console.log(jsonData);
        setMaterial(jsonData);
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

    const filteredResults = material.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(term)
      )
    );

    setFilteredData(filteredResults);
  };

  return (
    <>
      <div className="studyMaterialHeader">
        <h1>Study Materials</h1>
        <input
          type="text"
          className="EventSearch"
          placeholder="  Search material"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <section className="workPage-container">
        <div class="ag-format-container">
          <div class="ag-courses_box">
            {material ? (
              <ul className="studymateriallist">
                {filteredData.map((item) => (
                  <li key={item.id}>
                    <div class="ag-courses_item">
                      <a
                        href={item.Link}
                        target="_blank"
                        rel="noreferrer"
                        class="ag-courses-item_link"
                      >
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">{item.Subject}</div>

                        <div class="ag-courses-item_date-box">
                          {item.description}
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyMaterial;
