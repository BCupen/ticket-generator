import { useRef } from "react";
import { Info, Upload } from "./SVGs";

const UploadAvatar = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  return (
    <div className="max-w-[450px] w-full flex flex-col gap-2">
      <label htmlFor="fileUpload" className="label">
        Upload Avatar
      </label>
      <div className="w-full h-[125px] flex flex-col items-center justify-center gap-3 border border-dashed border-neutral-200 rounded-lg bg-neutral-300 bg-opacity-30">
        <input id="fileUpload" type="file" className="hidden" ref={fileRef} />
        <UnfilledUpload />
      </div>
      <span className="flex gap-2 items-center ">
        <Info />
        <p className="text-neutral-100 text-sm font-light">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      </span>
    </div>
  );
};

const UnfilledUpload = () => {
  return (
    <>
      <span className="bg-neutral-300 bg-opacity-90 rounded-xl p-2">
        <Upload />
      </span>
      <p className="text-neutral-100 tracking-wide text-opacity-80">
        Drag and drop or click to upload
      </p>
    </>
  );
};

export default UploadAvatar;
