const router = require('express').Router();
let Items = require('../models/items.model');

router.route('/').get((req, res) => {
    Items.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    console.log('hlell')
    console.log(req.body)
    const id = Number(req.body.id);
    const date = req.body.date;
    const text = req.body.text;

    const newItems = new Items({
        id,
        date,
        text
    });

    newItems.save()
        .then(() => res.json('Items added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    console.log('delete');
    const id = Number(req.body.id);
    Items.findByIdAndDelete(id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Items.findById(req.params.id)
        .then(item => {
            item.id = Number(req.body.id);
            item.date = req.body.date;
            item.text = req.body.text;

            item.save()
                .then(() => res.json('Item updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;