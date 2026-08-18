import { MCQQuestion, PseudocodeQuestion, ReadingPassage, ListeningQuestion, SpeakingPrompt, BusinessWritingPrompt, CodingProblem, InterviewQuestion } from '../src/types';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Since this runs in Node, we will read the compiled/resolved files.
// To avoid complex ES Module loader setups in tsx, we will write a script that loads files and runs checks.
// Let's resolve the paths relative to the script location.
const DATA_DIR = path.resolve(__dirname, '../src/data');

interface ValidationResult {
  errors: string[];
  warnings: string[];
  totalChecked: number;
}

const result: ValidationResult = {
  errors: [],
  warnings: [],
  totalChecked: 0,
};

const seenIds = new Set<string>();
const seenText = new Set<string>();

const validateMCQ = (q: MCQQuestion, file: string) => {
  result.totalChecked++;
  if (!q.id) result.errors.push(`[${file}] Missing ID`);
  else if (seenIds.has(q.id)) result.errors.push(`[${file}] Duplicate ID: ${q.id}`);
  else seenIds.add(q.id);

  if (!q.question || q.question.trim() === '') result.errors.push(`[${file}] Empty question in ${q.id}`);
  else {
    const key = q.question.trim().toLowerCase();
    if (seenText.has(key)) result.warnings.push(`[${file}] Question text might be duplicated for ID: ${q.id}`);
    seenText.add(key);
  }

  if (!q.options || q.options.length < 2) result.errors.push(`[${file}] Less than 2 options in ${q.id}`);
  else {
    const optSet = new Set(q.options);
    if (optSet.size !== q.options.length) result.errors.push(`[${file}] Duplicate options in ${q.id}`);
  }

  if (q.correctAnswer === undefined || q.correctAnswer < 0 || (q.options && q.correctAnswer >= q.options.length)) {
    result.errors.push(`[${file}] Invalid correctAnswer index (${q.correctAnswer}) in ${q.id}`);
  }

  if (!q.explanation || q.explanation.trim() === '') result.errors.push(`[${file}] Missing explanation in ${q.id}`);
  if (!q.topic) result.errors.push(`[${file}] Missing topic in ${q.id}`);
  if (!q.difficulty || !['easy', 'medium', 'hard'].includes(q.difficulty)) result.errors.push(`[${file}] Invalid difficulty in ${q.id}`);
  if (!q.section) result.errors.push(`[${file}] Missing section in ${q.id}`);
};

const validatePseudocode = (q: PseudocodeQuestion, file: string) => {
  validateMCQ(q as unknown as MCQQuestion, file);
  if (!q.code || q.code.trim() === '') {
    result.errors.push(`[${file}] Pseudocode question ${q.id} is missing code block`);
  }
};

const validateReading = (passage: ReadingPassage, file: string) => {
  result.totalChecked++;
  if (!passage.id) result.errors.push(`[${file}] Missing passage ID`);
  else if (seenIds.has(passage.id)) result.errors.push(`[${file}] Duplicate ID: ${passage.id}`);
  else seenIds.add(passage.id);

  if (!passage.passage || passage.passage.trim() === '') result.errors.push(`[${file}] Empty passage text in ${passage.id}`);

  if (!passage.questions || passage.questions.length === 0) {
    result.errors.push(`[${file}] Passage ${passage.id} has no questions`);
  } else {
    passage.questions.forEach((q, index) => {
      if (!q.id) result.errors.push(`[${file}] Question index ${index} in passage ${passage.id} is missing ID`);
      else if (seenIds.has(q.id)) result.errors.push(`[${file}] Duplicate ID in passage questions: ${q.id}`);
      else seenIds.add(q.id);

      if (!q.question || q.question.trim() === '') result.errors.push(`[${file}] Empty question ${q.id} in passage ${passage.id}`);
      if (!q.options || q.options.length < 2) result.errors.push(`[${file}] Less than 2 options in question ${q.id} of passage ${passage.id}`);
      if (q.correctAnswer === undefined || q.correctAnswer < 0 || (q.options && q.correctAnswer >= q.options.length)) {
        result.errors.push(`[${file}] Invalid correctAnswer index (${q.correctAnswer}) in question ${q.id} of passage ${passage.id}`);
      }
      if (!q.explanation || q.explanation.trim() === '') result.errors.push(`[${file}] Missing explanation in question ${q.id} of passage ${passage.id}`);
    });
  }
};

const validateListening = (q: ListeningQuestion, file: string) => {
  validateMCQ(q as unknown as MCQQuestion, file);
  if (!q.audioText || q.audioText.trim() === '') {
    result.errors.push(`[${file}] Listening question ${q.id} is missing audio text transcript`);
  }
};

const validateSpeaking = (q: SpeakingPrompt, file: string) => {
  result.totalChecked++;
  if (!q.id) result.errors.push(`[${file}] Missing Speaking ID`);
  else if (seenIds.has(q.id)) result.errors.push(`[${file}] Duplicate ID: ${q.id}`);
  else seenIds.add(q.id);

  if (!q.prompt || q.prompt.trim() === '') result.errors.push(`[${file}] Empty speaking prompt in ${q.id}`);
  if (!q.checklist || q.checklist.length === 0) result.errors.push(`[${file}] Speaking prompt ${q.id} requires evaluation checklist`);
};

const validateWriting = (q: BusinessWritingPrompt, file: string) => {
  result.totalChecked++;
  if (!q.id) result.errors.push(`[${file}] Missing Writing ID`);
  else if (seenIds.has(q.id)) result.errors.push(`[${file}] Duplicate ID: ${q.id}`);
  else seenIds.add(q.id);

  if (!q.prompt || q.prompt.trim() === '') result.errors.push(`[${file}] Empty writing prompt in ${q.id}`);
  if (!q.modelAnswer || q.modelAnswer.trim() === '') result.errors.push(`[${file}] Writing prompt ${q.id} requires model answer`);
  if (!q.checklist || q.checklist.length === 0) result.errors.push(`[${file}] Writing prompt ${q.id} requires checklist`);
};

const validateCoding = (q: CodingProblem, file: string) => {
  result.totalChecked++;
  if (!q.id) result.errors.push(`[${file}] Missing Coding ID`);
  else if (seenIds.has(q.id)) result.errors.push(`[${file}] Duplicate ID: ${q.id}`);
  else seenIds.add(q.id);

  if (!q.title || q.title.trim() === '') result.errors.push(`[${file}] Coding problem ${q.id} has empty title`);
  if (!q.description || q.description.trim() === '') result.errors.push(`[${file}] Coding problem ${q.id} has empty description`);
  if (!q.inputFormat) result.errors.push(`[${file}] Coding problem ${q.id} missing input format`);
  if (!q.outputFormat) result.errors.push(`[${file}] Coding problem ${q.id} missing output format`);
  if (!q.examples || q.examples.length === 0) result.errors.push(`[${file}] Coding problem ${q.id} has no examples`);
  if (!q.solutions || !q.solutions.cpp || !q.solutions.java || !q.solutions.c) {
    result.errors.push(`[${file}] Coding problem ${q.id} must contain C++, Java, and C reference solutions`);
  }
};

const validateInterview = (q: InterviewQuestion, file: string) => {
  result.totalChecked++;
  if (!q.id) result.errors.push(`[${file}] Missing Interview ID`);
  else if (seenIds.has(q.id)) result.errors.push(`[${file}] Duplicate ID: ${q.id}`);
  else seenIds.add(q.id);

  if (!q.question || q.question.trim() === '') result.errors.push(`[${file}] Empty interview question in ${q.id}`);
  if (!q.shortAnswer || q.shortAnswer.trim() === '') result.errors.push(`[${file}] Interview question ${q.id} missing shortAnswer`);
  if (!q.idealAnswer || q.idealAnswer.trim() === '') result.errors.push(`[${file}] Interview question ${q.id} missing idealAnswer`);
  if (!q.keyPoints || q.keyPoints.length === 0) result.errors.push(`[${file}] Interview question ${q.id} missing key points`);
};

// Main execution
const main = async () => {
  console.log('Running questions validation...');

  try {
    // Dynamic import of TS files using standard require or dynamic imports if they exist.
    // However, since we might run before compile, we'll read their files and parse the exported constants,
    // or evaluate them. Let's make this script robust. It can import them using tsx directly!
    // Since we'll run this script with `npx tsx scripts/validateQuestions.ts`, we can use ES6 imports!
    
    // Let's resolve the files
    const importData = async (filename: string) => {
      const fullPath = path.join(DATA_DIR, filename);
      if (!fs.existsSync(fullPath)) {
        console.warn(`Data file not found yet: ${fullPath}`);
        return null;
      }
      return await import(pathToFileURL(fullPath).href);
    };

    // 1. English - Situational
    const situationalMod = await importData('english/situational.ts');
    if (situationalMod && situationalMod.situationalQuestions) {
      situationalMod.situationalQuestions.forEach((q: any) => validateMCQ(q, 'english/situational.ts'));
    }

    // 2. English - Reading
    const readingMod = await importData('english/reading.ts');
    if (readingMod && readingMod.readingPassages) {
      readingMod.readingPassages.forEach((p: any) => validateReading(p, 'english/reading.ts'));
    }

    // 3. English - Listening
    const listeningMod = await importData('english/listening.ts');
    if (listeningMod && listeningMod.listeningQuestions) {
      listeningMod.listeningQuestions.forEach((q: any) => validateListening(q, 'english/listening.ts'));
    }

    // 4. English - Speaking
    const speakingMod = await importData('english/speaking.ts');
    if (speakingMod && speakingMod.speakingPrompts) {
      speakingMod.speakingPrompts.forEach((q: any) => validateSpeaking(q, 'english/speaking.ts'));
    }

    // 5. English - Writing
    const writingMod = await importData('english/writing.ts');
    if (writingMod && writingMod.writingPrompts) {
      writingMod.writingPrompts.forEach((q: any) => validateWriting(q, 'english/writing.ts'));
    }

    // 6. English - Grammar
    const grammarMod = await importData('english/grammar.ts');
    if (grammarMod && grammarMod.grammarQuestions) {
      grammarMod.grammarQuestions.forEach((q: any) => validateMCQ(q, 'english/grammar.ts'));
    }

    // 7. Technical MCQs
    const technicalMod = await importData('technical/mcqs.ts');
    if (technicalMod && technicalMod.technicalQuestions) {
      technicalMod.technicalQuestions.forEach((q: any) => validateMCQ(q, 'technical/mcqs.ts'));
    }

    // 8. Pseudocode
    const pseudocodeMod = await importData('pseudocode/questions.ts');
    if (pseudocodeMod && pseudocodeMod.pseudocodeQuestions) {
      pseudocodeMod.pseudocodeQuestions.forEach((q: any) => validatePseudocode(q, 'pseudocode/questions.ts'));
    }

    // 9. Coding
    const codingMod = await importData('coding/problems.ts');
    if (codingMod && codingMod.codingProblems) {
      codingMod.codingProblems.forEach((q: any) => validateCoding(q, 'coding/problems.ts'));
    }

    // 10. Interview
    const interviewMod = await importData('interview/questions.ts');
    if (interviewMod && interviewMod.interviewQuestions) {
      interviewMod.interviewQuestions.forEach((q: any) => validateInterview(q, 'interview/questions.ts'));
    }

  } catch (err) {
    console.error('Error during importing and validating question bank files:', err);
    process.exit(1);
  }

  // Print results
  console.log('\n======================================');
  console.log(`Validation finished.`);
  console.log(`Total questions/tasks checked: ${result.totalChecked}`);
  console.log(`Warnings: ${result.warnings.length}`);
  console.log(`Errors: ${result.errors.length}`);
  console.log('======================================\n');

  if (result.warnings.length > 0) {
    console.log('--- WARNINGS ---');
    result.warnings.slice(0, 20).forEach((w) => console.warn(w));
    if (result.warnings.length > 20) console.log(`... and ${result.warnings.length - 20} more warnings.`);
  }

  if (result.errors.length > 0) {
    console.log('--- ERRORS ---');
    result.errors.forEach((e) => console.error(e));
    console.log('\nBuild failed due to critical validation errors.');
    process.exit(1);
  } else {
    console.log('Validation passed successfully!');
    process.exit(0);
  }
};

main();
