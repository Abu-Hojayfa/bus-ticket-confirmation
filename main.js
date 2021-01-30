function allTicketCounts(ticketType) {
  const ticketAmount = document.getElementById(ticketType + "Sit").value;
  return parseInt(ticketAmount);
}

// ticket counting
function ticketCount(increasing, ticketType) {
  const sitTicket = allTicketCounts(ticketType);
  let newSitTicket = 0;
  if (increasing == true) {
    newSitTicket = sitTicket + 1;
  }
  if (increasing == false && sitTicket > 0) {
    newSitTicket = sitTicket - 1;
  }
  document.getElementById(ticketType + "Sit").value = newSitTicket;
  ticketPrice();
}

// pricing
function ticketPrice() {
  const economy = document.getElementById("economySit").value;
  const firstClass = document.getElementById("firstClassSit").value;

  const subTotal = parseInt(economy) * 100 + parseInt(firstClass) * 150;
  const tax = subTotal * 0.1;
  const grandTotal = subTotal + tax;

  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = grandTotal;
}

// confirmation box
const confirmBox = document.getElementById("checkOut");
confirmBox.addEventListener("click", () => {
  let firstClassInfo = document.getElementById("firstClass");
  let economyInfo = document.getElementById("economy");
  let totalInfo = document.getElementById("totalinfo");

  document.getElementById("mainBox").style.display = "none";
  document.getElementById("confirmationBox").style.display = "block";

  firstClassInfo.innerText =
    "First Class Sit: " + document.getElementById("firstClassSit").value;
  economyInfo.innerText =
    "Economy Sit: " + document.getElementById("economySit").value;
  totalInfo.innerText =
    "Total(tax inc.): $" + document.getElementById("total").innerText;
});