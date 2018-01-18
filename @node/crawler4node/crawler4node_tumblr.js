/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {
  'use strict';

  var fetch = require('node-fetch');
  var cheerio = require("cheerio");

  for (var i = 0; i < 2; i++) {
    (function (index) {
      crawler('http://www.tumblrget.com/blogs.html?page=' + index);
    })(i);

  }

  /**
   * 抓取
   * @param url
   */
  function crawler(url) {
    fetch(url).then(function (response) {
      response.text().then(function (text) {
        // console.log(text);
        var $ = cheerio.load(text);
        // console.log($('td:nth-child(1)>a').text().split('.')[1].split('http')[0])
        console.log('page', url.split('=')[1]);
        $('td:nth-child(1)>a').each(function () {
          var tumblrname = $(this).text().split('.')[1].split('http')[0].trim();
          var tumblrUrl = 'http://' + tumblrname + '.tumblr.com/archive';
          'laosiji8' != tumblrname && console.log(tumblrUrl);
        })
      })
    })
  }

})();

/**
 * 【node爬虫】前端爬虫系列 -- 小爬「博客园」 - 推酷
 * http://www.tuicool.com/articles/MvUjMfB
 */
