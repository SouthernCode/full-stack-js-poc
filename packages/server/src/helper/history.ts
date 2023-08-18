import axios from "axios";

export function postToHistoryService(name: string, status: number) {
  // Post to history
  const historyResponse = axios.post("http://localhost:3002/api/history", {
    searchParam: name,
    status,
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
