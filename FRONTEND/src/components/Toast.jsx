import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`px-6 py-3 rounded-lg shadow-lg text-white
          ${type === "success" ? "bg-green-600" : "bg-red-600"}
        `}
      >
        {message}
      </div>
    </div>
  );
}
