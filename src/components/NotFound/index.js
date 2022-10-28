const NotFound = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      style={{height: 200, width: 200}}
    />
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found</p>
  </div>
)

export default NotFound
