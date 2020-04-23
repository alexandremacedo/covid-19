export default function paginate(array, page_number) {
  return array.slice(0, page_number * 10);
}
