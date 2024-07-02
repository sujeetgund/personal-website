export default function formatDate(dateStr: string): string {
  // Create a Date object
  const date = new Date(dateStr);

  // Define options for formatting the date
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  // Format the date
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
}
