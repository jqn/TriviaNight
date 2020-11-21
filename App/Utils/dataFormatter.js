import { Html5Entities } from "html-entities";

// The Trivia API returns HTML entities in the payload
// Use html-entities to parse them to strings
const entities = new Html5Entities();

export const formatData = (data) => {
  // Add ids and decode html entities in
  // Trivia API payload
  let trivia = data.map((r) => ({
    ...r,
    id: `${Math.floor(Math.random() * 1000)}-${Date.now()}`,
    category: entities.decode(r.category),
    question: entities.decode(r.question),
  }));
  return trivia;
};
