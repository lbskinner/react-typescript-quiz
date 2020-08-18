export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  // use two await, first await the fetch data then await for it to convert to json
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
