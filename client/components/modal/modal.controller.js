
'use strict';
(function (angular) {

  function ModalCtrl($modalInstance, $state, modalView, popupData, Constants, Messages, Helper, $timeout) {
    /**
     * Controller variable
     */
    var ctrl = this;
    ctrl.view = modalView;
    ctrl.popupData = popupData;

    /**
     * close modal
     * @param reload
     */
    ctrl.closeModal = function (reload) {
      $modalInstance.dismiss("cancel");
    };
  }

  angular.module('angularJsSeedApp')
    .controller('ModalCtrl', ModalCtrl);
})(angular);



