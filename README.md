# javascript_multithreading

This repo is solely to demonstrate that NodeJs has become serious now!

#### What is the difference between these two files? 🧐

##### main.js is like any other file written in javascript. Main purpose of this file is to calculate fibonacci value of a certain number but in a repeatative manner. But, this entire code runs on a single thread i.e. file will calculate fib() of a single number at any given point of time.

##### index.js exploits the threading functionality in NodeJs which was introduced after version 18. In this file, the same exact functionality of calculating a fib() of a number is provided but with a threaded approach. There are actually several workers which calculates fib() of a number parallally and not concurrently!

#### let us now compare the execution time of two modules.

1. Main.js

```console
node main.js
doFib done in 1043ms
doFib done in 1082ms
doFib done in 1139ms
doFib done in 1236ms
doFib done in 1107ms
Final result is 102334155,102334155,102334155,102334155,102334155
Total execution time is 5620ms
```

2. Index.js

```console
node index.js
worker 1 done in 1620ms
worker 2 done in 1753ms
worker 5 done in 1773ms
worker 4 done in 1782ms
worker 3 done in 1801ms
Final result is 102334155,102334155,102334155,102334155,102334155
Total execution time is 1828ms
```

#### As it can be clearly inferred from the results that, nodeJs now supports multithreading.

#### However, this concept of threading will be lucrative while dealing with CPU intensive tasks rather than I/O intensive ones, e.g., reading data from dynamodB table or pushing a record into SQS.
