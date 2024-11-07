function delay(millisecond) {
return new Promise(resolve=>setTimeout(resolve,millisecond));
};
        async function task() {
        console.log("Loading data...");
        await delay(1000); 
        console.log("Processing data...");
        await delay(2000); 
        console.log("Saving data...");
        await delay(3000); 
        }
        task();