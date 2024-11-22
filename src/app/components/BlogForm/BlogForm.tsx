/* eslint-disable react/display-name */
"use client";
import React, { useEffect, useState } from "react";

import "@mdxeditor/editor/style.css";
import dynamic from "next/dynamic";
import classNames from "classnames";

interface MessageForm {
  message: string;
  title: string;
}

const EditorComp = dynamic(
  () => import("./../InitializedMDXEditor/InitializedMDXEditor"),
  { ssr: false }
);

const BlogForm = () => {
  const [messageForm, setMessageForm] = useState<MessageForm>({
    message: "",
    title: "",
  });
  const [loading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmitButton = () => {
    console.log(messageForm);
  };

  useEffect(() => {
    if (messageForm.message !== "") {
      setError(false);
    }
  }, [messageForm.message]);

  const handleInputChange = (name: string, value: string) => {
    setMessageForm({ ...messageForm, [name]: value });
  };

  return (
    <div className="h-full  p-4 shadow-2xl">
      {loading && (
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-slate-500 bg-opacity-40">
          <span>Loading</span>
        </div>
      )}
      <div className="flex flex-1 flex-col ">
        <div className="w-5/6  ">
          <span className="text-2xl font-bold">{"Escribe tu mensaje"}</span>
        </div>
        <input
          onChange={(e) => handleInputChange("title", e.target.value)}
          value={messageForm.title}
          id="title"
          className={classNames({
            "mt-6  rounded-lg border border-gray-500  p-2   focus:ring-offset-2 focus:outline-none":
              true,
            "border-red-500": error,
          })}
          placeholder={"Escribi tu titulo"}
        />
        <div>
          <EditorComp markdown={messageForm.message} />
        </div>

        <div className="mt-12 flex justify-end">
          <button
            onClick={handleSubmitButton}
            className="h-10 w-32 rounded bg-yellow-600 text-white font-semibold text-lg hover:underline"
          >
            {"Mandar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
