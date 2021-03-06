
module.exports = app => {
    const bill = require("../controllers/Bill.Controller");

    var router = require("express").Router();
    //Create a new Tutorial

    router.post("/", bill.createBill);

    //Retrive all bills
    router.get("/", bill.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", bill.findOne);

    // Update a Tutorial with id
    router.put("/:id", bill.update);

    // Delete a Tutorial with id
    router.delete("/:id", bill.delete);


    app.use('/api/bills', router);

}