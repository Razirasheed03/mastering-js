    //// ========== normal method ========= ////////
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam")); ///true
console.log(isPalindrome("razi"));  ///false

///////========== Using Recursion ============///////////

function PalindromeUsingRec(str) {
    if (str.length <= 1) return true
    if (str[0] !== str[str.length - 1]) return false
    return PalindromeUsingRec(str.slice(1, -1))
}
console.log(PalindromeUsingRec("madam"))    //true
console.log(PalindromeUsingRec("razi"))     //false