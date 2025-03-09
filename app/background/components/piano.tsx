// PianoKeys.jsx
const PianoKeys = () => {
  // Array to represent the pattern of black keys
  const blackKeyPattern = [true, true, false, true, true, true, false]

  // Generate full piano keys pattern
  const generateKeys = () => {
    const pattern = []
    for (let i = 0; i < 7; i++) {
      pattern.push(...blackKeyPattern)
    }
    return pattern
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative h-[60vh] flex">
        {/* White keys */}
        <div className="flex w-full h-full">
          {Array(49)
            .fill(null)
            .map((_, index) => (
              <div
                key={`white-${index}`}
                className="flex-1 border border-gray-300 bg-white"
              />
            ))}
        </div>

        {/* Black keys */}
        <div className="absolute top-0 left-0 flex w-full h-[60%]">
          {generateKeys().map((hasBlackKey, index) => (
            <div key={`black-${index}`} className="flex-1 relative">
              {hasBlackKey && (
                <div className="absolute w-[70%] h-full bg-black left-[65%] -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PianoKeys
