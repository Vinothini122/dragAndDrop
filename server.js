let express = require('express');

let app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/project'));

app.get('/*', (res) =>
    res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);