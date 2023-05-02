/* eslint-disable react-hooks/rules-of-hooks */
import { CommissionTypeData } from "@/data/commission-type.data";
import { useState } from "react";
import MaintainanceComponent from "../maintainance";
import { CommissionTypeModel } from "@/model/commission-type.model";

export default function SampleComponent() {
  if (CommissionTypeData.length === 0) {
    return <MaintainanceComponent />;
  }
  const [commissionType, setCommissionType] = useState(
    CommissionTypeData[0].link
  );
  let currentType = CommissionTypeData.find(
    (data) => data.link === commissionType
  );
  const commissionClick = (data: CommissionTypeModel) => {
    setCommissionType(data.link);
    currentType = data;
  };
  return (
    <>
      <div className="ts-segment is-secondary mobile:u-hidden">
        <div className="ts-breadcrumb is-stepped is-large">
          {CommissionTypeData.map((data, i) => (
            <div
              className={`item ${
                data.link === commissionType && "is-active fw-bold"
              }`}
              onClick={() => commissionClick(data)}
              key={i}
            >
              {data.name}
            </div>
          ))}
        </div>
      </div>
      <div className="ts-segment is-secondary tablet+:u-hidden">
        <div className="ts-row">
          <div className="column is-fluid ts-header is-heavy">
            {currentType?.name}
          </div>
          <button
            className="column tablet+:u-hidden"
            data-dropdown="commissionSample"
          >
            <i className="ts-icon bi-list" />
          </button>
        </div>
        <div
          className="ts-dropdown is-bottom"
          data-name="commissionSample"
          data-position="bottom-end"
          style={{ maxWidth: "500px" }}
        >
          {CommissionTypeData.map((data, i) => (
            <div className="item" onClick={() => commissionClick(data)} key={i}>
              <span className="ts-text is-large">{data.name}</span>
            </div>
          ))}
        </div>
      </div>
      {(currentType && currentType.layout) || <MaintainanceComponent />}
    </>
  );
}
