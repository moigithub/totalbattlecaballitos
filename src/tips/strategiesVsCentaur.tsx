export const CentaurStrategiesTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>3 known strategies vs Centaur</h3>

      <p className='border border-gray-500 p-2 mx-5'>
        1. Target centaur before it hit you, so you can kill or reduce its amount
      </p>
      <p className='border border-gray-500 p-2 mx-5'>
        2. Introduce a ranged unit with huge health so it can survive the centaur attack, centaur
        have 50% bonus against ranged units, so they will prefer those instead your catapults
      </p>
      <p className='border border-gray-500 p-2 mx-5'>
        3. Reduce your catapults/units amount so its max health+bonus are below centaur strength
        (damage), doing this you can avoid being targeted, and send multiple layers of catapults
        (example, 100 cat5, 200 cat4, 300 cat3) so you can compensate the damage lost by reducing
        your number of catapults, or you will not have enough to take the walls down
      </p>
    </div>
  )
}
