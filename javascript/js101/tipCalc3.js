function splitAmount(total, service, split) {
  if (service == "good") {
    return (total * 0.2 + total) / split;
  } else if (service == "fair") {
    return (total * 0.15 + total) / split;
  } else if (service == "bad") {
    return (total * 0.1 + total) / split;
  }
}

console.log(splitAmount(100, "bad", 4));
