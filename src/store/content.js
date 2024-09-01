import { create } from "zustand";

export const useContentStore = create((set) => ({
  contents: [],
  fetchContents: async () => {
    const res = await fetch(
      import.meta.env.API_URL || "http://localhost:3000/content"
    );
    const data = await res.json();
    set({ contents: data });
  },
  createContent: async () => {
    const res = await fetch(
      import.meta.env.API_URL || "http://localhost:3000/content",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "タイトル",
          body: "コンテンツ",
        }),
      }
    );
    const data = await res.json();

    set((state) => ({ contents: [...state.contents, data] }));
  },
  deleteContent: async (id) => {
    await fetch(
      `${import.meta.env.API_URL || "http://localhost:3000/content"}/${id}`,
      {
        method: "DELETE",
      }
    );

    set((state) => {
      const newContents = [...state.contents].filter(
        (content) => content.id !== id
      );
      return { contents: newContents };
    });
  },
  updateContent: async (id, title, body) => {
    await fetch(
      `${import.meta.env.API_URL || "http://localhost:3000/content"}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
        }),
      }
    );

    set((state) => {
      const newContents = state.contents.map((c) => {
        if (c.id === Number(id)) return { ...c, title, body };
        else return c;
      });

      return { contents: newContents };
    });
  },
}));
