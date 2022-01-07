const express = require('express');
const router = express.Router();

const Post = require("../models/Post")

//GET BACK ALL THE POST FROM DB
router.get('/', async (req, res) => {
    try {

        const post = await Post.find();
        res.json(post);

    } catch (err) {
        res.json({ message: err });
    }

});

//SUBMIT POST DATA TO DB
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    /* post.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json("error")
    }) */

    const savePost = await post.save();
    res.json(savePost);
})

//SPECIFIC POST
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);

    } catch (err) {
        res.json({ message: err })
    }
});


//DELETE POST
router.delete('/:postID', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postID });
        res.json(removePost)

    } catch (err) {
        res.json({ message: err })

    }
})

//UPDATE a POST
router.patch('/:postID', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postID },
            { $set: { title: req.body.title } }
        );
        res.json(updatePost)

    } catch (err) {
        res.json({ message: err })
    }


})
module.exports = router;