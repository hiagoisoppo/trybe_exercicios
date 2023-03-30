function positiveOrNegative(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Just Zero";
  }
}

console.log(positiveOrNegative(0))