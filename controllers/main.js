const controllers = {
    landing: (req, res, next) => {
        return res.render('templates/layout', { pageVars: req.pageVars });
    },
    aboutme: (req, res, next) => {
        return res.render('templates/layout', { pageVars: req.pageVars });
    }
}

module.exports = controllers;