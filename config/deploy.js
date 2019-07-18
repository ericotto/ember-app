module.exports = function(deployTarget) {
  var ENV = {
    s3: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: process.env.AWS_BUCKET,
      region: process.env.AWS_REGION,
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}'
    }
  };
  return ENV;
};
