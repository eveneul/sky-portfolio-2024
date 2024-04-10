export function transformToScroll(
  prev: number,
  next: number,
  scrollY: number,
  start: number,
  end: number
) {
  const value = prev + ((next - prev) * (scrollY - start)) / (end - start);
  if (value > next) return next;
  return value;
}
