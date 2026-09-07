export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

export type SuggestionIcon = "knot" | "rocket" | "code" | "globe";

export interface AskAiSuggestion {
  id: string;
  icon: SuggestionIcon;
  questionKey: "hardest" | "speed" | "stack" | "seoul";
}
