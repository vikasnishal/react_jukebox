export default function changeQueryFunction(query) {
  return { type: "SET_QUERY", payload: query };
}
