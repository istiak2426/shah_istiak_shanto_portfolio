
import React from "react";
import CV from "../../assets/shah istiak shanto.pdf";

const CTA = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch(CV);

      if (!response.ok) {
        throw new Error("CV download failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Shah_Istiak_Shanto.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <div className="cta">
      <button onClick={handleDownload} className="btn">
        Download CV
      </button>

      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
