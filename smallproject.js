const items = [
  { name: "Diamond-700ml x 12 SAE 20W50 API-SG/CD", price: "5650.00" },
  { name: "Diamond-800ml x 12 SAE 20W50 API-SG/CD", price: "6460.00" },
  { name: "Diamond-01 Liter x 12 SAE 20W50 API-SG/CD", price: "8200.00" },
  { name: "ZINXX-700ml x 12 5G SAE 20W50 API-SG/CD", price: "4950.00" },
  { name: "ZINXX-700ml x 10 SAE 20W50 API-SG/CD", price: "4120.00" },
  { name: "ZINXX-800ml x 12 5G SAE 20W50 API-SG/CD", price: "5660.00" },
  { name: "ZINXX-Liter x 12 5G SAE 20W50 API-SG/CD", price: "7100.00" },
  {
    name: "Motor Oil Group-I base oil SAE 20W50 API-SG/CD (per Liter)",
    price: "780.00",
  },
  {
    name: "Motor Oil Group-II White Oil Imported SAE 20W50 API-SM (per Liter)",
    price: "1150.00",
  },
  {
    name: "Motor Oil Group-II White Oil Imported SAE 10W50 API-SN (per Liter)",
    price: "1250.00",
  },
  {
    name: "Motor Oil Group-I base oil SAE 20W50 API-cf4/cf/sg (per Liter)",
    price: "780.00",
  },
  {
    name: "Motor Oil Group-I base oil SAE-50 API-CD (per Liter)",
    price: "720.00",
  },
  {
    name: "Motor Oil Group-I base oil SAE-50 API-CC (per Liter)",
    price: "520.00",
  },
  {
    name: "Motor Oil Group-I base oil SAE 20W60 API-cf4/cf/sg (per Liter)",
    price: "850.00",
  },
  {
    name: "Tractor Oil Group-I oil Base oil (D-9000) API-cf4/cf/sg (per Liter)",
    price: "780.00",
  },
  {
    name: "Tractor Oil Group-I oil Base oil (D-8000) SAE-50 API-CD (per Liter)",
    price: "720.00",
  },
  {
    name: "Tractor Oil Group-I oil Base oil (D-1000) SAE-50 API-CC (per Liter)",
    price: "520.00",
  },
  {
    name: "Tractor Oil Group-I oil Base oil (D-3000) SAE-50 API-CD/SF (per Liter)",
    price: "520.00",
  },
  {
    name: "Tractor Oil Group-I oil Base oil (D-5000) SAE 20W50 API-CF/SF (per Liter)",
    price: "720.00",
  },
  {
    name: "Tractor Oil Group-I oil Base oil (D-3000) SAE-50 API-CD/CF (per Liter)",
    price: "720.00",
  },
  { name: "Under Root ATF (Per Liter)", price: "492.00" },
  { name: "Under Root Gear Oil GL-5 SAE-80w90 (Per Liter)", price: "650.00" },
  { name: "Under Root Break Fluid Dot 3 (per Piece)", price: "250.00" },
  { name: "Under Root Bucket Hydraulic AW-68 White", price: "720.00" },
  { name: "Under Root Bucket Hydraulic AW-68 Golden", price: "680.00" },
];
let totalPrice = 0;
let totalquantity = 0;

document.getElementById("addbtn").addEventListener("click", function () {
  const tname = document.getElementById("name").value;
  document.getElementById("cusname").textContent = tname;

  const Contact = document.getElementById("contactno").value;
  document.getElementById("phone").textContent = "Contact: " + Contact;

  const invoiceNo = document.getElementById("invoiceNo").value;
  document.getElementById("invoice").textContent = "No: " + invoiceNo;

  const date = document.getElementById("date").value;
  document.getElementById("tareekh").textContent = "Date: " + date;

  const selectedItem = document.getElementById("itemsSelect").value;
  const quantity = document.getElementById("input").value;

  const item = items.find((i) => i.name === selectedItem);

  const getTotal = (item.price * quantity).toFixed(2);
  const row = document.createElement("tr");

  const rowNum = document.createElement("td");
  rowNum.textContent = document.querySelectorAll("#tableBody tr").length + 1;
  row.appendChild(rowNum);

  const itemName = document.createElement("td");
  itemName.textContent = item.name;
  row.appendChild(itemName);

  const itemPrice = document.createElement("td");
  itemPrice.textContent = "Rs." + item.price;
  row.appendChild(itemPrice);

  const itemQuantity = document.createElement("td");
  itemQuantity.textContent = quantity;
  row.appendChild(itemQuantity);
  itemQuantity.style.textAlign = "center";

  const itemTotal = document.createElement("td");
  itemTotal.textContent = "Rs." + getTotal;
  row.appendChild(itemTotal);
  itemTotal.style.textAlign = "right";

  totalquantity += Number(quantity);
  totalPrice += Number(getTotal);

  const TotalCell = document.getElementById("itemTotal");
  TotalCell.textContent =
    "Rs." +
    totalPrice.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  TotalCell.style.textAlign = "right";

  const Totalquantitycell = document.getElementById("totalquantity");
  Totalquantitycell.textContent = totalquantity;
  Totalquantitycell.style.textAlign = "center";

  const subtotal = document.getElementById("subtotal");
  subtotal.textContent =
    "Rs." +
    totalPrice.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  subtotal.style.textAlign = "right";

  document.getElementById("tableBody").appendChild(row);
});
document.getElementById("downloadPDF").addEventListener("click", () => {
  const printArea = document.querySelector(".pdf"); // target your table container

  html2canvas(printArea).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 0.8);
    const pdf = new jspdf.jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
    pdf.save("Spare_Parts_Report.pdf");
  });
});
