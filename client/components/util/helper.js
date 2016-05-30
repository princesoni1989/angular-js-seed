/**
 * Created by princesoni on 11/13/15.
 */
'use strict';

/**
 * Helper service
 */
(function (angular) {
  function Helper() {
    return {

      /**
       *
       * @param obj
       * @param keys
       * @returns {{}}
       */
      filterObject: function (obj, keys) {
        var result = {};
        for (var type in obj)
          if (keys.indexOf(type) > -1)
            result[type] = obj[type];
        return result;
      },

      /**
       *
       * @param text
       * @returns {*}
       */
      trim: function (text) {
        return text.replace(/\s+/, "")
      },

      /**
       *
       * @param arr
       * @returns {{}}
       */
      sortByKey: function (arr) {
        var ordered = {};
        Object.keys(arr).sort().forEach(function (key) {
          ordered[key] = arr[key];
        });
        return ordered
      }
    }
  }

  angular.module('angularJsSeedApp')
    .factory('Helper', Helper)
})
(angular);
