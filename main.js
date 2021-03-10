// Mohit Pal Singh
// Traditional travelling Salesperson Problem solved 
// and visualised with the working of Genetic Algorithm.
// WORK INSPIRED FROM- Daniel Shiffman.



var cities = [];
var totalCities = 12;

// Best path overall
var travelledDistance = Infinity;
var bestSoFar;

// Population of possible orders
var population = [];
var populationTotal = 200;

function setup() {
  createCanvas(600, 600);

  // Make random cities
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(10, width - 10), random(10, height / 2 - 10));
    cities[i] = v;
  }

  // Create population
  for (var i = 0; i < populationTotal; i++) {
    population[i] = new DNA(totalCities);
  }

}

function draw() {
  background(0);

  // Each round let's find the best and worst
  var minDist = Infinity;
  var maxDist = 0;

  // Search for the best this round and overall
  var currentBest;
  for (var i = 0; i < population.length; i++) {
    var distance = population[i].calculateDistance();

    // Is this the best ever?
    if (distance < travelledDistance) {
      travelledDistance = distance;
      bestSoFar = population[i];
    }

    // Is this the best this round?
    if (distance < minDist) {
      minDist = distance;
      currentBest = population[i];
    }

    // Is this the worst?
    if (distance > maxDist) {
      maxDist = distance;
    }
  }

  // Show the best this round
  currentBest.show();
  translate(0, height / 2);
  line(0, 0, width, 0);
  // Show the best ever!
  bestSoFar.show();

  // Map all the fitness values between 0 and 1
  var sum = 0;
  for (var i = 0; i < population.length; i++) {
    sum += population[i].mapFitness(minDist, maxDist);
  }

  // Normalize them to a probability between 0 and 1
  for (var i = 0; i < population.length; i++) {
    population[i].normalizeFitnessLevel(sum);
  }

  // Selection

  // A new population
  var newPopulation = [];

  // Sam population size
  for (var i = 0; i < population.length; i++) {

    // Pick two
    var a = pickOne(population);
    var b = pickOne(population);

    // Crossover!
    var order = a.crossover(b);
    newPopulation[i] = new DNA(totalCities, order);
  }

  // New population!
  population = newPopulation;
}

// This is a new algorithm to select based on fitness probability!
// It only works if all the fitness values are normalized and add up to 1
function pickOne() {
  // Start at 0
  var index = 0;

  // Pick a random number between 0 and 1
  var r = random(1);

  // Keep subtracting probabilities until you get less than zero
  // Higher probabilities will be more likely to be fixed since they will
  // subtract a larger number towards zero
  while (r > 0) {
    r -= population[index].fitness;
    // And move on to the next
    index += 1;
  }

  // Go back one
  index -= 1;

  return population[index];
}