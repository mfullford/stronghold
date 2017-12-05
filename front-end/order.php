<?php
/* Set e-mail recipient */
$myemail  = "steadfastcustomknives@gmail.com";
$email_subject = "New Knife Request";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['yourname'], "Enter your name");

$email    = check_input($_POST['email']);

$knife = check_input($_POST['knife']);

$size = check_input($_POST['size']);

$steel = check_input($_POST['steel']);

$thickness = check_input($_POST['how']);

$wood = check_input($_POST['wood']);

$lining = check_input($_POST['lining']);

$pin = check_input($_POST['pin']);

$comments = check_input($_POST['comments'], "Write your comments");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* If URL is not valid set $website to empty */
if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
{
    $website = '';
}

/* Let's prepare the message for the e-mail */
$message = "Hello!

Your contact form has been submitted by:

Name: $yourname
E-mail: $email

Their order is:

Knife Selection: $knife
Size: $size
Steel: $steel
Thickness: $thickness

Type of wood? $wood

Lining: $lining
Pin: $pin

Here are their comments:

Comments:
$comments

Email them back to confirm:
E-mail: $email

";

/* Send the message using mail() function */
mail($myemail, $email_subject, $message);

/* Redirect visitor to the thank you page */
header('Location: thanks.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>