// Generated Question Bank file
import { CodingProblem } from '../../types';

export const codingProblems: any[] = [
  {
    "id": "CODE001",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 1)",
    "difficulty": "easy",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-001)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE002",
    "section": "coding",
    "title": "Valid Anagram (Problem 2)",
    "difficulty": "medium",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-002)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE003",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 3)",
    "difficulty": "hard",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-003)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE004",
    "section": "coding",
    "title": "Valid Anagram (Problem 4)",
    "difficulty": "easy",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-004)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE005",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 5)",
    "difficulty": "medium",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-005)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE006",
    "section": "coding",
    "title": "Valid Anagram (Problem 6)",
    "difficulty": "hard",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-006)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE007",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 7)",
    "difficulty": "easy",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-007)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE008",
    "section": "coding",
    "title": "Valid Anagram (Problem 8)",
    "difficulty": "medium",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-008)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE009",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 9)",
    "difficulty": "hard",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-009)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE010",
    "section": "coding",
    "title": "Valid Anagram (Problem 10)",
    "difficulty": "easy",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-010)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE011",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 11)",
    "difficulty": "medium",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-011)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE012",
    "section": "coding",
    "title": "Valid Anagram (Problem 12)",
    "difficulty": "hard",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-012)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE013",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 13)",
    "difficulty": "easy",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-013)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE014",
    "section": "coding",
    "title": "Valid Anagram (Problem 14)",
    "difficulty": "medium",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-014)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE015",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 15)",
    "difficulty": "hard",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-015)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE016",
    "section": "coding",
    "title": "Valid Anagram (Problem 16)",
    "difficulty": "easy",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-016)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE017",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 17)",
    "difficulty": "medium",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-017)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE018",
    "section": "coding",
    "title": "Valid Anagram (Problem 18)",
    "difficulty": "hard",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-018)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE019",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 19)",
    "difficulty": "easy",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-019)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE020",
    "section": "coding",
    "title": "Valid Anagram (Problem 20)",
    "difficulty": "medium",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-020)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE021",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 21)",
    "difficulty": "hard",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-021)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE022",
    "section": "coding",
    "title": "Valid Anagram (Problem 22)",
    "difficulty": "easy",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-022)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE023",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 23)",
    "difficulty": "medium",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-023)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE024",
    "section": "coding",
    "title": "Valid Anagram (Problem 24)",
    "difficulty": "hard",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-024)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE025",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 25)",
    "difficulty": "easy",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-025)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE026",
    "section": "coding",
    "title": "Valid Anagram (Problem 26)",
    "difficulty": "medium",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-026)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE027",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 27)",
    "difficulty": "hard",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-027)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE028",
    "section": "coding",
    "title": "Valid Anagram (Problem 28)",
    "difficulty": "easy",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-028)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE029",
    "section": "coding",
    "title": "Move All Zeroes to End (Problem 29)",
    "difficulty": "medium",
    "topics": [
      "arrays",
      "two-pointers"
    ],
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array. (Ref Code: CODE-029)",
    "inputFormat": "An integer array `nums` of size N.",
    "outputFormat": "Modify the array in-place.",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "The elements 1, 3, and 12 are shifted forward, maintaining their relative order. The zeroes are pushed to the end."
      }
    ],
    "hints": [
      "Try using a pointer to track the position of the last non-zero element found.",
      "Iterate through the array. If the current element is non-zero, swap it with the element at the tracking pointer, then increment the tracking pointer."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1)",
    "solutions": {
      "cpp": "void moveZeroes(vector<int>& nums) {\n    int lastNonZero = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != 0) {\n            swap(nums[lastNonZero++], nums[i]);\n        }\n    }\n}",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        int lastNonZero = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != 0) {\n                int temp = nums[lastNonZero];\n                nums[lastNonZero] = nums[i];\n                nums[i] = temp;\n                lastNonZero++;\n            }\n        }\n    }\n}",
      "c": "void moveZeroes(int* nums, int numsSize) {\n    int lastNonZero = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != 0) {\n            int temp = nums[lastNonZero];\n            nums[lastNonZero] = nums[i];\n            nums[i] = temp;\n            lastNonZero++;\n        }\n    }\n}"
    },
    "sourceType": "reference-derived"
  },
  {
    "id": "CODE030",
    "section": "coding",
    "title": "Valid Anagram (Problem 30)",
    "difficulty": "hard",
    "topics": [
      "strings",
      "hashing"
    ],
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. (Ref Code: CODE-030)",
    "inputFormat": "Two lowercase alphabetic strings `s` and `t`.",
    "outputFormat": "Boolean value representing whether the strings are anagrams.",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      }
    ],
    "hints": [
      "A hash table or frequency array can count letter occurrences.",
      "Increment counts for characters in `s`, and decrement for characters in `t`. If all frequencies return to zero, they are anagrams."
    ],
    "expectedTimeComplexity": "O(n)",
    "expectedSpaceComplexity": "O(1) - since character set is fixed (26 letters)",
    "solutions": {
      "cpp": "bool isAnagram(string s, string t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (int i = 0; i < s.length(); i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (int i = 0; i < s.length(); i++) {\n            count[s.charAt(i) - 'a']++;\n            count[t.charAt(i) - 'a']--;\n        }\n        for (int val : count) {\n            if (val != 0) return false;\n        }\n        return true;\n    }\n}",
      "c": "bool isAnagram(char* s, char* t) {\n    int lenS = strlen(s);\n    int lenT = strlen(t);\n    if (lenS != lenT) return false;\n    int count[26] = {0};\n    for (int i = 0; i < lenS; i++) {\n        count[s[i] - 'a']++;\n        count[t[i] - 'a']--;\n    }\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}"
    },
    "sourceType": "reference-derived"
  }
];
