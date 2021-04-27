function totalAmount(total, service) {
    if (service == "good") {
      return (total * 0.2) + total;
    } else if (service == "fair") {
      return (total * 0.15) + total;
    } else if (service == "bad") {
      return (total * 0.1) + total;
    }
  }
  
  console.log(totalAmount(50, "fair"));
  