//var clientID = '686972454904-nnmtv252sf2nmrnqc62vptrfdg4vhp89.apps.googleusercontent.com';
//var clientSecret = 'yQm-QHwz_hFTcdhNDCUwRlFC';
//var facebookID = '2300906400150612';

var clientID = '284757123820-35aq2ncldsigfic24aforqculbssn8bm.apps.googleusercontent.com';
var clientSecret = 'riZVNRB9XOsHBmvEPzqMADlW';
var facebookID = '404228607028267';

var userInfo = {
    firstName: undefined,
    lastName: undefined,
    imageUrl: undefined,
    email: undefined,
    loginMethod: undefined,
    method: undefined
};

function siteSignOut() {
    if (userInfo.loginMethod == 1) {
        googleSignOut();
    }
    else if (userInfo.loginMethod == 2) {
        facebookSignOut();
    }
    else {
        alert('ummmm....');
    }
}

function signInSuccess() {
    console.log(userInfo);
    chackDatabaseMethod(userInfo.email, userInfo.loginMethod);
}

function signOutSuccess() {
    $(".data").hide();
    $(".login-form").fadeIn();
}

// GOOGLE LOGIN________________________________________________________________________________________________________________________________________________________________

function onGoogleSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    userInfo.firstName = profile.getGivenName();
    userInfo.lastName = profile.getFamilyName();
    userInfo.imageUrl = profile.getImageUrl();
    userInfo.email = profile.getEmail();
    userInfo.loginMethod = 1;
    
    signInSuccess();
}

function onGoogleFailure() {
    console.log('something went wrong');
}

function googleSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        signOutSuccess();
    });
}

// FACEBOOK LOGIN_____________________________________________________________________________________________________________________________________________________________

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
      
    if (response.status === 'connected') {
        
      // Logged into your app and Facebook.
      onFacebookSignIn();
        
    } 
    
    else {
        
      // The person is not logged into your app or we are unable to tell.
        //document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
    }
}

  // This function is called when someone finishes with the Login Button
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : facebookID,
        cookie     : true,  // enable cookies to allow the server to access 
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v3.2' // The Graph API version to use for the call
    });


    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function onFacebookSignIn() {
      
    FB.api('/me', 'GET', {fields: 'first_name,last_name,id,picture.width(250).height(250),email'}, function(response) {

        console.log(response);
        
        userInfo.firstName = response.first_name;
        userInfo.lastName = response.last_name;
        userInfo.imageUrl = response.picture.data.url;
        userInfo.email = response.email;
        userInfo.loginMethod = 2;
        console.log(userInfo);
        
        signInSuccess();

    });
}

function facebookSignOut() {
    FB.logout(function(response) {
        signOutSuccess();
    });
}

// LOGIN FUNCTIONS _____________________________________________________________________________________________________________________________________________________________
$(document).ready(function(){
    $("#lsa, #ls1, #ls1b, #ls2, #ls2b, #ls3, #ls4").hide();
    
    setTimeout(function(){
        $("#lsa").fadeIn(1000);
        setTimeout(function(){
            $("#lsa").fadeOut(1000);
            setTimeout(function(){
                $("#ls1").fadeIn(1000);
            },1000);
        },1000);
    },1000);
    
    
    var currentFormSlide = 1;
    var letterSpaceOnly = /^[a-zA-Z\s]*$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var hasUpperCase = /[A-Z]/;
    var hasLowerCase = /[a-z]/;
    var hasNumbers = /\d/;
    var liveError = "orange";
    var afterError = "red";
    var noError = "green";
    
    $(".login-form").submit(function(e){
        e.preventDefault();
    });
    
    //Event Listeners
    $("input[name=email]").on('input', function(){
        if (!$(this).val()) {
            $("#email_error").text("This cannot be left blank");  
            $(this).css("border-color", liveError);
        }
        else if ( !emailRegex.test($(this).val()) ) {
            $("#email_error").text("must include '@' and '.'");
            $(this).css("border-color", liveError);
        }
        else {
            $("#email_error").text("");
            $(this).css("border-color", noError);
        }
    });
    
    $("input[name=confirm_email]").on('input', function(){
        if (!$(this).val()) {
            $("#confirm_email_error").text("This cannot be left blank");  
            $(this).css("border-color", liveError);
        }
        else if ( !emailRegex.test($(this).val()) ) {
            $("#confirm_email_error").text("must include '@' and '.'");
            $(this).css("border-color", liveError);
        }
        else {
            $("#confirm_email_error").text("");
            $(this).css("border-color", noError);
        }
    });
    
    $("input[name=first_name]").on('input', function(){
        if (!$(this).val()) {
            $("#first_name_error").text("This cannot be left blank");  
            $(this).css("border-color", liveError);
        }
        else if ( !letterSpaceOnly.test($(this).val()) ) {
            $("#first_name_error").text("Name can only include letters");
            $(this).css("border-color", liveError);
        }
        else {
            $("#first_name_error").text("");
            $(this).css("border-color", noError);
        }
    });
    
    $("input[name=last_name]").on('input', function(){
        if (!$(this).val()) {
            $("#last_name_error").text("This cannot be left blank");  
            $(this).css("border-color", liveError);
        }
        else if ( !letterSpaceOnly.test($(this).val()) ) {
            $("#last_name_error").text("Name can only include letters");
            $(this).css("border-color", liveError);
        }
        else {
            $("#last_name_error").text("");
            $(this).css("border-color", noError);
        }
    });
    
    $("input[name=new_password]").on('input', function(){
        
        if ( !$(this).val() ) {
            $("#new_password_error").text('This cannot be left blank');
            $(this).css("border-color", liveError);
        }
        
        else if ( !hasLowerCase.test($(this).val()) ) {
            $("#new_password_error").text('must use at least one lowercase letter');
            $(this).css("border-color", liveError);
        }
        
        else if ( !hasUpperCase.test($(this).val()) ) {
            $("#new_password_error").text('must use at least one uppercase letter');
            $(this).css("border-color", liveError);
        }
        
        else if ( !hasNumbers.test($(this).val()) ) {
            $("#new_password_error").text('must use at least one number');
            $(this).css("border-color", liveError);
        }
        
        else {
            $("#new_password_error").text('');
            $(this).css("border-color", noError);
        }
        
    });
    
    $("input[name=confirm_new_password]").on('input', function(){
    
        if ( !$(this).val() ) {
            $("#confirm_new_password_error").text('This cannot be left blank');
            $(this).css("border-color", liveError);
        }
        
        else if ( $(this).val() != $("input[name=new_password]").val() ) {
            $("#confirm_password_error").text('Passwords do not match');
            $(this).css("border-color", liveError);
        }
        
        else {
            $("#confirm_new_password_error").text('');
            $(this).css("border-color", noError);
        }
        
    });
    
    
    // Next Fieldset
    $(".login-form__next").click(function(){
        if (currentFormSlide == 1) {
            
            if (!$("input[name=email]").val()) {
                
                $("#email_error").text("This cannot be left blank");
                $("input[name=email]").css("border-color", afterError);
                
            }
            else if (!emailRegex.test($("input[name=email]").val())) {
                
                //$("#email_error").text("Please enter a valid email address"); 
                $("input[name=email]").css("border-color", afterError);
            }
            else {
                //alert('looks good my g');
                currentFormSlide++;
                
                // Check to see if email exists
                $("#ft1").css("transform", "translateY(0)");
                $(".navigation__logo-container > h2:nth-child(2)").css("color", '#fff');
                setTimeout(function(){
                    $("#ls1").hide();
                },1000);
                
                
                // call ajax function here
                checkIfAccountExists($("input[name=email]").val());
                
            }
        }
        else if (currentFormSlide == 2) {
            
            if (!$("input[name=confirm_email]").val() || !$("input[name=first_name]").val() || !$("input[name=last_name]").val()) {
                
                if (!$("input[name=confirm_email]").val()) {
                    
                    $("#confirm_email_error").text("This cannot be left empty");
                    $("input[name=confirm_email]").css("border-color", afterError);
                    
                }
                
                if (!$("input[name=first_name]").val()) {
                    
                    $("#first_name_error").text("This cannot be left empty");
                    $("input[name=first_name").css("border-color", afterError);
                    
                }
                
                if (!$("input[name=last_name]").val()) {
                    
                    $("#last_name_error").text("This cannot be left empty");
                    $("input[name=last_name]").css("border-color", afterError);
                    
                }
                
            }
            
            else if (!emailRegex.test($("input[name=confirm_email]").val()) || !letterSpaceOnly.test($("input[name=first_name").val()) || !letterSpaceOnly.test($("input[name=last_name]").val())) {
                
                if ( !emailRegex.test($("input[name=confirm_email]").val()) ) {
                    
                    $("#confirm_email_error").text("Please enter a valid email address");
                    $("input[name=confirm_email]").css("border-color", afterError);
                    
                }
                
                if (!letterSpaceOnly.test($("input[name=first_name").val())) {
                    
                    $("#first_name_error").text("Name can only contain letters");
                    $("input[name=first_name").css("border-color", afterError);
                    
                }
                
                if (!letterSpaceOnly.test($("input[name=last_name").val())) {
                    
                    $("#last_name_error").text("Name can only contain letters");
                    $("input[name=last_name]").css("border-color", afterError);
                    
                }
                
            }
            
            else if ($("input[name=email]").val() != $("input[name=confirm_email]").val()) {
                alert('stop fucking around');
                alert($("input[name=email]").val());
                alert($("input[name=confirm_email]").val())
            }
            
            else {
                currentFormSlide++;
                
                
                $("#ft2").css("transform", "translateY(100%)");
                setTimeout(function(){
                    $("#ls2").hide();
                    $("#ls3").show();
                },1000);
            }
        }
        
    });
    
    // Submit Form
    $(".login-form__submit").click(function(){
        if(currentFormSlide == 2) {
                                
            var temporaryPassword = $("input[name=password]").val();
            var temporaryEmail = $("input[name=email]").val();
            
            checkLogin(temporaryEmail, temporaryPassword, function(result){
                console.log(result);
                if(result) {
                    console.log('Succesfully Logged In');
                    welcomeUser('Welcome Back ', false);
                }
                else {
                    console.log('Wrong Password');
                    $("#link-password_error").text("Your Password is incorrect");
                }
            });
                               
                               
        }
        
        else if (currentFormSlide == 3) {
            // password requirements
            // min of 8 characters
            // must use numbers
            // must use one capital letter
            
            var validPassword = true;
            
            if ( !hasLowerCase.test($("input[name=new_password").val()) ) {
                // must use lowercase letters
                $("#new_password_error").text('must use at least one lowercase letter');
                validPassword = false;
                $("input[name=new_password]").css("border-color", afterError);
            }
            
            if ( !hasUpperCase.test($("input[name=new_password").val()) ) {
                // must use lowercase letters
                $("#new_password_error").text('must use at least one uppercase letter');
                validPassword = false;
                $("input[name=new_password]").css("border-color", afterError);
            }
            
            if ( !hasNumbers.test($("input[name=new_password").val()) ) {
                // must use lowercase letters
                $("#new_password_error").text('must use at least number');
                validPassword = false;
                $("input[name=new_password]").css("border-color", afterError);
            }
            
            if ($("input[name=new_password").val() != $("input[name=confirm_new_password").val()) {
                $("#confirm_new_password_error").text('Passwords do not match');
                validPassword = false;
                $("input[name=confirm_new_password]").css("border-color", afterError);
            }
            
            if (validPassword) {
                createAccount($("input[name=first_name]").val(), $("input[name=last_name]").val(), $("input[name=confirm_email]").val(), $("input[name=new_password").val());
            }
            
            
        }
    }); 
});

function checkLogin(email, password, callback) {
    var loginSuccessOrFail = false;
    
    $.ajax({
        type:'post',
        url:'../php/check_login.php',
        data:{
            check_login:"check_login",
            email:email,
            password:password
        },
        
        success:function(response) {
            
            if(response=="fail") {
                
                loginSuccessOrFail = false;
                
            }
            
            else {
                
                var tempInfoHolder = JSON.parse(response);
                console.log(tempInfoHolder);
                userInfo.firstName = tempInfoHolder.first;
                
                userInfo.imageUrl = tempInfoHolder.url;
                
                loginSuccessOrFail = true;
 
            }
        }
        
    }).done(function(){
        if(loginSuccessOrFail){
            callback(true);
        }
        else {
            callback(false);
        }
        
    }).fail(function(){
        console.log('something went wrong');
    }); 
}

function welcomeUser(greeting, linked){
    $("#ft3").css("transform", "translateY(0)");
    $(".navigation__logo-container > h2").css("color", '#fff');
    $("#site-greeting-img").attr('src', userInfo.imageUrl);
    $("#site-greeting").text(greeting + userInfo.firstName);
    if(linked) {
        $("#site-subgreeting").text("Your account has been successfully linked");
    }
    
    setTimeout(function(){
        $("#ls1").hide();
        $("#ls2").hide();
        $("#ls2b").hide();
        $("#ls3").hide();
        $("#ls4").hide();
        
        setTimeout(function(){
            $("#ft3").css("width", "100vw");
            $("#site-greeting").fadeOut(500);
            $(".ft3-image").fadeOut(500);
            $("#site-subgreeting").fadeOut(500);
            
            setTimeout(function(){
                //window.location.href="../client-portal/index.php";
                $(".login").css("transform", "translateX(-100%)");
                $("#ft3").css("transform", "translateY(-100%)");
                user.first = userInfo.firstName;
                            user.first = user.first.charAt(0).toUpperCase() + user.first.slice(1);
                            getCurrentTime();
                setTimeout(function(){
                    $(".setup").css("transform", "translateX(0)");
                },100);
            },1000);
            
        }, 1000);
        
    }, 1500);
}

function updateProfilePicture() {

    $.ajax({
        type:'post',
        url:'../php/update_profile_picture.php',
        data:{
            update_url:"update_url",
            first: userInfo.firstName,
            last: userInfo.lastName,
            email:userInfo.email,
            url: userInfo.imageUrl
        },
        
        success:function(response) {
            
            if(response == "success") {
                console.log('Image Successfully Updated');
            }
            
            else {
                console.log('Something Went Wrong');
            }
            
        }
    });
}

function checkIfAccountExists(email) {
        
    $.ajax({
        type:'post',
        url:'../php/check_email.php',
        data:{
            check_email:"check_email",
            email:email
        },
        
        success:function(response) {
            
            if(response=="success") {
                //window.location.href="index.php";
                //alert('I guess that worked');
                setTimeout(function(){
                    $("#ft1").css("transform", "translateY(100%)");
                    $(".navigation__logo-container > h2:nth-child(2)").css("color", '#7fc1b2');
                    $("#ls2b").show();
                }, 1500);
                
            }
            
            else if (response == "fail") {
                //alert('it actually works');
                var confirmEmailValue = $("input[name=email]").val();
                $("input[name=confirm_email]").val(confirmEmailValue);
                
                setTimeout(function(){
                    $("#ft1").css("transform", "translateY(100%)");
                    $(".navigation__logo-container > h2:nth-child(2)").css("color", '#7fc1b2');
                    $("#ls2").show();
                }, 1500);
            }
            
            else {
                
                alert("Something Weird is up");
 
            }
        }
    });

 return false;
}

function createAccount(firstName, lastName, newEmail, newPassword) {
    console.log('running function');
    $.ajax({
        type:'post',
        url:'../php/create_account.php',
        data:{
            create_account:"create_account",
            email:newEmail,
            first:firstName,
            last:lastName,
            password: newPassword
        },
        
        success:function(response) {
            
            if(response=="success") {
                
                $("#ft3").css("transform", "translateY(0)");
                $(".navigation__logo-container > h2:nth-child(2)").css("color", '#fff');
                //$(".ft3-image").hide();
                $("#site-greeting").text('Welcome aboard ' + firstName);
                
                setTimeout(function(){
                    $("#ls3").hide();
                    
                    setTimeout(function(){
                        $("#ft3").css("width", "100vw");
                        $("#site-greeting").fadeOut(500);
                        $("#site-greeting-image").fadeOut(500);
                        $("#site-subgreeting").fadeOut(500);
                        
                        setTimeout(function(){
                            //window.location.href="../client-portal/index.php";
                            $(".login").css("transform", "translateX(-100%)");
                            $("#ft3").css("transform", "translateY(-100%)");
                            user.first = userInfo.firstName;
                            user.first = user.first.charAt(0).toUpperCase() + user.first.slice(1);
                            getCurrentTime();
                            setTimeout(function(){
                                $(".setup").css("transform", "translateX(0)");
                            },100);
                        },1200);
                        
                    }, 2000);
                    
                }, 1500);
            }
            
            else {
                
                alert("Something Weird is up");
                
            }
        }
    });

 return false;
}

function linkGoogleAccount(email, google) {
    
    $.ajax({
        type:'post',
        url:'../php/link_google_account.php',
        data:{
            link_google_account:"link_google_account",
            email:email,
            google: google,
        },
        
        success:function(response) {
            
            if(response=="success") {
                console.log('Google account is successfully linked');
            }
            
            else { 
                console.log('Something went wrong when linking accounts');
            }
        }
    });
    
}

function linkFacebookAccount(email, facebook) {
    
    $.ajax({
        type:'post',
        url:'../php/link_facebook_account.php',
        data:{
            link_facebook_account:"link_facebook_account",
            email:email,
            facebook: facebook,
        },
        
        success:function(response) {
            
            if(response=="success") {
                console.log('Facebook account is successfully linked');
            }
            
            else { 
                console.log('Something went wrong when linking accounts');
            }
        }
    });
    
}

function chackDatabaseMethod(email, method) {
    
    $.ajax({
        type:'post',
        url:'../php/check_method.php',
        data:{
            check_email:"check_email",
            email:email,
            method:method
        },
        
        success:function(response) {
            
            if(response == "fail") {
                // Create an account
                pushLoginToDatabase(userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.imageUrl);
                
            }
            
            else {
                userInfo.method = JSON.parse(response);
                console.log(userInfo.method);
                
                // Already has an account with email
                if(userInfo.method.email == 1) {    
                    
                    if(userInfo.loginMethod == 1) {
                        // Signed In With Google
                        
                        if(userInfo.method.google == 1) { 
                            console.log('Google account is already linked');
                            updateProfilePicture();
                            welcomeUser('Welcome Back ', false);
                        }
                        
                        else {
                            // Ask the user if they would like to link their Google Account
                            $("#ft1").css("transform", "translateY(0)");
                            $(".navigation__logo-container > h2:nth-child(2)").css("color", '#fff');
                            
                            setTimeout(function(){
                                
                                $("#ls1").hide();
                                
                                setTimeout(function(){
                                    $("#ft1").css("transform", "translateY(100%)");
                                    $(".navigation__logo-container > h2:nth-child(2)").css("color", '#7fc1b2');
                                    $("#ls4").show();
                                    $("#whichaccount").text("Link your Google Account Now");
                                }, 1000);
                                
                            },1000);
                            
                            $(".login-form__submit").click(function(){
                                var temporaryPassword = $("input[name=link-password]").val();
                                checkLogin(userInfo.email, temporaryPassword, function(result){
                                    console.log(result);
                                    if(result) {
                                        console.log('Succesfully Logged In');
                                        linkGoogleAccount(userInfo.email, 1);
                                        welcomeUser('Welcome Back ', true);
                                    }
                                    else {
                                        console.log('Wrong Password');
                                        $("#link-password_error").text("Your Password is incorrect");
                                    }
                                });
                                
                            });
                            
                        }
                    }
                    
                    else if (userInfo.loginMethod == 2) {
                        // Signed in with Facebook
                        
                        if(userInfo.method.facebook == 1) {
                            console.log('Facebook Account Is Already Linked');
                            updateProfilePicture();
                            welcomeUser('Welcome Back ', false);
                        }
                        else {
                            // Ask the user if they would like to link their facebook account
                            $("#ft1").css("transform", "translateY(0)");
                            $(".navigation__logo-container > h2:nth-child(2)").css("color", '#fff');
                            
                            setTimeout(function(){
                                
                                $("#ls1").hide();
                                
                                setTimeout(function(){
                                    $("#ft1").css("transform", "translateY(100%)");
                                    $(".navigation__logo-container > h2:nth-child(2)").css("color", '#7fc1b2');
                                    $("#ls4").show();
                                    $("#whichaccount").text("Link your Facebook Account Now");
                                }, 1000);
                                
                            },1000);
                            
                            $(".login-form__submit").click(function(){
                                
                                var temporaryPassword = $("input[name=link-password]").val();
                                
                                checkLogin(userInfo.email, temporaryPassword, function(result){
                                    console.log(result);
                                    if(result) {
                                        console.log('Succesfully Logged In');
                                        linkFacebookAccount(userInfo.email, 1);
                                        welcomeUser('Welcome Back ', true);
                                    }
                                    else {
                                        console.log('Wrong Password');
                                        $("#link-password_error").text("Your Password is incorrect");
                                    }
                                });
                               
                                
                            });
  
                        }
                    }
                    
                }
                
                // no email account active
                else {
                    console.log('no email account in database');
                    updateProfilePicture();
                    welcomeUser('Welcome Back ', false);
                }
                
            }
            
        }
    });

 return false;
}

function pushLoginToDatabase(firstName, lastName, newEmail, url) {

    var googleLogin = 0,
        facebookLogin = 0;
    
    if (userInfo.loginMethod == 1) {
        googleLogin = 1;
    }
    else if (userInfo.loginMethod == 2) {
        facebookLogin = 1;
    }
    
            
    $.ajax({
        type:'post',
        url:'../php/push_signin.php',
        data:{
            create_account:"create_account",
            email:newEmail,
            first:firstName,
            last:lastName,
            url: url,
            google: googleLogin,
            facebook: facebookLogin
        },
        
        success:function(response) {
            console.log(response);
            if(response=="success") {
                
            }
            
            else {
                
                alert("Something Weird is up. Please try again later");
                
            }
        }
    });

 return false;
}