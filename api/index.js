import express from 'express';
//if we want to use this kind of import statement then we need to set "type":"module"  in pkj json file , niether we have to use "require"
const app = express();

app.listen(3000,()=> {
        console.log("Server is running on port 3000 !");
    }
);