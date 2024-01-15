const Error = ({ passSec }) => {
  return (
    <>
      {passSec.length === 0 && (
        <h1 className="err">
          Welcome Here ! Enter whatEver you want to save in this App
        </h1>
      )}
    </>
  );
};
export default Error;
