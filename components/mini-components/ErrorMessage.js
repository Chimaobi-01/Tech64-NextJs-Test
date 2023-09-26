

export default function ErrorMessage() {
    const style = {
        container: {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        },
        error: {
            padding: '5rem',
            borderRadius: '10px',
            backgroundColor: 'lightgray',
            color: 'red',
            fontWeight: '800',
            lineHeight: '1.9',
            letterSpacing: '3px',
            fontWeight: '1.9rem',
            maxWidth: '400px',
            textAlign: 'center'

        }
    }
  return (
    <div style={style.container}>
    <p style={style.error}> An error occured. check your internet settings and try again </p>
</div>
  )
}
