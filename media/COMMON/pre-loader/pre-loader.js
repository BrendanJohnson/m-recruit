$(document).ready(function () {

    var htmlStructure = `<span class="loader"></span>`;
    var htmlStructureG = `<span class="loader-google"></span>`;


    // Login With Facebook
    $("#ctl00_ContentPlaceHolder1_ucMemberSocialLogin1_lbSignInFacebook").on('click', function () {

        $("#ctl00_ContentPlaceHolder1_ucMemberSocialLogin1_lbSignInFacebook img").css({ "display": "none" });
        $(this).append(htmlStructure);

    });

    // Login With Google
    $("#ctl00_ContentPlaceHolder1_ucMemberSocialLogin1_lbSignInGoogle").on('click', function () {

        $("#ctl00_ContentPlaceHolder1_ucMemberSocialLogin1_lbSignInGoogle img").css({ "display": "none" });
        $(this).append(htmlStructureG);
    });

    // Login With LinkedIn
    $("#ctl00_ContentPlaceHolder1_ucMemberSocialLogin1_lbSignInLinkedIn").on('click', function () {

        $("#ctl00_ContentPlaceHolder1_ucMemberSocialLogin1_lbSignInLinkedIn img").css({ "display": "none" });
        $(this).append(htmlStructure);
    });

    // Member Login
    $("#btnLogin").on('click', function () {
		
		var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
		
		var emailValidFlag = false;
		
		var email = $('#ctl00_ContentPlaceHolder1_txtUserName').val();
		
		if(email != "" && email != null){
			
			var matched = email.match(pattern);
			
			if(matched != null){
				emailValidFlag = true;
			}
		}
		
		if (emailValidFlag) {
			$(this).css({
				"display": "none"
			});
			$("#member-submit-container").append(htmlStructure);
		}        
    });

    // Advertiser Login
    $("#ctl00_ContentPlaceHolder1_btnLogin").on('click', function () {

		var usernamevalid = false;
		
		var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
		
        var usernameValue = $("#ctl00_ContentPlaceHolder1_txtUserName").val().trim();
        var passwordValue = $("#ctl00_ContentPlaceHolder1_txtPassword").val().trim();

		if(usernameValue != "" && usernameValue != null){
			var matched = usernameValue.match(pattern);
			
			if(matched != null){
				usernamevalid = true;
			}
		}
		
        if (usernamevalid && passwordValue != "")
        {
            $(this).css({ "display": "none" });
            $("#advertiser-submit-container").append(htmlStructure);            
        }        
    });

    // Member Register
    $("#btnSubmit").on('click', function () {
		
        var firstName = $('#ctl00_ContentPlaceHolder1_rfvFirstname').val().trim();
 
        var lastName = $('#ctl00_ContentPlaceHolder1_rfvSurname').val().trim();

        var emailAddress = $('#ctl00_ContentPlaceHolder1_txtEmailAddress').val().trim();
 
        var confirmEmailAddress = $('#ctl00_ContentPlaceHolder1_txtConfirmEmail').val().trim();

        var password = $('#txtPassword').val().trim();

        var confirmPassword = $('#ctl00_ContentPlaceHolder1_txtConfirmPassword').val().trim();

		var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
		
		var emailValidFlag = false;
		var confirmEmailValidFlag = false;
		var emailMatchFlag = false;
		
		var passwordValidFlag = false;
		var confirmPasswordValidFlag = false;
		var passwordMatchesFlag = false;
		
        var emailmatches = -1;
        var passwordmatches = -1;
		
		// Check Email Address Valid
		if(emailAddress !== "" && emailAddress != null){
			
			var matched = emailAddress.match(pattern);
			
			if(matched != null){
				emailValidFlag = true;
			}
		}
		
		// Check Confirm Email Address Valid
		if(confirmEmailAddress !== "" && confirmEmailAddress != null){
			
			var matched = confirmEmailAddress.match(pattern);
			
			if(matched != null){
				confirmEmailValidFlag = true;
			}
		}
		
		// Check Email Addresses Matches
        if (emailValidFlag && confirmEmailValidFlag) {
			
            emailmatches = confirmEmailAddress.localeCompare(emailAddress);
			
			if(emailmatches == 0){
				emailMatchFlag = true;
			}
        }

		// Check Password valid
		if(password != "" && password != null){
			
			passwordValidFlag = true;
		}
		
		// Check Confirm Password Valid
		if(confirmPassword != "" && confirmPassword != null){
			confirmPasswordValidFlag = true;
		}
		
		// Check Passwords Matches
        if (passwordValidFlag && confirmPasswordValidFlag) {
			
            passwordmatches = confirmPassword.localeCompare(password);
			
			if(passwordmatches == 0){
				passwordMatchesFlag = true;
			}
        }

		// Adding Preloader upon when the specified flags are true
        if (emailValidFlag &&
		    confirmEmailValidFlag &&
		    emailMatchFlag &&
		    passwordValidFlag &&
		    confirmPasswordValidFlag &&
		    passwordMatchesFlag) {
			
            $(this).css({ "display": "none" });
            $("#member-submit-container").append(htmlStructure);
			
        }
    });

    // Advertiser Register
    $("#ctl00_ContentPlaceHolder1_btnRegister").on('click', function () {

        var username = $('#ctl00_ContentPlaceHolder1_dataEmailAddressUsername').val().trim();

        var password = $('#dataPassword').val().trim();

        var confirmPassword = $('#ctl00_ContentPlaceHolder1_dataConfirmPassword').val().trim();

        var firstName = $('#ctl00_ContentPlaceHolder1_dataFirstName').val().trim();

        var lastName = $('#ctl00_ContentPlaceHolder1_dataLastName').val().trim();

        var phone = $('#ctl00_ContentPlaceHolder1_dataPhone').val().trim();

        var companyName = $('#ctl00_ContentPlaceHolder1_dataCompanyName').val().trim();

        var applicationEmail = $('#ctl00_ContentPlaceHolder1_dataApplicationEmail').val().trim();

        var businessType = $('#ctl00_ContentPlaceHolder1_ddlBusinessType').val().trim();

    });
});
