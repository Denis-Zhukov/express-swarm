import express from 'express';

const app = express();


app.get('/version', (_, res) => {
    res.json({version: '1.0.0'});
});

app.head('/exit', (_, res) => {
    process.exit(0);
});

app.head('/crash', (_, res) => {
    process.exit(1);
});

app.listen(8000, () => {
    console.log('here');
});
