/* eslint-disable react/display-name */
"use client";
import React, { useEffect, useState } from "react";

import "@mdxeditor/editor/style.css";
import dynamic from "next/dynamic";
import classNames from "classnames";
import { createPost } from "@/app/actions/blog";

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
  const [loading, setLoading] = useState("");
  const [error, setError] = useState(false);

  const handleSubmitButton = async () => {
    if (messageForm.message === "" || messageForm.title === "") {
      setError(true);
      return;
    }
    setLoading("createPost");
    try {
      const createdPost = await createPost({
        content: messageForm.message,
        title: messageForm.title,
      });

      console.log(createdPost, "createdPost");

      setLoading("");
      setMessageForm({ message: "", title: "" });
      alert("Post creado con exito");
      window.location.reload();
    } catch (error) {
      setLoading("");
      console.log(error);
    }
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
    <div className="h-full  shadow-2xl relative ">
      {loading === "createPost" && (
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-slate-500 bg-opacity-40 inset-0">
          <span>Loading</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-2">
        <div className="w-5/6">
          <span className="text-2xl font-bold">{"Escribe tu mensaje"}</span>
        </div>
        <div className="mt-6 h-44 w-full flex flex-row justify-center ">
          <div className="w-1/3 h-full  flex justify-center items-center border-2 rounded cursor-pointer">
            <div>
              <span className="font-semibold">Imagen +</span>
            </div>
          </div>
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
        <div className="mt-12">
          <EditorComp
            onChange={(e) => handleInputChange("message", e)}
            markdown={messageForm.message}
          />
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
