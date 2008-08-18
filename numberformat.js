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
        return int.toArray().reverse().eachSlice(3, function(group){return group.reverse().join('')}).reverse().join(mil_delim);
        // var out     = [];
        //         var numbers = int.split("");
        //         var ln  = numbers.length;
        //         var j = 0;//position mil_delim from behind
        //         for (var i = ln - 1; i >= 0; i--){
        //           if(j > 0 && j%3==0){
        //             out.push(mil_delim);
        //           }
        //           j++;
        //           out.push(numbers[i]);
        //         };
        //         return out.reverse().join('');
    }; 
      
    $(document).observe("dom:loaded", function() { init(); });
})();
