/**
 * Created by Administrator on 2016/7/30 0030.
 */
(function () {
  'use strict';

  async function getResult() {
    let res, a, b, c, d;
    try {
      res = await opA(a, b);
      res = await opB(c, res);
      res = await opC(d);
      return res;
    } catch (err) {
      return handleError(err);
    }
  }


  getResult();

})();
