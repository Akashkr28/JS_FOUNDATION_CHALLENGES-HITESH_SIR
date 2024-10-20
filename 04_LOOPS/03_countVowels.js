/*Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str. */

function countVowels(str) {
    const vowels = "aeiouAEIOU"
    let count = 0;
    for (let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(countVowels("akash"))