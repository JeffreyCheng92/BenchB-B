ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      type: 'GET',
      url: '/benches',
      dataType: json,
      success: function(benches){
        ApiActions.receiveAll(benches);
      },
      error: function() {
        debugger;
      }
    });
  },
};
