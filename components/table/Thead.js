

export default function Thead() {
  return (
    <thead>
      <tr>
        <th className="thOne">
          <label className="checkbox"><input type="checkbox" /> <span></span></label>

          <div>
            <span>Name</span>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>
            </i>
          </div>
        </th>

        <th>Status</th>
        <th>Email</th>
        <th>Role</th>
        <th>Rating</th>
        <th></th>
      </tr>
    </thead>
  )
}
