import RedoIcon from "@mui/icons-material/Redo";
import { useNavigate } from "react-router-dom";

export default function Navigateback() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="text-left text-white text-lg"
    >
      <span className="mr-3">Go back</span>
      <RedoIcon fontSize="medium" />
    </button>
  );
}
