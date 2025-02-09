export function Label(props) {
  return (
    <div className="main">
      <div className="logo">
        <img alt="arca_logo" src="arca.png" height="60px" />
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
          <td>Gen{props.ude}</td>
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
      <div className="datamatrix" dangerouslySetInnerHTML={{ __html: window.DATAMatrix({msg: props.shipment, dim: 185, pad: 0.5}).outerHTML }} />
      <div className="shipmentnr">
        {props.shipment}
      </div>
    </div>
  );
}
