import MappingRow from "./MappingRow";
import React, { Fragment, useState } from "react";
import "./common.css";
import { AiOutlinePlus } from "react-icons/ai";
import Table from "./Table";
function MappingTable() {
  const initialSalesforceFields = [
    "FirstName",
    "ContactID",
    "Deleted",
    "City",
    "State",
    "Bank",
    "AccountID",
    "PostalCode",
    "Other Street",
  ];
  const initialCallHubFields = [
    "Name",
    "Phone Number",
    "Removed",
    "Downtown",
    "Province",
    "Money Bank",
    "Bank ID",
    "Pincode",
    "Other Place",
  ];

  const [salesforceFields] = useState(initialSalesforceFields);
  const [finalList, setFinalList] = useState([]);
  const [callhubFields] = useState(initialCallHubFields);
  const [mappings, setMappings] = useState([{ left: "", right: "" }]);

  const addMappingRow = () => {
    setMappings([...mappings, { left: "", right: "" }]);
  };

  const handleLeftChange = (index, event) => {
    const newMappings = [...mappings];
    newMappings[index].left = event.target.value;
    setMappings(newMappings);
  };

  const handleRightChange = (index, event) => {
    const newMappings = [...mappings];
    newMappings[index].right = event.target.value;
    setMappings(newMappings);
  };

  const handleDelete = (index) => {
    const newMappings = [...mappings];
    newMappings.splice(index, 1);
    setMappings(newMappings);
  };

  const handleSubmit = () => {
    setFinalList(mappings);
    // const blob = new Blob([JSON.stringify(mappings)], {
    //   type: "application/json",
    // });
    // const url = URL.createObjectURL(blob);

    // const downloadLink = document.createElement("a");
    // downloadLink.href = url;
    // downloadLink.download = "data.json";
    // downloadLink.textContent = "Download JSON";

    // // Trigger the download
    // downloadLink.click();
  };

  return (
    <div className="mapping-table">
      <div className="heading">
        {/* <div style={{ width: "200px" }}>Salesforce fields</div>
        <div style={{ width: "200px" }}>CallHub custom fields</div> */}
        <div style={{ width: "200px" }}>Field 1</div>
        <div style={{ width: "200px" }}>Field 2</div>
      </div>
      <div>
        {mappings.map((mapping, index) => (
          <Fragment key={index}>
            <MappingRow
              leftOptions={salesforceFields.filter(
                (field) => !mappings.map((m) => m.left).includes(field)
              )}
              rightOptions={callhubFields.filter(
                (field) => !mappings.map((m) => m.right).includes(field)
              )}
              leftValue={mapping.left}
              rightValue={mapping.right}
              onLeftChange={(e) => handleLeftChange(index, e)}
              onRightChange={(e) => handleRightChange(index, e)}
              onDelete={() => handleDelete(index)}
            />
            &nbsp;
          </Fragment>
        ))}
      </div>
      <button onClick={addMappingRow} className="add">
        <AiOutlinePlus />
        <span>Map Another Field</span>
      </button>
      <div className="import">
        <button onClick={handleSubmit}>Save and import lists</button>
      </div>
      {finalList.length === 0 ? null : <Table mapList={finalList} />}
    </div>
  );
}

export default MappingTable;
