if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('autoprefixer')({}),
            require('cssnano')({
                autoprefixer: true,
                discardComments: {
                    removeAll: true
                },
            }),
            require('rucksack-css')({}),
            require('oldie')({ /* options */ }),
        ],
    };
} else {
    module.exports = {
        plugins: [
            require('autoprefixer')({}),
            require('rucksack-css')({}),
            require('oldie')({ /* options */ }),
            
        ],
    };
}