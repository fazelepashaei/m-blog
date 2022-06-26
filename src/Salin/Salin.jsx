import React from "react";

function Salin(props) {
  var requestOptions = {
    method: "POST",
    redirect: "follow",
  };
  fetch(
    "http://chl-api.rahkardigital.com/API/V1/User/register?password=123456789Ab&firstname=koorosh&lastname=kakaei&phone=09999999999",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  // setMarkerArray(array);

  return (
    <div>
      <h1>SaliN</h1>
      <h1>{result}</h1>
    </div>
  );
}

export default Salin;
