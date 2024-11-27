export const createSlug = (title: string) => {
  return title.toLowerCase().trim().replace(/\s+/g, "-");
};
