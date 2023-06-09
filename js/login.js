$(document).ready(function() 
{
    $('#login-form').on('submit', function() 
    {
        var remember = false;
        if($("#remember").is(':checked'))
        {
            remember = true;
        }
      
        $.ajax({
            "type": "POST",
            "url": "login",
            "data": {"email" : $('#email').val(), "first_name" : $('#first_name').val(), "last_name" : $('#last_name').val(), "pass" : $('#pass').val(), 'remember' : remember},
            "dataType": "json"
        }).done(function(result) 
        { 
            if(result.logged === false)
            {
                if(typeof result.errorMessage !== 'undefined')
                {
                    showStatusMessage(result.errorMessage, 'danger');
                }
                else if(typeof result.errorMessages !== 'undefined')
                {
                    showRegisterFormAjaxErrors(result.errorMessages);
                }
            }
            else
            {
                window.location.reload();
            }
        });
        
        return false;
    });
});