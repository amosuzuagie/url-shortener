import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      <button
        onClick={copyToClipboard}
        className="flex cursor-pointer gap-1 items-center bg-btn-color py-2  font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white"
      >
        {copied ? "Copied!" : "Copy"}
        {copied ? (
          <LiaCheckSolid className="text-md" />
        ) : (
          <IoCopy className="text-md" />
        )}
      </button>
    </div>
  );
};

export default CopyButton;
