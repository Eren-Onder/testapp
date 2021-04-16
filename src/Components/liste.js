function Liste(props) {
  return (
    <ul className="listem">
      <li>{props.fish.fishType} </li>
      <li>{props.fish.price} </li>
      <li>{props.fish.entryDate}</li>
      <li>{props.fish.durationInDays}</li>
      <li>{props.fish.itemWeightInGrams}</li>
      <li>{props.fish.originCountry}</li>
      <li>{props.fish.season}</li>
      <li>{props.fish.stockVolumeInKg}</li>
      <li>{props.fish.saleLocations}</li>
    </ul>
  );
}
//export default Liste;
