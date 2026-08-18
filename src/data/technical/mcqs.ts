// Generated Question Bank file
import { MCQQuestion } from '../../types';

export const technicalQuestions: any[] = [
  {
    "id": "TC001",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "easy",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 1)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC002",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "easy",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 1)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC003",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "easy",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 1)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC004",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "medium",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 1)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC005",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "medium",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 1)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC006",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 1)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC007",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "medium",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 1)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC008",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 1)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC009",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "hard",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 2)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC010",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "hard",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 2)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC011",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "easy",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 2)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC012",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "easy",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 2)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC013",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "easy",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 2)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC014",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 2)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC015",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "medium",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 2)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC016",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 2)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC017",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "medium",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 3)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC018",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "medium",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 3)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC019",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "hard",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 3)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC020",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "hard",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 3)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC021",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "easy",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 3)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC022",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "easy",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 3)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC023",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "easy",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 3)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC024",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 3)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC025",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "medium",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 4)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC026",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "medium",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 4)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC027",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "medium",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 4)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC028",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "medium",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 4)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC029",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "hard",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 4)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC030",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "hard",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 4)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC031",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "easy",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 4)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC032",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "easy",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 4)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC033",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "easy",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 5)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC034",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "medium",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 5)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC035",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "medium",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 5)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC036",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "medium",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 5)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC037",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "medium",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 5)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC038",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 5)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC039",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "hard",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 5)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC040",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "hard",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 5)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC041",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "easy",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 6)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC042",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "easy",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 6)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC043",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "easy",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 6)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC044",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "medium",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 6)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC045",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "medium",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 6)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC046",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 6)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC047",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "medium",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 6)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC048",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 6)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC049",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "hard",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 7)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC050",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "hard",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 7)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC051",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "easy",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 7)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC052",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "easy",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 7)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC053",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "easy",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 7)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC054",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 7)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC055",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "medium",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 7)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC056",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 7)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC057",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "medium",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 8)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC058",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "medium",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 8)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC059",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "hard",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 8)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC060",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "hard",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 8)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC061",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "easy",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 8)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC062",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "easy",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 8)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC063",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "easy",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 8)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC064",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 8)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC065",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "medium",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 9)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC066",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "medium",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 9)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC067",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "medium",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 9)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC068",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "medium",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 9)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC069",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "hard",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 9)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC070",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "hard",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 9)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC071",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "easy",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 9)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC072",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "easy",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 9)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC073",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "easy",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 10)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC074",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "medium",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 10)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC075",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "medium",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 10)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC076",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "medium",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 10)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC077",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "medium",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 10)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC078",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 10)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC079",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "hard",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 10)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC080",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "hard",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 10)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC081",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "easy",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 11)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC082",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "easy",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 11)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC083",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "easy",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 11)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC084",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "medium",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 11)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC085",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "medium",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 11)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC086",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 11)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC087",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "medium",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 11)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC088",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 11)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC089",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "hard",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 12)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC090",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "hard",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 12)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC091",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "easy",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 12)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC092",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "easy",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 12)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC093",
    "section": "technical",
    "topic": "Cloud",
    "subtopic": "service-models",
    "difficulty": "easy",
    "question": "In cloud computing, hosting an application on a managed Kubernetes cluster where you manage only code deployment represents which model? (Topic Set 12)",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-Premise"
    ],
    "correctAnswer": 1,
    "explanation": "Platform as a Service (PaaS) provides execution environments without the need to manage virtual machines, virtualization, storage, or operating systems.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "cloud"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC094",
    "section": "technical",
    "topic": "Software Engineering",
    "subtopic": "agile",
    "difficulty": "medium",
    "question": "In Scrum, what is the role responsible for prioritizing the product backlog? (Topic Set 12)",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": 1,
    "explanation": "The Product Owner is solely responsible for managing the Product Backlog, prioritizing its items, and representing customer value.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "software engineering"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC095",
    "section": "technical",
    "topic": "DSA Fundamentals",
    "subtopic": "complexity",
    "difficulty": "medium",
    "question": "What is the worst-case time complexity of searching an element in a binary search tree (BST) of height h? (Topic Set 12)",
    "options": [
      "O(1)",
      "O(log n)",
      "O(h)",
      "O(n log n)"
    ],
    "correctAnswer": 2,
    "explanation": "Searching in a BST traverses from root to leaf, taking at most O(h) steps, where h is the height. In a skewed tree, h can be equal to n.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dsa fundamentals"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC096",
    "section": "technical",
    "topic": "SQL",
    "subtopic": "joins",
    "difficulty": "medium",
    "question": "Which type of join returns all rows from the left table and only matching rows from the right table? (Topic Set 12)",
    "options": [
      "INNER JOIN",
      "RIGHT OUTER JOIN",
      "LEFT OUTER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 2,
    "explanation": "A LEFT OUTER JOIN returns all records from the left table, and matching records from the right table. For non-matches, NULL is returned.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "sql"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC097",
    "section": "technical",
    "topic": "OOP",
    "subtopic": "polymorphism",
    "difficulty": "medium",
    "question": "Which of the following is resolved at runtime in Object-Oriented Programming? (Topic Set 13)",
    "options": [
      "Method Overloading",
      "Method Overriding",
      "Constructor Overloading",
      "Operator Overloading"
    ],
    "correctAnswer": 1,
    "explanation": "Method Overriding represents runtime polymorphism (dynamic binding) where the overriding method is resolved at runtime depending on the object type, whereas overloading is resolved at compile time (static binding).",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "oop"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC098",
    "section": "technical",
    "topic": "DBMS",
    "subtopic": "normalization",
    "difficulty": "medium",
    "question": "A relation is in 3NF if it is in 2NF and has which of the following characteristics? (Topic Set 13)",
    "options": [
      "No multi-valued attributes",
      "No partial dependencies",
      "No transitive dependencies",
      "Every determinant is a super key"
    ],
    "correctAnswer": 2,
    "explanation": "3NF removes transitive dependencies (non-prime attributes depending on other non-prime attributes). Partial dependencies are removed in 2NF.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "dbms"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC099",
    "section": "technical",
    "topic": "Operating Systems",
    "subtopic": "deadlocks",
    "difficulty": "hard",
    "question": "Which of the following conditions is NOT required for a deadlock to occur? (Topic Set 13)",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    "correctAnswer": 2,
    "explanation": "Deadlock requires four Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Thus, \"Preemption\" (forced release of resources) actually prevents deadlocks, so \"No preemption\" is the required condition.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "operating systems"
    ],
    "estimatedSeconds": 45
  },
  {
    "id": "TC100",
    "section": "technical",
    "topic": "Computer Networks",
    "subtopic": "protocols",
    "difficulty": "hard",
    "question": "Which TCP/IP protocol operates at the Application layer and uses port 53? (Topic Set 13)",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "explanation": "DNS (Domain Name System) operates at the application layer and uses UDP/TCP port 53.",
    "sourceType": "reference-derived",
    "tags": [
      "technical-mcq",
      "computer networks"
    ],
    "estimatedSeconds": 45
  }
];
