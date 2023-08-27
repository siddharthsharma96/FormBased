import { useState } from "react";
import Form from "./Form";
import FormData from "./FormData";

const FormPreview = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);

  const handleData = (inputData) => {
    setData(inputData);
  };

  const handleFormSubmit = (inputSubmit) => {
    setSubmit(inputSubmit);
  };

  return (
    <div className="FormPreviewContainer">
      <Form handleData={handleData} handleFormSubmit={handleFormSubmit} />
      <FormData data={data} submit={submit} />
    </div>
  );
};

export default FormPreview;
