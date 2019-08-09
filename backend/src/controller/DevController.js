const axios = require('axios');
const Dev = require('../model/Dev');

module.exports = {

    async store(req, res){
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar} = response.data;

        const dev = await Dev.create({
            name: (name ? name : username),
            user: username,
            bio: bio,
            avatar: avatar
        })

        return res.json(dev);
    },

    async index(req, res){
        const { user } = req.headers;
        const loggedUser = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user}},
                { _id: { $nin: loggedUser.likes }},
                { _id: { $nin: loggedUser.dislikes }}
            ]
        });

        return res.json(users);
    }
    
}