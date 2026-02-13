function trackShipment(e) {
  e.preventDefault();

  
  const trackingNo = document.getElementById("trackingNumber").value.trim();
  const resultDiv = document.getElementById("trackingResult");

  if (!trackingNo) {
    resultDiv.innerHTML =
      "<span style='color:red'>Please enter a tracking number</span>";
    return;
  }

  let url = "";
  let courier = "";

  // ================= INTERNATIONAL =================

  // DHL – 10 digits
  if (/^\d{10}$/.test(trackingNo)) {
    courier = "DHL";
    url = `https://www.dhl.com/global-en/home/tracking.html?tracking-id=${trackingNo}`;
  }

  // FEDEX – 12 to 15 digits
  else if (/^\d{12,15}$/.test(trackingNo)) {
    courier = "FedEx";
    url = `https://www.fedex.com/fedextrack/?tracknumbers=${trackingNo}`;
  }

  // UPS – starts with 1Z
  else if (/^1Z[A-Z0-9]{16}$/i.test(trackingNo)) {
    courier = "UPS";
    url = `https://www.ups.com/track?tracknum=${trackingNo}`;
  }

  // ARAMEX – 10 or 11 digits
  else if (/^\d{10,11}$/.test(trackingNo)) {
    courier = "Aramex";
    url = `https://www.aramex.com/track/results?ShipmentNumber=${trackingNo}`;
  }

  // ================= DOMESTIC INDIA =================

  // BLUEDART – 8 to 11 digits
  else if (/^\d{8,11}$/.test(trackingNo)) {
    courier = "Blue Dart";
    url = `https://www.bluedart.com/web/guest/trackdartresult?trackFor=0&trackNo=${trackingNo}`;
  }

  // DTDC – 2 letters + 9 digits
  else if (/^[A-Z]{2}\d{9}$/i.test(trackingNo)) {
    courier = "DTDC";
    url = `https://www.dtdc.in/tracking/tracking_results.asp?strCnno=${trackingNo}`;
  }

  // DELHIVERY – starts with DLV
  else if (/^DLV\d+$/i.test(trackingNo)) {
    courier = "Delhivery";
    url = `https://www.delhivery.com/track/package/${trackingNo}`;
  }

  // TRACKON – 9 or 10 digits
  else if (/^\d{9,10}$/.test(trackingNo)) {
    courier = "Trackon";
    url = `https://trackon.in/tracking/?consignment_no=${trackingNo}`;
  }

  // ================= NOT DETECTED =================
  else {
    resultDiv.innerHTML =
      "<span style='color:red'>Courier not detected. Please check tracking number.</span>";
    return;
  }

  // ================= SUCCESS =================
  
  resultDiv.innerHTML = `
    <strong>Courier Detected:</strong> ${courier}<br>
    <span style="color:#0b3aa4">Redirecting to official tracking page...</span>
  `;

  // Open courier tracking in new tab
  setTimeout(() => {
    window.open(url, "_blank");
  }, 800);
}




