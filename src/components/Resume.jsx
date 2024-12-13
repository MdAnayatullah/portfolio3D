import React from "react";
import { SectionWrapper } from "../hoc";

function Resume() {
  const resumeLink =
    "https://drive.google.com/file/d/1FXPsM92bF7UYGZ1cRjL5VycW29NVzR1H/view?usp=sharing"; // Replace with your actual resume link

  return (
    <div className="flex justify-start items-start">
      <button
        onClick={() => window.open(resumeLink, "_blank")}
        className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-950 rounded-2xl"
      >
        View Resume
      </button>
    </div>
  );
}

export default SectionWrapper(Resume, "resume");
