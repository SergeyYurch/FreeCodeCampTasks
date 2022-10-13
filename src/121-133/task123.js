// Only change code below this line
class Thermostat {
  constructor (tempF) {
    this.temp = 5/9*(tempF-32);
  }
  get temperature() {
    return this.temp
  }

  set temperature(tempC) {
    this.temp = tempC;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius