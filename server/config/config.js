const env = process.env.NODE_ENV || 'development';

console.log('Server environment:', env);

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
    process.env.JWT_SECRET = 'vnr3i54tnignjerngigi5gn5i';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
    process.env.JWT_SECRET = 'e4knt5gmk34kgn73gnk4ng4ng';
}
