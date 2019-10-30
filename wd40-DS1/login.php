<!DOCTYPE html>
<html lang="en">

<head>

  <!-- TITLE & AUTHOR -->
  <title>Dash - Dashboard</title>

  <!-- META DATA -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FAVICON -->
  <link rel="apple-touch-icon" sizes="57x57" href="client/img/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="client/img/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="client/img/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="client/img/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="client/img/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="client/img/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="client/img/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="client/img/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="client/img/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="client/img/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="client/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="client/img/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="client/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="client/img/favicon/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="client/img/favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <!-- Preload Stylesheet -->
  <link rel="stylesheet" href="client/css/preload.css">

  <!-- Main Stylesheet -->
  <link href="client/css/main.css" rel="stylesheet" type="text/css">

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

  <!-- Google Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

  <!-- Google Cloud Platform -->
  <meta name="google-signin-client_id" content="284757123820-35aq2ncldsigfic24aforqculbssn8bm.apps.googleusercontent.com">
  <script src="https://apis.google.com/js/platform.js" async defer></script>

  <!-- Facebook SDK -->
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=404228607028267&autoLogAppEvents=1"></script>

    <!--Preload JS -->
    <script src="client/js/preload.js"></script>

</head>

<body>

    <!-- PRELOADER -->
        <section class="preload">
            <div class="preload__container nocursor" id="preloader-content">
                <div class="n3xt-loader">
                    <h2>D</h2>
                    <h2>A</h2>
                    <h2>S</h2>
                    <h2>H</h2>
                </div>
            </div>

            <noscript>
                <h3>Due to the interactive nature of this site, JavaScript is <span>required.</span> Please enable JavaScript or use a modern web browser to continue.</h3>
            </noscript>

            <div class="preload__bar">
                <span class="preload__bar-inner"></span>
            </div>

        </section>

        <script>

            if (visitedPage) {
                $(".preload__container").css("display", "none");
                $(".preload__bar").css("display", "none");
            }

            $(".preload__bar-inner").animate({width: "100%"}, loadTime);

        </script>

  <!-- Login Transitions -->
  <div id="ft1">
    <div class="loading-spinner"></div>
  </div>
  <div id="ft2"></div>
  <div id="ft3">
    <div>
      <div class="ft3-image">
        <img id="site-greeting-img" src="../img/default-account.jpg" alt="profile-picture">
      </div>

      <h1 id="site-greeting"></h1>
      <h2 id="site-subgreeting">Lets get started!</h2>
    </div>

  </div>

  <!-- Login Screen -->
  <section class="login z-1000" id="login-page">

    <div class="login__pane">

      <form class="login-form">

        <!-- Intro Slide -->
        <div class="login-form__slide" id="lsa">

          <h1 class="login-form__slide-title">Hi There!</h1>

        </div>

        <!-- Slide 1 -->
        <div class="login-form__slide" id="ls1">

          <h1 class="login-form__slide-title">Welcome to Dash</h1>

          <h2 class="login-form__slide-subtitle">Enter Your Email To Get Started</h2>
          <input type="email" name="email" placeholder="me@example.com">
          <p id="email_error"></p>
          <button class="login-form__next">Next</button>
          <h2 class="login-form__slide-or">Or</h2>

          <div class="login-buttons">

            <div class="login-buttons__button login-buttons__google">
              <div class="g-signin2" data-onsuccess="onGoogleSignIn" data-width="250" data-height="40" data-theme="dark" data-longtitle="true"></div>
            </div>

            <div class="login-buttons__button login-buttons__facebook">
              <div class="fb-login-button" data-width="250" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="true" onlogin="checkLoginState();"></div>
            </div>

          </div>

        </div>

        <!-- Slide 2 -->
        <div class="login-form__slide" id="ls2">
          <h1 class="login-form__slide-title">Looks like you don't have an account yet</h1>
          <h2 class="login-form__slide-subtitle">Enter Your name to get started</h2>
          <input type="email" name="confirm_email" placeholder="email address">
          <p id="confirm_email_error"></p>
          <input type="text" name="first_name" placeholder="First Name">
          <p id="first_name_error"></p>
          <input type="text" name="last_name" placeholder="Last Name">
          <p id="last_name_error"></p>
          <button class="login-form__next">Next</button>
        </div>

        <!-- Slide 2B -->
        <div class="login-form__slide" id="ls2b">
          <h1 class="login-form__slide-title">Welcome Back</h1>
          <h2 class="login-form__slide-subtitle">Enter Your Password</h2>
          <input type="password" name="password" placeholder="password">
          <p id="password_error"></p>
          <button class="login-form__submit">Sign In</button>
        </div>

        <!-- Slide 3 -->
        <div class="login-form__slide" id="ls3">
          <h1 class="login-form__slide-title">Almost Done!</h1>
          <h2 class="login-form__slide-subtitle">Create a Password</h2>
          <input type="password" name="new_password" placeholder="password">
          <p id="new_password_error"></p>
          <input type="password" name="confirm_new_password" placeholder="confirm password">
          <p id="confirm_new_password_error"></p>
          <button type="submit" class="login-form__submit">Create Account</button>
        </div>

        <!-- Slide 4 -->
        <div class="login-form__slide" id="ls4">
          <h1 class="login-form__slide-title-alt">Looks Like You Already Have An Account!</h1>
          <h2 class="login-form__slide-subtitle" id="whichaccount"></h2>

          <input type="password" name="link-password" placeholder="enter your password">
          <p id="link-password_error"></p>
          <button type="submit" class="login-form__submit">Confirm</button>
        </div>

      </form>

    </div>

    <div class="login__background">

      <div class="rocketsvg">
        <div class="starz">
          <div class="twinkling">
            <div class="clouds">
              <div class="rocket">
                <div class="sky">
                  <div class="star star1"></div>
                  <div class="star star2"></div>
                  <div class="star star3"></div>
                  <div class="star star4"></div>
                  <div class="star star5"></div>
                  <div class="star star6"></div>
                  <div class="star star7"></div>
                  <div class="star star8"></div>
                  <div class="star star9"></div>
                  <div class="star star10"></div>
                  <div class="star star11"></div>
                  <div class="star star12"></div>
                  <div class="star star13"></div>
                  <div class="star star14"></div>
                  <div class="star star15"></div>
                  <div class="star star16"></div>
                </div>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 556.726" style="enable-background:new 0 0 500 556.726;" xml:space="preserve">
                  <g>
                    <g>
                      <defs>
                        <rect id="SVGID_1_" x="45" y="60.387" width="409.92" height="410.88" />
                      </defs>
                      <clipPath id="SVGID_2_">
                        <use xlink:href="#SVGID_1_" style="overflow:visible;" />
                      </clipPath>
                    </g>
                    <g>
                      <defs>
                        <rect id="SVGID_3_" x="45" y="60.387" width="409.92" height="410.88" />
                      </defs>
                      <clipPath id="SVGID_4_">
                        <use xlink:href="#SVGID_3_" style="overflow:visible;" />
                      </clipPath>
                      <path style="clip-path:url(#SVGID_4_);" fill="" d="M343.238,172.072c-11.457-11.457-26.687-17.766-42.89-17.766
			c-16.203,0-31.438,6.309-42.895,17.766c-11.457,11.457-17.765,26.691-17.765,42.894s6.308,31.434,17.765,42.891
			c11.457,11.457,26.692,17.766,42.895,17.766c16.203,0,31.433-6.309,42.89-17.766C366.887,234.205,366.887,195.724,343.238,172.072
			L343.238,172.072z M329.324,243.947c-7.738,7.738-18.031,12.004-28.976,12.004c-10.95,0-21.243-4.266-28.981-12.004
			c-7.742-7.742-12.004-18.035-12.004-28.981c0-10.949,4.262-21.238,12.004-28.98c7.738-7.742,18.031-12.004,28.981-12.004
			c10.945,0,21.238,4.262,28.976,12.004C345.305,201.966,345.305,227.966,329.324,243.947L329.324,243.947z M329.324,243.947" />
                      <path class="morph" style="clip-path:url(#SVGID_4_);" d="M447.742,74.537c-0.906-3.403-3.562-6.055-6.961-6.965
			c-33.64-8.992-69.254-9.141-102.984-0.43c-5.258,1.359-10.438,2.957-15.555,4.731c-0.441,0.121-0.879,0.273-1.301,0.457
			c-28.089,9.964-53.777,26.113-75.066,47.339c-0.016,0.012-0.027,0.024-0.035,0.036c-0.059,0.054-0.113,0.109-0.168,0.164
			c-0.09,0.09-0.168,0.187-0.254,0.277c-0.082,0.09-0.172,0.172-0.254,0.266l-30.129,35.07
			c-47.402-0.523-93.465,18.203-127.051,51.789c-10.922,10.922-20.343,23.16-28.007,36.379c-1.547,2.668-1.754,5.906-0.559,8.746
			c1.195,2.844,3.652,4.961,6.641,5.719l54.679,13.922l-10.699,29.054c-5.285,14.348-1.711,30.606,9.102,41.418l53.668,53.668
			c7.496,7.492,17.601,11.512,27.882,11.512c4.551,0,9.133-0.789,13.536-2.41l29.058-10.699l13.922,54.679
			c0.758,2.989,2.879,5.45,5.719,6.645c1.222,0.512,2.519,0.765,3.812,0.765c1.711,0,3.414-0.445,4.934-1.328
			c13.215-7.66,25.453-17.082,36.379-28.004c33.59-33.589,52.308-79.664,51.793-127.058l35.062-30.129
			c0.09-0.078,0.172-0.168,0.258-0.246c0.098-0.09,0.195-0.168,0.289-0.262c0.055-0.055,0.106-0.113,0.164-0.168
			c0.008-0.012,0.024-0.023,0.031-0.035c21.231-21.285,37.375-46.977,47.344-75.063c0.18-0.425,0.336-0.863,0.457-1.308
			c1.774-5.113,3.367-10.293,4.727-15.551C456.887,143.787,456.738,108.177,447.742,74.537L447.742,74.537z M84.086,242.404
			c5.277-7.543,11.238-14.645,17.809-21.219c25.726-25.726,59.695-41.629,95.558-45.242l-67.203,78.215L84.086,242.404z
			 M128.496,307.888l9.156-24.863l12.692,12.687l-19.18,30.696C127.262,321.138,126.191,314.15,128.496,307.888L128.496,307.888z
			 M145.324,340.873l19.297-30.883l13.399,13.394l-25.094,25.09L145.324,340.873z M166.84,362.388l25.09-25.09l13.394,13.395
			l-30.883,19.297L166.84,362.388z M207.426,386.818c-6.262,2.305-13.246,1.234-18.52-2.668l30.696-19.18l12.691,12.692
			L207.426,386.818z M294.137,413.427c-6.575,6.571-13.68,12.532-21.223,17.805l-11.754-46.168l78.219-67.203
			C335.766,353.724,319.863,387.697,294.137,413.427L294.137,413.427z M381.746,255.517L250.629,368.173L147.141,264.689
			l79.586-92.625c0.078-0.086,0.152-0.176,0.226-0.266l32.844-38.226c17.902-17.84,39.246-31.699,62.562-40.785l100.168,100.172
			C413.445,216.275,399.586,237.619,381.746,255.517L381.746,255.517z M429.293,171.9l-85.875-85.879
			c28.391-7.211,58.23-7.496,86.715-0.84C436.789,113.666,436.508,143.505,429.293,171.9L429.293,171.9z M429.293,171.9" />
                    </g>

                    <line class="fire first" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="150.723" y1="422.976" x2="120.381" y2="454.03" />

                    <line class="fire second" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="122.667" y1="391.825" x2="49.821" y2="466.381" />

                    <line class="fire third" style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="92.664" y1="363.96" x2="71.825" y2="385.289" />
                  </g>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  </section>
