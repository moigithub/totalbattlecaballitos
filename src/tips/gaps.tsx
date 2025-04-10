export const GapsTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Whats a GAP?</h3>
      <p>
        its a space between troops strength, in case a strength percent changes (because your
        captain leveled up, or you changed captains, equipment, etc.) to avoid loosing the stack
        order and its calculated based on the first troop stack strength, the downside is you will
        have less room for your next troops, because the max strength of your other troops available
        would be reduced, then you will need to increase the first troop amount, to increase the
        "top limit strength"
      </p>
      <p className='bg-green-800 w-fit'>
        [army (all troops) max strength_________________________________________]
      </p>
      <p className='bg-blue-800 w-fit'>
        [first troop]<span className='bg-orange-800 text-white'>[gap 50%______]</span>
        [second troop]<span className='bg-orange-800 text-white'>[gap 50%______]</span>
        [third troop]
      </p>
      <p className='bg-fuchsia-800 w-fit'>
        [first troop]<span className='bg-orange-800 text-white'>[gap 10%__]</span>[second troop____]
        <span className='bg-orange-800 text-white'>[gap 10%__]</span>[third troop____]
      </p>
      <p>
        the default value is based on a percentage from the first stack (where you can change above
        this), then adjust each card gap to use full or none
      </p>
    </div>
  )
}
