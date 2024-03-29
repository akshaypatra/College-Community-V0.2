import React from "react";
import { useState, useEffect } from "react";
const HelpAndSupport = () => {
  const [queries, setQueries] = useState([]);
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
        const jsonData = [
          {
            id: "1",
            date: "22/03/2024",
            userName: "akshay",
            Query: "what's the procedure  for  applying for a gdsc club",
            replies: ["they take interview in April"],
          },
          {
            id: "2",
            date: "25/03/2024",
            userName: "sarah",
            Query: "How do I improve my coding skills?",
            replies: [
              "Practice regularly and try to solve coding problems daily.",
            ],
          },
          {
            id: "3",
            date: "28/03/2024",
            userName: "john",
            Query:
              "What are the best programming languages to learn for web development?",
            replies: [
              "Some popular languages for web development are HTML, CSS, JavaScript, Python, and Ruby.",
            ],
          },
          {
            id: "4",
            date: "30/03/2024",
            userName: "emma",
            Query: "How can I start learning machine learning?",
            replies: [
              "Start with basic mathematics and then move on to Python programming language. You can then learn libraries like NumPy, pandas, and scikit-learn.",
            ],
          },
          {
            id: "5",
            date: "02/04/2024",
            userName: "alex",
            Query:
              "What are some good resources for learning data structures and algorithms?",
            replies: [
              "There are many online platforms like Coursera, edX, and Khan Academy offering courses on data structures and algorithms. You can also refer to books like 'Introduction to Algorithms' by Cormen et al.",
            ],
          },
          {
            id: "6",
            date: "05/04/2024",
            userName: "julia",
            Query: "How do I prepare for technical interviews?",
            replies: [
              "Practice coding problems, review your fundamentals, and participate in mock interviews to simulate real interview scenarios.",
            ],
          },
          {
            id: "7",
            date: "08/04/2024",
            userName: "ryan",
            Query:
              "What are some tips for building a personal portfolio website?",
            replies: [
              "Focus on showcasing your projects and skills effectively. Keep the design clean and responsive. Don't forget to include a contact form.",
            ],
          },
          {
            id: "8",
            date: "10/04/2024",
            userName: "lisa",
            Query: "How can I get started with open-source contributions?",
            replies: [
              "Start by exploring GitHub and finding projects that interest you. Look for beginner-friendly issues labeled as 'good first issue' or 'beginner-friendly'.",
            ],
          },
          {
            id: "9",
            date: "15/04/2024",
            userName: "michael",
            Query:
              "What are the benefits of attending tech meetups and conferences?",
            replies: [
              "Tech meetups and conferences provide opportunities to network with professionals, learn about the latest trends, and gain insights from experienced speakers.",
            ],
          },
          {
            id: "10",
            date: "18/04/2024",
            userName: "sophia",
            Query: "How do I overcome imposter syndrome as a programmer?",
            replies: [
              "Remember that everyone experiences doubts at some point. Focus on your achievements and seek support from peers and mentors. Keep learning and growing.",
            ],
          },
        ];

        //console.log(jsonData);
        setQueries(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredResults = queries.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(term)
      )
    );

    setFilteredData(filteredResults);
  };

  return (
    <div className="container  ">
      <div className="container my-4">
        <h2 className="my-3" style={{ textAlign: "center" }}>
          Submit your query
        </h2>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select type of Query</option>
          <option value="Exam">Exam related</option>
          <option value="Campus">Campus related</option>
          <option value="Career">Career related</option>
          <option value="Career">Related to College Community</option>
        </select>
        <div className="mb-3 my-3">
          <label forhtml="exampleFormControlTextarea1 " class="form-label">
            Type your query
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <hr />
      </div>
      <div className="container">
        <div className="queryBoxheader">
          <h2 style={{ textAlign: "center" }}>Queries</h2>
          <input
            type="text"
            className="EventSearch"
            placeholder="  Search Query"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="QueryBox">
          {queries ? (
            <ul className="Querylistitem">
              {filteredData.map((item) => (
                <li key={item.id}>
                  <div class="card bg-dark text-bg-dark w-85 mb-3">
                    <div class="card-body">
                      <h5 class="card-title">{item.userName}</h5>
                      <p class="card-text">{item.Query}</p>
                      <input
                        type="text"
                        className="EventSearch mx-1"
                        placeholder="  Reply ..."
                        
                      />
                      <a href="/" class="btn btn-primary mx-2" >
                        Reply
                      </a>
                      <hr />
                      <p>
                        Replies : <br />
                        {item.replies}
                      </p>
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
    </div>
  );
};

export default HelpAndSupport;
