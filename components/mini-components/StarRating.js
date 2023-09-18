import Star from "./Star";


export default function StarRating() {
  return (
    <td className="rating">
      <ul>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star color='lightGray' />
      </ul>
    </td>
  )
}
