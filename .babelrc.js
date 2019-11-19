module.exports = {
  presets: ["@babel/preset-react"],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["transform-es2015-arrow-functions", { spec: true }],
    ["@babel/plugin-proposal-object-rest-spread"],
    ["module-resolver", {
      "alias": {
        "components": "./app/components",
        "modules": "./app/modules",
        "utils": "./app/utils"
      }
    }]
  ]
};
