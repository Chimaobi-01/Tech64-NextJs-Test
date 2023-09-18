

export default function Footer({ getPrePage, getNextPage, lastIndex, firstIndex, total }) {
  const showLastIndex = total > lastIndex ? 5 : total
  return (
    <footer >
      <div className="footer">
        <p>Showing {firstIndex + 1} to {showLastIndex} of {total} results</p>
        <div>
          <button onClick={getPrePage}>Previous</button>
          <button onClick={getNextPage}>Next</button>
        </div>
      </div>
    </footer>
  )
}
