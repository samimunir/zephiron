export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const groupKey = item[key] as string;
    acc[groupKey] = [...(acc[groupKey] || []), item];
    return acc;
  }, {} as Record<string, T[]>);
}

export function groupAndCount<T>(arr: T[], key: keyof T) {
  return Object.entries(groupBy(arr, key)).map(([label, items]) => ({
    name: label,
    value: items.length,
  }));
}
