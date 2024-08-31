export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  const start = text.slice(0, 10);
  const end = text.slice(-3);

  return `${start}...${end}`;
};
