import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="bg-slate-500 text-white text-3xl p-4 text-center max-w-max rounded-lg mx-auto">
      User: {userId}
    </div>
  );
}
