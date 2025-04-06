export const STRBonusTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>STR bonus</h3>
      <p>
        This value is a MUST, its used to calculate the stack order, the stack strength, the str
        limit filter, and the gap
      </p>
      <p>
        Entering incorrect values will cause the game to explode, and you will have weird results
      </p>
    </div>
  )
}
