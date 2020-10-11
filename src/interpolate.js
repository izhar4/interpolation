const interpolate = (value, session = {}, options = {}) => {
        return value.replace(new RegExp(options.leftDelimiter+"([^ {}]*)"+ options.rightDelimiter, 'g'),
            function (a, b) {
                let r = session[b];
                return r  ? r: '';
            }
        );
};

module.exports = { interpolate }