// Supabase replaced with direct API calls to the Express backend
export const supabase = {
  functions: {
    invoke: async (name: string, options?: { body?: unknown }) => {
      try {
        const res = await fetch(`/api/${name}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(options?.body ?? {}),
        });
        const data = await res.json();
        if (!res.ok) {
          return { data: null, error: data };
        }
        return { data, error: null };
      } catch (err) {
        return { data: null, error: err };
      }
    },
  },
};
