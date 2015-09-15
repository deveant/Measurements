Template.weight.helpers({
    createdAtFormatted: function () {
      return moment(this.createdAt).format('DD/MM (ddd)');
    }
});