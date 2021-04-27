function tipAmount(total, service) {
  if (service == "good") {
    return total * 0.2;
  } else if (service == "fair") {
    return total * 0.15;
  } else if (service == "bad") {
    return total * 0.1;
  }
}

console.log(tipAmount(1000, "bad"));
