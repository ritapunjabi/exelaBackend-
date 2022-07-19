const db = require("../models");
const Bill = db.bills;

//Create and Save a new tutorial
exports.createBill = (req, res) => {
    //validate request
    if (!req.body.bill_date) {
        res.status(400).send({
            message: "Content can't be empty!"
        });
    }
    //Create a Tutorial
    const bill = {
        name: req.body.name,
        address: req.body.address,
        bill_date: req.body.bill_date,
        paid_date: req.body.paid_date,
        units_consumed: req.body.units_consumed,
        amount: req.body.amount,
    };
    //save tutuorial to db
    Bill.create(bill)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some Error Occurred while creating Bill."
            });
        });

};

// Retrieve all Bill from the database.
exports.findAll = (req, res) => {
    Bill.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Bills."
            });
        });

};

// Find a single Bill with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Bill.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Bill with id=" + id
            });
        });

};


// Update a Bill by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Bill.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Bill was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Bill with id=${id}. Maybe Bill was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Bill with id=" + id
            });
        });

};
exports.delete = (req, res) => {
    const id = req.params.id;
    Bill.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Bill was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Bill with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Bill with id=" + id
            });
        });

};