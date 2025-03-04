function duplicateZeros(arr) {
                    let n = arr.length;
                    let zeroCount = 0;
                
                    // Step 1: Count zeros in the original array.
                    for (let i = 0; i < n; i++) {
                        if (arr[i] === 0) {
                            zeroCount++;
                        }
                    }
                
                    // Step 2: Start from the end and shift elements to the right.
                    for (let i = n - 1; i >= 0; i--) {
                        if (arr[i] === 0) {
                            // Move the element at i one place forward
                            if (i + zeroCount < n) arr[i + zeroCount] = 0;
                            zeroCount--;
                            if (i + zeroCount < n) arr[i + zeroCount] = 0;
                        } else {
                            // Just shift the element
                            if (i + zeroCount < n) arr[i + zeroCount] = arr[i];
                        }
                    }
                }
                
                // Example usage:
                let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
                duplicateZeros(arr1);
                console.log(arr1); // Output: [1, 0, 0, 2, 3, 0, 0, 4]
                
                let arr2 = [1, 2, 3];
                duplicateZeros(arr2);
                console.log(arr2); // Output: [1, 2, 3]