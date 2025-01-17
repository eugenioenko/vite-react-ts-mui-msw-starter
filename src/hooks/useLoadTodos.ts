import { useEffect, useState } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function useLoadTodos() {
  const [data, setData] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadTodos(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return { data, isLoading };
}
