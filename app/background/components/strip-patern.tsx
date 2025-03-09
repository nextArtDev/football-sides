const StripePattern = () => {
  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(20, minmax(0, 1fr))',
    width: '100%',
    gap: '0',
  }

  const getStripeStyle = (index) => ({
    backgroundColor: index % 2 === 0 ? 'black' : 'white',
    height: index % 4 === 1 || index % 4 === 2 ? '60vh' : '100vh',
  })

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {[...Array(20)].map((_, index) => (
          <div key={index} style={getStripeStyle(index)} />
        ))}
      </div>
    </div>
  )
}

export default StripePattern
