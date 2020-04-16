const User =require('../../models/user');

module.exports = {
  index,
  create,
  delete: deleteOne
};


async function index(req, res) {
    const user = await User.findById(req.user._id);
    res.status(200).json(user.cats);
}

async function create(req, res) {
    const user = await User.findById(req.user._id);
    req.body.owner = req.user.name;
    user.cats.push(req.body);
    user.save(function(err) {
        res.status(201).json(user.cats);
    })
}

async function deleteOne(req, res) {
    const user = await User.findById(req.user._id);
    let deletedCat = user.cats.splice(req.params.idx, 1);
    user.save(function(err) {
        res.status(200).json(deletedCat);
    })
}
