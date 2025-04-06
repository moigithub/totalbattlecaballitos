export const STRLimitTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>STR Limit</h3>
      <p>
        This is a filter, to limit the amount of troops in the stack, based on their stack strength,
        its used to target monsters like centaurs.
      </p>
      <p>
        Based on how the combat system select a target, if our stack have a bonus against certain
        type (ie: vsMounted - centaurs) AND our max stack strength (or damage) is below the centaurs
        health, then the centaurs will be targeted.
      </p>
    </div>
  )
}
