export function detectLanguage(text: string) {
  const banglaRegex = /[\u0980-\u09FF]/;

  if (banglaRegex.test(text)) {
    return "Bangla";
  }
  return "English";
}

export function detectIntent(text: string) {
  const lowerText = text.toLowerCase();

  if (
    lowerText.includes("disease") ||
    lowerText.includes("problem") ||
    lowerText.includes("রোগ") ||
    lowerText.includes("সমস্যা")
  ) {
    return "detect_disease";
  }

  if (
    lowerText.includes("help") ||
    lowerText.includes("assist") ||
    lowerText.includes("সাহায্য")
  ) {
    return "help";
  }

  return "unknown";
}