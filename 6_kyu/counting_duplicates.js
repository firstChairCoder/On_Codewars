/**
 * Title: Count the number of Duplicates
 * 
 * Description: Write a function that will return the count of distinct 
 * case-insensitive alphabetic characters and numeric digits that occur more than once 
 * in the input string. The input string can be assumed to contain only alphabets 
 * (both uppercase and lowercase) and numeric digits.
 * 
 * Example: 
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
**/

function duplicateCount(text) {
	let lowercased = text.toLowerCase(); //this changes every character to lower case
	let newObj = {}; // Declaring an empty object
	let counter = 0; // declare counter variable
	for (let i = 0; i < lowercased.length; i++) {
		if (!newObj[lowercased[i]]) {
			newObj[lowercased[i]] = 1; //if newObj has no property with key of that letter, add it and assign number 1, i.e if lowercased[i] = a, then myObj: {a: 1}
		} else if (newObj[lowercased[i]] < 2) {
			newObj[lowercased[i]] += 1; //if lowercased[i]'s value is already present in newObj, and assigned number (number of time value repeats) is less than 2, add to general counter value
			counter++;
		}
	}
	return counter; //return counter
}