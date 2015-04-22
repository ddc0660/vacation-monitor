angular.module('vacationApp', [])
  .controller('VacationController', function() {
    var vacationList = this;
    vacationList.vacations = [
      {text:'vacation 1', startDate:new Date(2015,01,01), approved: true},
      {text:'vacation 2', startDate:new Date(2015,04,22), approved: false}];
      
    vacationList.addVacation = function() {
      vacationList.vacations.push(
        {text:vacationList.vacationText, startDate:vacationList.startDate, approved:false});
      vacationList.vacationText = '';
      vacationList.startDate = '';
    };
  });