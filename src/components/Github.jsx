import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers of {data?.name} : {data?.followers}
      <div className="flex justify-center mt-4">
        <img src={data?.avatar_url} alt="Git Picture" width={306} />
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/aditya-narayan-sahoo"
  );
  return response.json();
};
