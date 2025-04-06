import React from 'react'

export const HealthLimitTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Health Limit</h3>
      <p>
        This is a filter, to limit the amount of troops in the stack, based on their stack health,
        used togheter with the HP Bonus.
      </p>
      <p>
        Based on how the combat system select a target, if our health stack is BELOW the enemy stack
        strength, we can avoid being targeted.
      </p>
      <br />
      <p>
        Example: if citadel lvl 15, centaurs is killing our catapults lvl 5, we can layer our
        catapults stacks by sending cats5,cats4,cats3, and limiting each stack health to be below
        754,000 (which its the max damage centaurs can cause)
      </p>
      <code>health limit: 754000</code>
    </div>
  )
}
