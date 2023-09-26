

export default function Loading() {
    const style = {
        container: {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgray'
        },
        loading: {
            padding: '10px 15px',
            borderRadius: '10px',
            backgroundColor: 'white',
        }
    }
  return (
    <div style={style.container}>
        <p style={style.loading}>Loading...</p>
    </div>
  )
}
