<!DOCTYPE html>
<html lang="en">
<!-- this had to be a php file because the form was not working due to NginX not being able to handle the form data. -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chamber of Commerce</title>
    <meta name="description" content="Blake's WDD 230 chamber of commerce project for BYUI">
    <meta name="author" content="Blake (kaioker)">
    <meta name="theme-color" content="rgb(22,61,90)">
    <link rel="stylesheet" href="styles/base.css">
    <link rel="stylesheet" href="styles/larger.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">
    <meta property="og:title" content="Chamber of Commerce">
    <meta property="og:description" content="Blake's WDD 230 chamber of commerce project for BYUI">
    <meta property="og:image" content="https://byui.projectpine.com/wdd230/chamber/images/logo.png">
    <meta property="og:url" content="https://byui.projectpine.com/wdd230/chamber/">
    <meta property="og:type" content="website">
    <meta http-equiv="refresh" content="5; url=/wdd230/chamber/index.html">
</head>

<body>
    <div class="viewport">
        <hr>
        <header>
            <a href="/wdd230/chamber/index.html">
                <img class="logo" src="images/logo.png">
            </a>
        </header>
        <nav id="mainnav">
            <ul>
                <li class="hamburger" id="menubutton">
                    <img src="images/hamburger.png" alt="hamburger menu">
                </li>

                <li class="menuItem"><a href="/wdd230/chamber/index.html">Home</a></li>
                <li class="menuItem"><a href="/wdd230/chamber/discover.html">Discover</a></li>
                <li class="menuItem"><a href="/wdd230/chamber/directory.html">Members</a></li>
                <li class="menuItem"><a href="/wdd230/chamber/join.html">Join</a></li>

            </ul>
        </nav>
        <main>
            <div class="thanks-container">
                <h1>Thank You!</h1>
                <p>Thank you for your interest in joining the Chamber of Commerce. We will be in touch soon.</p>
            </div>
        </main>
        <footer>
            <div class="ftop">
                <div class="ftopLeft">
                    <h2>City Name</h2>
                    <p>example street</p>
                    <p>mailing address</p>
                </div>
                <div class="ftopRight">
                    <h2>Contact Information</h2>
                    <p>email@example.com</p>
                    <p>888-888-8888</p>
                </div>
            </div>
            <div class="fbottom">
                <span>?? 2023</span>
                <span>Blake</span>
                <span>WDD 230</span>
                <span id="moddate">Date Modified</span>
            </div>
        </footer>
    </div>
    <script src="scripts/menu.js"></script>
</body>

</html>