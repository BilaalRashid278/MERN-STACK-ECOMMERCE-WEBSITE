const Json = {message : 'Router is working fine'};
const stringify = JSON.stringify(Json);
exports.getAllProducts = (req,res) => {
    res.status(200).send(stringify);
};