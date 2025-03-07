type RatingCircleProps = {
  rating: string;
};

export default function RatingCircle({ rating }: RatingCircleProps) {
  function getRatingColor() {
    const ratingNumber = parseFloat(rating);
    if (ratingNumber >= 0 && ratingNumber <= 5) {
      return "#e74c3c";
    }
    if (ratingNumber > 5 && ratingNumber <= 7.5) {
      return "#f39c12";
    }
    if (ratingNumber > 7.5 && ratingNumber <= 10) {
      return "#2ecc71";
    }
  }

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={"h-16 w-16 sm:h-10 sm:w-10"}
      >
        <circle cx="12" cy="12" r={12} fill={getRatingColor()} />
        <text
          className={"text-[12px] md:text-[10px]"}
          x="12"
          y="12"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight="bold"
          fill="white"
        >
          {rating}
        </text>
      </svg>
    </div>
  );
}
