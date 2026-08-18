// Generated Question Bank file
import { MCQQuestion } from '../../types';

export const pseudocodeQuestions: any[] = [
  {
    "id": "PS001",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 001)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS002",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 002)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS003",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 003)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS004",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 004)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS005",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 005)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS006",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 006)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS007",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 007)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS008",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 008)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS009",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "hard",
    "question": "What is the output of the following recursive function? (Ref Type 009)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS010",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "hard",
    "question": "What is the output of the following pseudocode? (Ref Type 010)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS011",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 011)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS012",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 012)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS013",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 013)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS014",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 014)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS015",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 015)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS016",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 016)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS017",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 017)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS018",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 018)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS019",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "hard",
    "question": "What is the output of the following pseudocode? (Ref Type 019)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS020",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "hard",
    "question": "What will be the output of the following pseudocode? (Ref Type 020)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS021",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 021)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS022",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 022)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS023",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 023)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS024",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 024)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS025",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 025)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS026",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 026)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS027",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 027)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS028",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 028)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS029",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "hard",
    "question": "What will be the output of the following pseudocode? (Ref Type 029)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS030",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "hard",
    "question": "What is the output of the following recursive function? (Ref Type 030)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS031",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 031)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS032",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 032)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS033",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 033)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS034",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 034)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS035",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 035)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS036",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 036)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS037",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 037)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS038",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 038)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS039",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "hard",
    "question": "What is the output of the following recursive function? (Ref Type 039)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS040",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "hard",
    "question": "What is the output of the following pseudocode? (Ref Type 040)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS041",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 041)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS042",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 042)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS043",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 043)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS044",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 044)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS045",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 045)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS046",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 046)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS047",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 047)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS048",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 048)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS049",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "hard",
    "question": "What is the output of the following pseudocode? (Ref Type 049)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS050",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "hard",
    "question": "What will be the output of the following pseudocode? (Ref Type 050)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS051",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 051)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS052",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 052)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS053",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 053)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS054",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 054)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS055",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 055)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS056",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 056)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS057",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 057)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS058",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 058)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS059",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "hard",
    "question": "What will be the output of the following pseudocode? (Ref Type 059)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS060",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "hard",
    "question": "What is the output of the following recursive function? (Ref Type 060)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS061",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 061)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS062",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 062)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS063",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 063)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS064",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 064)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS065",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 065)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS066",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 066)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS067",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 067)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS068",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 068)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS069",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "hard",
    "question": "What is the output of the following recursive function? (Ref Type 069)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS070",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "hard",
    "question": "What is the output of the following pseudocode? (Ref Type 070)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS071",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 071)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS072",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 072)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS073",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 073)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS074",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 074)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS075",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 075)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS076",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 076)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS077",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 077)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS078",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 078)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS079",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "hard",
    "question": "What is the output of the following pseudocode? (Ref Type 079)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS080",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "hard",
    "question": "What will be the output of the following pseudocode? (Ref Type 080)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS081",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 081)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS082",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 082)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS083",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 083)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS084",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 084)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS085",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 085)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS086",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 086)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS087",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 087)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS088",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 088)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS089",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "hard",
    "question": "What will be the output of the following pseudocode? (Ref Type 089)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS090",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "hard",
    "question": "What is the output of the following recursive function? (Ref Type 090)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS091",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "easy",
    "question": "What is the output of the following pseudocode? (Ref Type 091)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS092",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "easy",
    "question": "What will be the output of the following pseudocode? (Ref Type 092)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS093",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "easy",
    "question": "What is the output of the following recursive function? (Ref Type 093)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS094",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 094)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS095",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 095)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS096",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "medium",
    "question": "What is the output of the following recursive function? (Ref Type 096)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS097",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "medium",
    "question": "What is the output of the following pseudocode? (Ref Type 097)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS098",
    "section": "pseudocode",
    "topic": "loops",
    "subtopic": "for-loop",
    "difficulty": "medium",
    "question": "What will be the output of the following pseudocode? (Ref Type 098)",
    "code": "Integer i, sum = 0\nFor i = 1 to 4\n   If (i % 2 == 0)\n       sum = sum + i * 2\n   Else\n       sum = sum + i\nEnd For\nPrint sum",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Let's trace the loop:\n- i = 1: Odd, sum = 0 + 1 = 1\n- i = 2: Even, sum = 1 + 2 * 2 = 5\n- i = 3: Odd, sum = 5 + 3 = 8\n- i = 4: Even, sum = 8 + 4 * 2 = 16\nLoop ends. Output is 16.",
    "traceTable": {
      "headers": [
        "Iteration",
        "i",
        "i % 2",
        "sum"
      ],
      "rows": [
        [
          "Start",
          "-",
          "-",
          "0"
        ],
        [
          "i = 1",
          "1",
          "1",
          "1"
        ],
        [
          "i = 2",
          "2",
          "0",
          "5"
        ],
        [
          "i = 3",
          "3",
          "1",
          "8"
        ],
        [
          "i = 4",
          "4",
          "0",
          "16"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "loops"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS099",
    "section": "pseudocode",
    "topic": "recursion",
    "subtopic": "tracing",
    "difficulty": "hard",
    "question": "What is the output of the following recursive function? (Ref Type 099)",
    "code": "Function solve(Integer n)\n    If (n <= 1)\n        Return 1\n    Return n * solve(n - 2)\nEnd Function\n\nPrint solve(5)",
    "options": [
      "120",
      "15",
      "8",
      "24"
    ],
    "correctAnswer": 1,
    "explanation": "Recursion trace:\n- solve(5) returns 5 * solve(3)\n- solve(3) returns 3 * solve(1)\n- solve(1) hits base case, returns 1\nSo solve(5) = 5 * 3 * 1 = 15.",
    "traceTable": {
      "headers": [
        "Call Stack",
        "n",
        "Return Expression",
        "Calculated Value"
      ],
      "rows": [
        [
          "solve(5)",
          "5",
          "5 * solve(3)",
          "15"
        ],
        [
          "solve(3)",
          "3",
          "3 * solve(1)",
          "3"
        ],
        [
          "solve(1)",
          "1",
          "1",
          "1"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "recursion"
    ],
    "estimatedSeconds": 60
  },
  {
    "id": "PS100",
    "section": "pseudocode",
    "topic": "bitwise",
    "subtopic": "AND-OR",
    "difficulty": "hard",
    "question": "What is the output of the following pseudocode? (Ref Type 100)",
    "code": "Integer a, b, c\nSet a = 4, b = 6, c = 2\nc = (a & b) + (a | b)\nPrint c",
    "options": [
      "4",
      "10",
      "14",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "Let's trace:\n1. a = 4 (Binary: 0100)\n2. b = 6 (Binary: 0110)\n3. a & b (Bitwise AND) = 0100 & 0110 = 0100 = 4\n4. a | b (Bitwise OR) = 0100 | 0110 = 0110 = 6\n5. c = 4 + 6 = 10.\nFinal Output: 10.",
    "traceTable": {
      "headers": [
        "Step",
        "a",
        "b",
        "a & b",
        "a | b",
        "c"
      ],
      "rows": [
        [
          "Init",
          "4",
          "6",
          "-",
          "-",
          "-"
        ],
        [
          "Bitwise AND",
          "4",
          "6",
          "4",
          "-",
          "-"
        ],
        [
          "Bitwise OR",
          "4",
          "6",
          "4",
          "6",
          "-"
        ],
        [
          "Add & Print",
          "4",
          "6",
          "4",
          "6",
          "10"
        ]
      ]
    },
    "sourceType": "reference-derived",
    "tags": [
      "pseudocode",
      "bitwise"
    ],
    "estimatedSeconds": 60
  }
];
