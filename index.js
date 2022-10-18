const app = require('./app/app');

//database
require('./database/dbconnection')

app.listen(app.get('port'), () => {
    console.log('Server running on port:', 3000);
})