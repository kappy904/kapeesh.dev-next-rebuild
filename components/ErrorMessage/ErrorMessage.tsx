import React from "react";

export default function ErrorMessage({ error }): JSX.Element {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="bg-red-500 shadow-md p-4 flex flex-row rounded-lg animate-bounce">
          <b className="text-white p-1">
            {error.map((messages) => messages.message).join(" | ")}
          </b>
        </div>
      </div>
    </div>
  );
}
