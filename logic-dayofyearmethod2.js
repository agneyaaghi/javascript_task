function dayOfYear(dateStr) {
                    const date = new Date(dateStr);
                    const startOfYear = new Date(date.getFullYear(), 0, 0);  
                    const diffTime = date - startOfYear;  
                    const dayOfYear = Math.floor(diffTime / (1000 * 60 * 60 * 24));                     return dayOfYear; 
                }
                console.log(dayOfYear("2019-02-10"));
                console.log(dayOfYear("2024-01-01"));