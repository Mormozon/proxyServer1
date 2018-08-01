const axios = require('axios');

const controller = {
  getPD(req, res) {
    axios.get('https://s3-us-west-1.amazonaws.com/mormont/bundle.js', {
      "async": true,
      "crossDomain": true,
      "headers": {
        "Content-Type": "application/javascript",
        "Cache-Control": "no-cache"
      }
    })
      .then((bundle)=>{
        res.append('Content-Type', 'application/javascript');
        res.status(200).send(bundle.data);
      })
      .catch((err)=>{console.error(err)});
  },

  getProducts(req, res) {
    axios.get('http://localhost:3001/api/product', {
      "async": true,
      "crossDomain": true,
      "headers": {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      }
    })
      .then(({ data })=> {
        res.status(200).send(data);
      })
      .catch((err)=>{ console.error(err); });
  },

  
  getRP(req, res) {
    axios.get('http://localhost:1337/client/bundle.js', {
      "async": true,
      "crossDomain": true,
      "headers": {
        "Content-Type": "application/javascript",
        "Cache-Control": "no-cache"
      }
    })
      .then((bundle)=>{
        res.append('Content-Type', 'application/javascript');
        res.status(200).send(bundle.data);
      })
      .catch((err)=>{console.error(err)});
  },

  getRelated(req, res) {
    axios.get('http://localhost:1337/api/related', {
      "async": true,
      "crossDomain": true,
      "headers": {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      }
    })
      .then(({ data })=> {
        res.status(200).send(data);
      })
      .catch((err)=>{ console.error(err); });
  },

}

module.exports = controller;