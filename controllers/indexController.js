//Index Controller (Home Page)
class Index {
    static showIndex(req, res){
        res.render("index", {title: "Departures"});
    }
}

module.exports = Index;