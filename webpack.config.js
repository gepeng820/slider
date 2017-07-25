let path=require('path');
module.exports = {
    entry:'./app/index.js',
    output: {
        path: path.resolve('build'),
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test:/^.jsx$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
};
