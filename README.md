# Travelling_Salesperson_Problem_With_Genetic_Algorithm

This is my first project on Genetic Algorithms.
I have picked the ever-famous TRAVELLING SALESPERSON PROBLEM that we have all been doing and 
made a genetic algorithm to solve it for me with the help of evolution.

I have used JavaScript with P5-framework to visualize all the working of the algorithm.
// sorry for the poor frontend, Its not my strongest skill anyway.

## How To Run-
   1. Download or Clone the repo.
   2. Use any text editor with live server plugin (I suggest VScode).
   3. Set your desired variables in the main.js file- NO. OF CITIES, POPULATION, ETC. 
   4. Make it live.
   5. Every time you will refresh there will  be random set of cities plotted on the 2D plane and the algorithm will start solving 
      the question based on your selected variables.
      
 ## Explanation-
   *GENETIC ALGORITHM -   Genetic Algorithm (GA) is a search-based optimization technique based on the principles of Genetics and Natural Selection. It is frequently used to find optimal or near-optimal solutions to difficult problems which otherwise would take a lifetime to solve.<br>
   
   *DIFFERENT MODULES USED IN THIS GENETIC ALGORITHM-<br><br>
      <br>1. Population- Population is a subset of solutions in the current generation. By solutions I mean all the routes/order the algorithm decides to randomly go on during this genration.<br>
      <br>2. Fitness Function- A fitness function is a particular type of objective function that is used to summarise, as a single figure of merit, how close a given design solution is to achieving the set aims. In this, We have decided to choose a fitness function where the total distance travelled gives turns out to be the most fit.<br>
      <br>3. Mutation- Mutation may be defined as a small random tweak in the chromosome, to get a new solution. In this I have used JavaScript lib func- Shuffle to shuffle the current order of visit to obtain something random order other than this.<br>
      <br>4. Crossover- Crossover, also called recombination, is a genetic operator used to combine the genetic information of two parents to generate new offspring. Here,  I have choose a random divider which selects some random no. of cities from the parent's order and place them consequetively at a random place in the child's order and then from the other parent, It picks cities from it's order linearly checks whether this city is already been pushed to the child's order and skips if it isn't then it linearly places them and hence completes the child's order.<br>
         This is the most crucial step as any improvements here can lead to exponential growth of this algo's performance.<br>
  
