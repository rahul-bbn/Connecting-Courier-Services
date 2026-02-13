function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !mobile || !email || !message) {
    alert("Please fill all required fields");
    return;
  }

  // ✅ ADMIN WHATSAPP NUMBER (WITH COUNTRY CODE, NO +)
  const adminNumber = "919876543210"; // CHANGE THIS

  const whatsappMessage =
`📩 *New Contact Enquiry*
👤 Name: ${name}
📱 Mobile: ${mobile}
📧 Email: ${email}
📌 Subject: ${subject || "N/A"}
📝 Message: ${message}`;

  const whatsappURL =
    "https://wa.me/" +
    adminNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  window.open(whatsappURL, "_blank");
}
