import connectDB from "./db/db.js";
import 'dotenv/config';


(async () => {
    try {
        await connectDB();
    } catch (error) {
        console.error("Application terminated due to DB connection failure.")
    }
})();