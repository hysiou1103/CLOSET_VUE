export default function (n) {
  const date = new Date(n * 1000)
  return date.toLocaleDateString()
}
