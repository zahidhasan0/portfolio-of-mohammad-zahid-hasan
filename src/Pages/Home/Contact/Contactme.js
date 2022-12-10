import React from "react";

const Contactme = () => {
  return (
    <div className="w-100vh">
      <iframe
        className="w-full "
        id="JotFormIFrame-223434699194063"
        title="Heading"
        width={1000}
        height={1000}
        style={{ background: "black" }}
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/223428626161454"
      ></iframe>
      <script
        type="text/javascript"
        src="https://form.jotform.com/jsform/223428626161454"
      ></script>
    </div>
  );
};

export default Contactme;
