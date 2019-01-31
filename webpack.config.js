module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./app/background.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" },
          {
            loader: "tslint-loader",
            options: {
              typeCheck: true,
              // don't fix automatically when execute tslint
              fix: false,
              // emit error in stead of warning to stopping build
              emitErrors: true,
              types: [
                "chrome"
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
