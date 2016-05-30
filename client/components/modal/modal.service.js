'use strict';
(function (angular) {
  /**
   * Modal service
   * @param $modal
   * @param Constants
   * @param $timeout
   * @param $state
   * @returns {{successPopup: Function, errorPopup: Function}}
   * @constructor
   */
  function ModalService($modal, Constants,$timeout, $state) {
    function openModal(success, dismiss, view, data, sizeClass, controller) {
      controller = controller && controller + ' as popUp' || '';
      var modalInstance = $modal.open({
        templateUrl: 'components/modal/popUp.html',
        controller: controller || 'ModalCtrl as popUp',
        windowClass: 'modal-container',
        size: sizeClass,
        backdrop: "static",
        keyboard: false,
        resolve: {
          modalView: function () {
            return view;
          },
          popupData: function () {
            return data;
          }
        }
      });
      modalInstance.result.then(success, dismiss || angular.noop);
    }

    return {
      successPopup: function (data, successCallback, dismissCallback) {
        openModal(successCallback, dismissCallback, Constants.popup.SUCCESS, data, "md");
      },
      errorPopup: function (data, successCallback, dismissCallback) {
        openModal(successCallback, dismissCallback, Constants.popup.ERROR, data, "md");
      }
    }
  }

  angular.module("angularJsSeedApp")
    .factory("ModalService", ModalService);
})(angular);

