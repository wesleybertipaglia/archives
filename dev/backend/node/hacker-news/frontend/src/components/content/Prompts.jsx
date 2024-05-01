import { useState, useEffect } from "react";

const Prompts = () => {
  const [prompts, setPrompts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/prompts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPrompts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Prompts</h1>
      <ul>
        {prompts.length === 0 ? (
          <li>Loading...</li>
        ) : (
          prompts.map((prompt) => (
            <li key={prompt.id} className="border rounded-xl m-6 p-3">
              <h3 className="text-xl">{prompt.title}</h3>
              <p>{prompt.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Prompts;
