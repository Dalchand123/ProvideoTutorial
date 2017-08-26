//  module.exports={
//      database2: 'mongodb://localhost:27017/testing',
//      secret: 'mysecret'
// }
//provide a sensible default for local development
database2 = 'mongodb://127.0.0.1:27017/testing';
//take advantage of openshift env vars when available:
if(process.env.database2){
  mongodb_connection_string = process.env.database2 + testing;
}
