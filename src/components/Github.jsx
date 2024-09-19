import { useState } from "react";

const Github = () => {
  const [githubId, setGithubId] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${githubId}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error(error);
      setData(null);
    }
  };

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <input
        type="text"
        placeholder="Enter GitHub ID"
        value={githubId}
        onChange={(e) => setGithubId(e.target.value)}
        className="p-2 rounded text-black"
      />
      <button
        onClick={fetchData}
        className="ml-2 p-2 bg-blue-600 hover:bg-blue-800 transition rounded"
      >
        Fetch Data
      </button>

      {data && (
        <div className="mt-4">
          Github Followers of {data.name} : {data.followers}
          <div className="flex justify-center mt-4">
            <img src={data.avatar_url} alt="git-pic" width={306} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Github;
