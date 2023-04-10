import { NextPage } from "next";
import { useState } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Compiler: NextPage = () => {
  const [editor, onChangeEditor] = useState("");
  let apiResult = "Please run your code.";

  return (
    <div className="flex justify-around m-5">
      <div className="flex flex-col mx-2">
        <div className="pl-1 py-1 bg-secondary text-accent-content rounded-t-md text-center flex justify-between">
          <div className="grow">Editor</div>
          <div className="text-accent-content hover:text-neutral pr-3">
            <FontAwesomeIcon icon={faPlay} className="text-lg" />
          </div>
        </div>
        <div className="flex">
          <div className="pl-1 pt-2 flex flex-col h-full bg-secondary text-secondary-content rounded-bl-md">
            {editor.split("\n").map((i, index) => {
              return (
                <div className=" pr-1 w-10 text-center" key={index + 1}>
                  {index + 1}
                </div>
              );
            })}
          </div>
          <textarea
            rows={30}
            cols={70}
            className="input input-bordered input-secondary rounded-none rounded-br-md bg-base-300 w-full max-w-xl h-full overflow-hidden resize-none pl-2 pt-2"
            value={editor}
            onChange={(e) => onChangeEditor(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col w-96 mx-2">
        <div className="pl-1 pt-2 bg-accent text-accent-content rounded-t-md text-center">
          Result
        </div>
        <div className="input input-bordered input-accent rounded-none rounded-b-md bg-neutral text-bg-content w-full max-w-xl h-auto resize-none pl-2 py-2">
          {apiResult}
        </div>
      </div>
    </div>
  );
};

export default Compiler;
