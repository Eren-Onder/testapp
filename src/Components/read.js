import React, { useState } from "react";
import fishFarmData from "./data";
export default function Read() {
  const [fishfarm, setfishfarm] = useState(fishFarmData);

  return (
    <div>
      <table>
        {fishfarm.map((f) => {
          return (
            <tr>
              <td>{f.fishType} </td>
              <td>{f.price} </td>
              <td>{f.durationInDays}</td>
              <td>{f.itemWeightInGrams}</td>
              <td>{f.originCountry}</td>
              <td>{f.season}</td>
              <td>{f.stockVolumeInKg}</td>
              <td>{f.saleLocations}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
