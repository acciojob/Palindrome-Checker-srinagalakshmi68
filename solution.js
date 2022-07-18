// complete the given function

function palindrome(str) {
    var len = str.length;

    // Traversing through the string
    // upto half its length
    for (var i = 0; i < len / 2; i++) {

        // Comparing ith character
        // from starting and len-ith
        // character from end
        if (str[i] != str[len - i - 1])
            return false;
    }

    // If the above loop doesn't return then it is
    // palindrome
    return true;

}
//module.exports = palindrome
let st = prompt();
if (checkPalindrome(st) == true)
    document.write("true");
else
    document.write("false");