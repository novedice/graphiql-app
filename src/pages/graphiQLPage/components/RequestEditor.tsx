import { addRequest } from "../../../store/requestSlice";
import { useAppDispatch, useTypeSelector } from "../../../hooks/hooks";
import { useState } from "react";
import { request } from "../../../requests/api";
import { addResults } from "../../../store/resultSlice";

const RequestEditor = () => {
  const [inputValue, setInputValue] = useState("");
  const { requestValue } = useTypeSelector((state) => state.requestValue);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    dispatch(addRequest(inputValue));
    const res = await request(inputValue);
    if (res) {
      dispatch(addResults(JSON.stringify(res)));
      console.log("store: request", requestValue);
    }
  };

  return (
    <>
      <div className="text-black w-[50%] h-[100vh]">
        <textarea
          className="w-[100%] h-[100vh]"
          defaultValue={requestValue}
          onChange={handleChange}
          rows={20}
          cols={50}
          autoComplete="on"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default RequestEditor;
