<script type="text/javascript">
$( document ).ready(function() {
  $('.a-Login-title').text("Our Oracle APEX Workspace").css('color','darkgreen');
 
 // In order of reference
 // Oracle header
 // Down arrow
 // Second page fluff
 $('.a-Header--login, .a-Login-slideNav, .a-Login-slide--secondary').css('display','none');
 // Orange message bar
 $('.a-Login-message').text('Username = first name');
 
 // Hide reset password
 //$('.a-Login-links').text('')
 
 // Change logo, list in /i/apex_ui/css/Core.css
 $('.a-Login-logo').addClass('gi-icon-admin-dashboards').removeClass('gi-icon-apex-logo-icon');
 
});
</script>
