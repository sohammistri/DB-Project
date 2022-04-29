const express = require('express');
const config = require('../config');

var router = express.Router();
const influx = config.influx;

router.get('/cpu', function(req, res, next) {
    res.render('cpu', {url: influx.url, token: influx.token, org: influx.org, bucket: influx.bucket});
});

router.get('/disk_cap', function(req, res, next) {
    res.render('disk_cap', {url: influx.url, token: influx.token, org: influx.org, bucket: influx.bucket});
});

router.get('/diskio', function(req, res, next) {
    res.render('diskio', {url: influx.url, token: influx.token, org: influx.org, bucket: influx.bucket});
});

router.get('/indiv_proc', function(req, res, next) {
    res.render('indiv_proc', {url: influx.url, token: influx.token, org: influx.org, bucket: influx.bucket});
});

router.get('/mem', function(req, res, next) {
    res.render('mem', {url: influx.url, token: influx.token, org: influx.org, bucket: influx.bucket});
});

router.get('/network', function(req, res, next) {
    res.render('network', {url: influx.url, token: influx.token, org: influx.org, bucket: influx.bucket});
});

router.get('/procs', function(req, res, next) {
    res.render('procs', {url: influx.url, token: influx.token, org: influx.org, bucket: influx.bucket});
});

module.exports = router;
