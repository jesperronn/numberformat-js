/*
  Autoformat numbers to show thousand separators as delimiters.
  See that form fields with css classes can autoformat number. 
  Just add css class="numberformat currency" to a text field, and it will be formatted automatically.
  
  This code is open so you could add more behaviour later. For instance add more formatters (not only currency).
  
  Created by Jesper Rønn-Jensen, 2008-08-17

*/
(function(){ 
    var mil_delim = ',';
    var dec_delim = '.';
    var init = function(){
        $$('.numberformat').each(function(field){
          //alert('initializing numberformat');
          field.observe('blur', numberformat_currency);
          field.addClassName('colored');
        });
    };

    var numberformat_currency = function(e){
          var element = e.element();
          var val = element.value;
          var int = val.split(dec_delim).first();
          int     = int.strip().gsub(mil_delim, '');
          element.value = currency_formatter(int);
    };
    var currency_formatter = function(int){
        //first reverse array (to work from back), then slice in 3
        // for each group, reverse and join the 3 numbers 
        // Reverse the direction of the groups and then add thousand separators between
        return int.toArray().reverse().eachSlice(3, function(group){return group.reverse().join('')}).reverse().join(mil_delim);
    }; 
      
    $(document).observe("dom:loaded", function() { init(); });
})();
