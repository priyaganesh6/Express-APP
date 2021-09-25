const mongoose = require('mongoose');
async function main() {
    const uri = 'mongodb://localhost:27017/UserDetailsDB'
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database connected"));
    } catch (error) {
        console.error(error);
    }
}
main().catch(console.error);
