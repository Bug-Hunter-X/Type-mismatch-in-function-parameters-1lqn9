# Type Mismatch in Function Parameters

This repository demonstrates a common error in TypeScript: type mismatches in function parameters.  The `greeter` function expects a single string, but an array of strings is passed. The compiler doesn't throw an error because the array elements are strings, but the function signature isn't satisfied.

The solution shows how to correctly handle this situation either by modifying the function signature or by correctly passing the parameter to the function.