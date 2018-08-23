module.exports.run = async (
  event
  // , context, callback
) => {
  // console.log("I'm a debug statement.");
  // callback(null, "Hello World");
  // return Promise.resolve("Hello");
  // return "Hello again";
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World"
    })
  };
};
