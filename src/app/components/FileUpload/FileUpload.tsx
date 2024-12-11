/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import React from "react";

interface FileUploadProps {
  ponerImagen: (e: any) => void;
  idName?: string;
  imagenRef: React.LegacyRef<HTMLInputElement>;
  imagePreviewUrl: string;
}

const FileUpload = ({
  ponerImagen,
  idName = "image",
  imagenRef,
  imagePreviewUrl,
}: FileUploadProps) => {
  const estadoInput = Boolean(imagePreviewUrl);

  return (
    <>
      <label
        htmlFor={idName}
        className={classNames("flex  flex-col items-center justify-center")}
      >
        {imagePreviewUrl && (
          <Image
            src={imagePreviewUrl}
            width={100}
            height={100}
            alt="imagen"
            className="h-44 w-44 object-cover absolute "
          />
        )}

        <input
          name={idName}
          disabled={estadoInput}
          multiple
          onClick={(e: any) => (e.target.value = null)}
          type="file"
          id={idName}
          className="hidden"
          onChange={ponerImagen}
          ref={imagenRef}
        />
        <ImagePlus className="h-12 w-12  text-yellow-500 cursor-pointer" />
      </label>
    </>
  );
};

export default FileUpload;
