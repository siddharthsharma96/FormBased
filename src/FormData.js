const FormData = ({ data, submit }) => {
  return (
    <div className="formDataContainer">
      <p>Name :</p>
      <p>{data.name}</p>
      <p>Mobile :</p>
      <p>{data.mobile}</p>
      <p>Email</p>
      <p>{data.email}</p>
      {submit && <p>Form submitted</p>}
    </div>
  );
};
export default FormData;
