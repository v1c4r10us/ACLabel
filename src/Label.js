export function Label(props) {
  return (
    <div className="main">
      <div className="logo">
       <img alt="arca_logo" src="arca.png" height="60px"/>
      </div>
      <table>
        <tr>
          <th>CARGA</th>
          <th>PLACA_CAMION</th>
        </tr>
        <tr>
          <td>{props.shipment}</td>
          <td>{props.truck}</td>
        </tr>
      </table>
      <hr />
      <table>
        <tr>
          <th>LOTE_GENERICO</th>
          <th>LOCALIDAD</th>
        </tr>
        <tr>
          <td>Generico .</td>
          <td>{props.location}</td>
        </tr>
      </table>
      <hr />
      <table>
        <tr>
          <th>VIAJE</th>
          <th>NR_PALLET</th>
          <th>RUTA</th>
        </tr>
        <tr>
          <td>{props.trip}</td>
          <td>{props.numpallet}/{props.totalpallet}</td>
          <td>{props.way}</td>
        </tr>
      </table>
      <div className="datamatrix">
        <img
          alt="Datamatrix"
          src={`https://barcode.tec-it.com/barcode.ashx?data=${props.shipment}%0A&code=DataMatrix&unit=Px&dpi=96&dmsize=Default&modulewidth=10`}/>
      </div>
      <div className="shipmentnr">
        {props.shipment}
      </div>
    </div>
  );
}
