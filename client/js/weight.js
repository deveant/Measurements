Template.weight.helpers({ 
     createdAtFormatted: function () { 
       return moment(this.createdAt).format('DD/MM (ddd)'); 
     },
     positiveDifference: function(difference) {
    	return (difference > 0 ? '+' : '');
    }
 }); 
