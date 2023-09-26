

export default function Header({ setSearch }) {
  return (
    <header>
          <span >Members</span>
          <form onSubmit={(e) => e.preventDefault()} className="search-flex">
            <i className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </i>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" />
          </form>
    </header>
  )
}
