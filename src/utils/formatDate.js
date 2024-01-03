export default function formatDate(date) {
  const options = { month: 'short', year: 'numeric' };
  const formattedDateString = new Intl.DateTimeFormat('en-US', options).format(
    date
  );
  return formattedDateString;
}
