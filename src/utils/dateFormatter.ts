export function formatDate(date: string): string {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const timeDifference = Math.abs(currentDate.getTime() - targetDate.getTime());
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = targetDate.toLocaleString("en-nz", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const getTimeCategory = (days: number): string => {
    if (days < 1) return "today";
    if (days < 7) return "days";
    if (days < 30) return "weeks";
    if (days < 365) return "months";
    return "years";
  };

  switch (getTimeCategory(daysAgo)) {
    case "today":
      return "Today";
    case "days":
      return `${fullDate} (${daysAgo} days ago)`;
    case "weeks":
      const weeksAgo = Math.floor(daysAgo / 7);
      return `${fullDate} (${weeksAgo} weeks ago)`;
    case "months":
      const monthsAgo = Math.floor(daysAgo / 30);
      return `${fullDate} (${monthsAgo} months ago)`;
    case "years":
      const yearsAgo = Math.floor(daysAgo / 365);
      return `${fullDate} (${yearsAgo} years ago)`;
    default:
      return fullDate;
  }
}