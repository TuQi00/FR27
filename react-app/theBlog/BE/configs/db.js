

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/The-Blog`, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB