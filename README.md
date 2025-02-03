# Unhandled Error in Express.js Route Handler

This example demonstrates an Express.js application that crashes due to an unhandled error within a route handler.  The error is thrown without a proper `try...catch` block or error-handling middleware, causing the application to terminate.

## Bug

The `bug.js` file contains the faulty code. A synchronous error is thrown without proper handling, resulting in an uncaught exception and the application crashing.

## Solution

The `bugSolution.js` file provides a solution using error-handling middleware to gracefully handle and respond to uncaught errors, preventing the application from crashing.

## How to reproduce the bug:

1.  Run `node bug.js`
2.  Access the application in your browser.
3.  Observe the application crash.

## How to solve the bug:

1. Replace `bug.js` with `bugSolution.js`
2. Run `node bugSolution.js`
3. Access the application to see that the error is now handled gracefully.